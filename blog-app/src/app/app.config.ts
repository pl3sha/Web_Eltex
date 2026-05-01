import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter, withInMemoryScrolling } from '@angular/router';

import { routes } from './app.routes';
import { ARTICLES_DATA_SERVICE } from './services/articles/articles-service.token';
import { ArticlesStoreService } from './services/articles/articles-store.service';
import { ArticlesService } from './services/articles/articles.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
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
  ]
};
