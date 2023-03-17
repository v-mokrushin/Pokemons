import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { pokemonsSlice } from "./pokemons";

const rootReducer = combineReducers({
  pokemons: pokemonsSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
