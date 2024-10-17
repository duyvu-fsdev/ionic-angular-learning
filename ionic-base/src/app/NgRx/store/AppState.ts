import { AuthState } from './auth/auth.slice';
import { LoadingState } from './loading/loading.slice';

export interface AppState {
 loading: LoadingState;
 auth: AuthState;
}
