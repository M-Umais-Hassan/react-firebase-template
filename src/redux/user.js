import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "abc@gmail.com",
  password: "123456",
};

const userSlice = createSlice({
  name: "userReducer",
  initialState,
  reducers: {
    setData: (state, action) => {
      state[action.payload.state] = action.payload.value;
    },
    clearData: () => initialState,
  },
});

export const { setData, clearData } = userSlice.actions;

export default userSlice.reducer;
