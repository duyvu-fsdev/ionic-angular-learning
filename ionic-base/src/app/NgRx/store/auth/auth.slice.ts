import { Action, createAction, createReducer, on, props } from '@ngrx/store';
import { LoginInfor, User } from 'src/app/models/user';

export interface AuthState {
 isRegistering: boolean;
 isregistered: boolean;
 loginInfor: LoginInfor | null;
 isLoggedIn: boolean;
 isLoggingIn: boolean;
 currentUser: User | null;
 errorRegister: any;
 errorLogin: any;
}

export const register = createAction('[auth] register');
export const registerSuccess = createAction('[auth] register success', props<{ loginInfor: LoginInfor }>());
export const registerFail = createAction('[auth] register fail', props<{ errorRegister: any }>());
export const login = createAction('[auth] login');
export const loginSuccess = createAction('[auth] login success', props<{ currentUser: User }>());
export const loginFail = createAction('[auth] login fail', props<{ errorLogin: any }>());
export const logout = createAction('[auth] logout');

const initialState: AuthState = { isRegistering: false, isregistered: false, loginInfor: null, isLoggingIn: false, isLoggedIn: false, currentUser: null, errorRegister: null, errorLogin: null };

const reducer = createReducer(
 initialState,
 on(register, () => ({ isRegistering: true, isregistered: false, loginInfor: null, isLoggingIn: false, isLoggedIn: false, currentUser: null, errorRegister: null, errorLogin: null })),
 on(registerSuccess, ({ loginInfor }) => ({ isRegistering: false, isregistered: true, loginInfor, isLoggingIn: false, isLoggedIn: false, currentUser: null, errorRegister: null, errorLogin: null })),
 on(login, () => ({ isRegistering: false, isregistered: false, loginInfor: null, isLoggingIn: true, isLoggedIn: false, currentUser: null, errorRegister: null, errorLogin: null })),
 on(loginSuccess, ({ currentUser }) => ({ isRegistering: false, isregistered: false, loginInfor: null, isLoggingIn: false, isLoggedIn: true, currentUser, errorRegister: null, errorLogin: null })),
 on(registerFail, ({ errorRegister }) => ({ isRegistering: false, isregistered: false, loginInfor: null, isLoggingIn: false, isLoggedIn: false, currentUser: null, errorRegister, errorLogin: null })),
 on(loginFail, ({ errorLogin }) => ({ isRegistering: false, isregistered: false, loginInfor: null, isLoggingIn: false, isLoggedIn: false, currentUser: null, errorRegister: null, errorLogin })),
 on(logout, () => initialState),
);

export const authReducer = (state: AuthState, action: Action) => reducer(state, action);
