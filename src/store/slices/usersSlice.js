import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const userSlice = createSlice({
  name: "users",
  initialState: {
    listUsers: [],
  },
  reducers: {
    setUserList: (state, action) => {
      state.listUsers = action.payload;
    },
  },
});

// ------------------------------------------------------------------ //
export default userSlice.reducer;

// ------------------------------------------------------------------ //
const { setUserList } = userSlice.actions;

// ------------------------------------------------------------------ //
export const getAllUsers = () => {
  return async (dispatch) => {
    try {
      await axios
        .get("https://reqres.in/api/users?per_page=12")
        .then((res) => {
          dispatch(setUserList(res.data.data));
        })
        .catch((e) => console.log(e));
    } catch (e) {
      dispatch(setUserList([]));
    }
  };
};
