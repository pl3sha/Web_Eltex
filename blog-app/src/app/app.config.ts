import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter, withInMemoryScrolling } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient } from '@angular/common/http';
import { InMemoryCache } from '@apollo/client/core';
import { Apollo, APOLLO_OPTIONS } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';

import { routes } from './app.routes';
import { environment } from '../environments/environment';
import { ARTICLES_DATA_SERVICE } from './services/articles/articles-service.token';
import { ArticlesStoreService } from './services/articles/articles-store.service';
import { ArticlesService } from './services/articles/articles.service';
import { ArticlesApiService } from './services/articles/articles-api.service';
import { ArticleMapperService } from './services/articles/article-mapper.service';
import { CategoryApiService } from './services/categories/category.service';
import { POST_DATA_SERVICE } from './services/post/post-service.token';
import { PostService } from './services/post/post.service';
import { PostGraphqlService } from './services/post/post-graphql.service';
import { PostMapperService } from './services/post/post-mapper.service';

export function apolloOptionsFactory(httpLink: HttpLink) {
  return {
    link: httpLink.create({ uri: environment.graphqlUrl || '/graphql' }),
    cache: new InMemoryCache(),
  };
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideAnimationsAsync(),
    provideHttpClient(),
    provideRouter(
      routes,
      withInMemoryScrolling({
        scrollPositionRestoration: 'enabled',
        anchorScrolling: 'enabled',
      }),
    ),
    {
      provide: APOLLO_OPTIONS,
      useFactory: apolloOptionsFactory,
      deps: [HttpLink],
    },
    Apollo,
    {
      provide: ARTICLES_DATA_SERVICE,
      useFactory: (
        store: ArticlesStoreService,
        apiService: ArticlesApiService,
      ) => (environment.useBackend ? apiService : new ArticlesService(store)),
      deps: [ArticlesStoreService, ArticlesApiService],
    },
    ArticlesApiService,
    ArticleMapperService,
    CategoryApiService,
    {
      provide: POST_DATA_SERVICE,
      useFactory: (local: PostService, graphql: PostGraphqlService) =>
        environment.useBackend ? graphql : local,
      deps: [PostService, PostGraphqlService],
    },
    PostGraphqlService,
    PostMapperService,
  ],
};
