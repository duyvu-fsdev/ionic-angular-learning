import { Action, createAction, createReducer, on, props } from '@ngrx/store';
import { LoginInfor, User } from 'src/app/models/user';

export interface AuthState {
 isRegistering: boolean;
 isregistered: boolean;
 loginInfor: LoginInfor | null;
 isLoggedIn: boolean;
 isLoggingIn: boolean;
 currentUser: User | null;
 error: any;
}

export const register = createAction('[auth] register');
export const registerSuccess = createAction('[auth] register success', props<{ loginInfor: LoginInfor }>());
export const registerFail = createAction('[auth] register fail', props<{ error: any }>());
export const login = createAction('[auth] login');
export const loginSuccess = createAction('[auth] login success', props<{ currentUser: User }>());
export const loginFail = createAction('[auth] login fail', props<{ error: any }>());
export const logout = createAction('[auth] logout');

const initialState: AuthState = {
 isRegistering: false,
 isregistered: false,
 loginInfor: null,
 isLoggingIn: false,
 isLoggedIn: false,
 currentUser: null,
 error: null,
};

const reducer = createReducer(
 initialState,
 on(register, (state) => ({ ...state, isRegistering: true, isregistered: false, loginInfor: null, isLoggingIn: false, isLoggedIn: false, currentUser: null, error: null })),
 on(registerSuccess, (state, { loginInfor }) => ({ ...state, isRegistering: false, isregistered: true, loginInfor, isLoggingIn: false, isLoggedIn: false, currentUser: null, error: null })),
 on(login, (state) => ({ ...state, isRegistering: false, isregistered: false, loginInfor: null, isLoggingIn: true, isLoggedIn: false, currentUser: null, error: null })),
 on(loginSuccess, (state, { currentUser }) => ({ ...state, isRegistering: false, isregistered: false, loginInfor: null, isLoggingIn: false, isLoggedIn: true, currentUser, error: null })),
 on(loginFail, registerFail, (state, { error }) => ({ ...state, isRegistering: false, isregistered: false, loginInfor: null, isLoggingIn: false, isLoggedIn: false, currentUser: null, error })),
 on(loginFail, registerFail, (state, { error }) => ({ ...state, isRegistering: false, isregistered: false, loginInfor: null, isLoggingIn: false, isLoggedIn: false, currentUser: null, error })),
 on(logout, () => initialState),
);

export const authReducer = (state: AuthState, action: Action) => reducer(state, action);
