import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import userReducer from '../reducers/userReducer';
import loginReducer from '../reducers/loginReducer';
import validateReducer from '../reducers/validateReducer';

export const store = configureStore({
  reducer: {
    users: userReducer,
    login: loginReducer,
    valid: validateReducer
  }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
