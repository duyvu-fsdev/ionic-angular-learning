import { StoreModule } from '@ngrx/store';
import { loadingReducer } from './loading/loading.slice';
import { authReducer } from './auth/auth.slice';

export const AppStoreModule = [
 StoreModule.forRoot([]),
 StoreModule.forFeature('loading', loadingReducer),
 StoreModule.forFeature('auth', authReducer),
];
