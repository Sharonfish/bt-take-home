import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";

export interface ProfileState {
  // TODO: Finish defining types for the state
}

const initialState: ProfileState = {
  // TODO: Finish implementing the initial state
}

export const counterSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setPokemonName: (state, action) => {
      // TODO: Finish implementing this action

      // Remove this line!
      state = action;
    },
  }
});

export const { setPokemonName } = counterSlice.actions;

// TODO: Finish implementing this selector
export const selectPokemonName = (state: RootState) => state.profile;

export default counterSlice.reducer;