import { createSlice } from "@reduxjs/toolkit";

const SideBar = createSlice({
  name: "sideBar",
  initialState: { isOpen: false, item: []},
  reducers: {
    setIsOpen(state) {
      state.isOpen = !state.isOpen;
    },

    setItem(state, action) {
      state.item.push(action.payload);
      console.log(state.item);
    },
  },
});

export const sideBarAction = SideBar.actions;
export const sideBarReducer = SideBar.reducer;
