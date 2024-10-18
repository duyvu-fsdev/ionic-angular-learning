import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { AuthEffects } from '../effect/auth/AuthEffects';
import { authReducer } from './auth/auth.slice';
import { loadingReducer } from './loading/loading.slice';

export const AppStoreModule = [
 StoreModule.forRoot([]),
 StoreModule.forFeature('loading', loadingReducer),
 StoreModule.forFeature('auth', authReducer),
 EffectsModule.forRoot([AuthEffects]),
];
