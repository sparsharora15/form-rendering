import { configureStore } from "@reduxjs/toolkit";
import user from "./Slice.js";
export const store = configureStore({
  reducer: {
    user
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      ...getDefaultMiddleware(),
      serializableCheck: false,
    }),
});
