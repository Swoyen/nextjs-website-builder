import { configureStore } from "@reduxjs/toolkit";
import reducer from "./reducer";

const configStore = () => {
  return configureStore({
    reducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  });
};

export const store = configStore();
