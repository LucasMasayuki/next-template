/* eslint-disable import/no-cycle */
/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { RootState } from 'presentation/app/store';
import { ColorModes } from 'utils/constants';
import {
  getCurrentColorMode,
  setCurrentColorMode,
} from '../../main/adapters/current-color-mode-adapter';

export type ColorModeState = {
  colorMode: ColorModes;
};

const initialState: ColorModeState = {
  colorMode: getCurrentColorMode() ?? ColorModes.LIGHT,
};

export const colorModeSlice = createSlice({
  name: 'color-mode',
  initialState,
  reducers: {
    toogleColorMode: (state) => {
      state.colorMode =
        state.colorMode === ColorModes.DARK
          ? ColorModes.LIGHT
          : ColorModes.DARK;
      setCurrentColorMode(state.colorMode);
    },
  },
});

export const { toogleColorMode } = colorModeSlice.actions;

export const selectColorMode = (state: RootState): ColorModeState =>
  state.colorMode;

export default colorModeSlice.reducer;
