import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import { AppDispatch } from "@/redux/store";

import { UserType } from "@/utils/types";

export const UserSlice = createSlice({
  name: "user",
  initialState: null as UserType | null,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    commitUser(_state, action: PayloadAction<UserType | null>) {
      return action.payload;
    },
  },
});

export const { commitUser } = UserSlice.actions;

export const logOut = (dispatch: AppDispatch) => {
  Cookies.remove("auth_token");
  dispatch(commitUser(null));
  window.location.reload();
};
export default UserSlice.reducer;
