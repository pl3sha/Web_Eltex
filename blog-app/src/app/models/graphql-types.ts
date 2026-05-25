export interface ApiGraphqlArticle {
  id: string;
  title: string;
  content: string;
  imgSrc?: string | null;
  rating: number;
  createdAt: string;
}

export interface ApiGraphqlComment {
  id: string;
  username: string;
  content: string;
  rating: number;
  createdAt: string;
  articleId: string;
}
