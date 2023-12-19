import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "../authStore/AuthSlice";
import { sideBarReducer } from "../sidebar/SideBarSlice";

const store = configureStore({
  reducer: {
    auth: AuthReducer,
    sideBar: sideBarReducer
  },
});

export default store;
