import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter, withInMemoryScrolling } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { routes } from './app.routes';
import { ARTICLES_DATA_SERVICE } from './services/articles/articles-service.token';
import { ArticlesStoreService } from './services/articles/articles-store.service';
import { ArticlesService } from './services/articles/articles.service';
import { POST_DATA_SERVICE } from './services/post/post-service.token';
import { PostService } from './services/post/post.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideAnimationsAsync(),
    provideRouter(
      routes,
      withInMemoryScrolling({
        scrollPositionRestoration: 'enabled',
        anchorScrolling: 'enabled',
      }),
    ),
    {
      provide: ARTICLES_DATA_SERVICE,
      useFactory: (store: ArticlesStoreService) => new ArticlesService(store),
      deps: [ArticlesStoreService],
    },
    {
      provide: POST_DATA_SERVICE,
      useClass: PostService,
    },
  ]
};
