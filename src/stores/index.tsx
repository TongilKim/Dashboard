import { configureStore } from "@reduxjs/toolkit";
import snackBarReducer from "./slice/SnackbarSlice";
import userEventInfoReducer from "./slice/UserEventInfoSlice";

export const store = configureStore({
  reducer: {
    userEventInfo: userEventInfoReducer,
    snackBar: snackBarReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
