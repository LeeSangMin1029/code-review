import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/userSlice";
import logger from "redux-logger";

const makeStore = () => {
  const store = configureStore({
    reducer: {
      userReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    devTools: process.env.NODE_ENV === "development",
  });

  return store;
};

const store = makeStore();

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
