import { configureStore } from "@reduxjs/toolkit";
import cardReducer from "@/redux/Cart";

const store = configureStore({
  reducer: {
    card: cardReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
