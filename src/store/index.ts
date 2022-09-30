import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./movieReducer";
import reviewReducer from "./reviewReducer";
import storage from "redux-persist/lib/storage";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

const persistConfig = {
  key: "root",
  storage,
};

const persistedMovieReducer = persistReducer(persistConfig, movieReducer);

const persistedReviewReducer = persistReducer(persistConfig, reviewReducer);

export const store = configureStore({
  reducer: {
    review: persistedReviewReducer,
    movie: persistedMovieReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
