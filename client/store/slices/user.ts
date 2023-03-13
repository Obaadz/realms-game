import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../index";
import { User } from "../../types/user";
import { getUserByIdThunk } from "../../services/user";

interface UserState extends Partial<User> {
  loading: boolean;
}

const initialState: UserState = {
  email: "",
  loading: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateUser: (state, action: PayloadAction<Partial<User>>) => {
      console.log("run");
      return { ...state, ...action.payload };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUserByIdThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(
        getUserByIdThunk.fulfilled,
        (state, action: PayloadAction<Partial<User>>) => {
          return { ...state, ...action.payload, loading: false };
        }
      );
  },
});

export const { updateUser } = userSlice.actions;

export const selectUser = (state: RootState) => state.user;

export default userSlice.reducer;
