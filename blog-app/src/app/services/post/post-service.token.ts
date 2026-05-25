import { InjectionToken } from '@angular/core';
import { IPostDataService } from './post-service.interface';

export const POST_DATA_SERVICE = new InjectionToken<IPostDataService>('POST_DATA_SERVICE');
