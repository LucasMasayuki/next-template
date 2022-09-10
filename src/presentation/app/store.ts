/* eslint-disable import/no-cycle */
import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import colorModeReducer from '../../presentation/stores/color-mode-slice';

export const store = configureStore({
  reducer: {
    colorMode: colorModeReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
