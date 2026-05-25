import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Article } from '../../models/article';
import { Comment } from '../../models/comment';
import { IPostDataService, PostQueryResult } from './post-service.interface';

const LS_ARTICLES = 'blog-articles';
const LS_COMMENTS = 'blog-post-comments';

@Injectable()
export class PostService implements IPostDataService {
  fetchPost(id: string): Observable<PostQueryResult | null> {
    const article = this.readArticle(id);
    if (!article) {
      return of(null);
    }
    const comments = this.readComments(id);
    return of({ article, comments });
  }

  addComment(postId: string, comment: Comment): Observable<Comment[]> {
    const all = this.readComments(postId);
    const updated = [comment, ...all];
    this.writeComments(postId, updated);
    return of(updated);
  }

  updateCommentRating(postId: string, commentId: string, delta: number): Observable<Comment[]> {
    const all = this.readComments(postId).map((c) =>
      c.id === commentId ? { ...c, rating: c.rating + delta } : c,
    );
    this.writeComments(postId, all);
    return of(all);
  }

  updateArticleRating(id: string, delta: number): Observable<Article> {
    const articles = this.readAllArticles();
    const updated = articles.map((a) =>
      a.id === id ? { ...a, rating: (a.rating ?? 0) + delta } : a,
    );
    this.writeAllArticles(updated);
    const article = updated.find((a) => a.id === id)!;
    return of(article);
  }

  private readArticle(id: string): Article | null {
    const all = this.readAllArticles();
    return all.find((a) => a.id === id) ?? null;
  }

  private readAllArticles(): Article[] {
    if (typeof localStorage === 'undefined') {
      return [];
    }
    try {
      const raw = localStorage.getItem(LS_ARTICLES);
      if (!raw) {
        return [];
      }
      const parsed = JSON.parse(raw) as unknown;
      return Array.isArray(parsed) ? (parsed as Article[]) : [];
    } catch {
      return [];
    }
  }

  private writeAllArticles(articles: Article[]): void {
    if (typeof localStorage === 'undefined') {
      return;
    }
    localStorage.setItem(LS_ARTICLES, JSON.stringify(articles));
  }

  private readComments(postId: string): Comment[] {
    if (typeof localStorage === 'undefined') {
      return [];
    }
    try {
      const raw = localStorage.getItem(LS_COMMENTS);
      if (!raw) {
        return [];
      }
      const parsed = JSON.parse(raw) as Record<string, Comment[]>;
      return Array.isArray(parsed[postId]) ? parsed[postId] : [];
    } catch {
      return [];
    }
  }

  private writeComments(postId: string, comments: Comment[]): void {
    if (typeof localStorage === 'undefined') {
      return;
    }
    try {
      const raw = localStorage.getItem(LS_COMMENTS);
      const all: Record<string, Comment[]> = raw ? (JSON.parse(raw) as Record<string, Comment[]>) : {};
      all[postId] = comments;
      localStorage.setItem(LS_COMMENTS, JSON.stringify(all));
    } catch {
      return;
    }
  }
}
