import { createAction, createReducer, on } from '@ngrx/store';

export const login = createAction('[Login Component] Login', (username: string, password: string) => ({ username, password }));
export const logout = createAction('[Login Component] Logout');

export const authInitialState: { isLoggedIn: boolean; user: any; token: string | null } = { isLoggedIn: false, user: null, token: null };

export const authReducer = createReducer(
  authInitialState,
  on(login, (state, { username, password }) => ({ ...state, user: { username, password }, isLoggedIn: true, token: 'fake-jwt-token' })),
  on(logout, (state) => ({ ...state, isLoggedIn: false, user: null, token: null }))
);
