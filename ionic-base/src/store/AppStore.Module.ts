import { StoreModule } from '@ngrx/store';
import { loadingReducer } from './loading/loading.slice';

export const AppStoreModule = [
 StoreModule.forRoot([]),
 StoreModule.forFeature('loading', loadingReducer),
];
