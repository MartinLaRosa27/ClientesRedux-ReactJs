import { configureStore } from "@reduxjs/toolkit";
import users from "./slices/usersSlice";

export default configureStore({
  reducer: {
    users,
  },
});
