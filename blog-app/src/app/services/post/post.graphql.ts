import { gql } from 'apollo-angular';

export const GET_POST = gql`
  query GetPost($id: ID!) {
    article(id: $id) {
      id
      title
      content
      imgSrc
      rating
      createdAt
    }
    commentsByArticle(articleId: $id) {
      id
      username
      content
      rating
      createdAt
      articleId
    }
  }
`;

export const CREATE_COMMENT = gql`
  mutation CreateComment($createComment: CreateCommentInput!) {
    createComment(createComment: $createComment) {
      id
      username
      content
      rating
      createdAt
      articleId
    }
  }
`;

export const ARTICLE_RATING_UP = gql`
  mutation ArticleRatingUp($id: ID!) {
    articleRatingUp(id: $id) {
      id
      rating
    }
  }
`;

export const ARTICLE_RATING_DOWN = gql`
  mutation ArticleRatingDown($id: ID!) {
    articleRatingDown(id: $id) {
      id
      rating
    }
  }
`;

export const COMMENT_RATING_UP = gql`
  mutation CommentRatingUp($id: ID!) {
    commentRatingUp(id: $id) {
      id
      rating
    }
  }
`;

export const COMMENT_RATING_DOWN = gql`
  mutation CommentRatingDown($id: ID!) {
    commentRatingDown(id: $id) {
      id
      rating
    }
  }
`;
