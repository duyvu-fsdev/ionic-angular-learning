import { Action, createAction, createReducer, on } from '@ngrx/store';

export interface LoadingState {
 show: boolean;
}

export const show = createAction('[Loading] show');
export const hide = createAction('[Loading] hide');

const reducer = createReducer(
 { show: false },
 on(show, () => ({ show: true })),
 on(hide, () => ({ show: false })),
);

export function loadingReducer(state: LoadingState, action: Action<string>) {
 return reducer(state, action);
}
