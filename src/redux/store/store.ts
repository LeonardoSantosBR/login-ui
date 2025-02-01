//configs
import { configureStore } from "@reduxjs/toolkit";
import { persistStore } from "redux-persist";

//reducers
import tokenPersistedReducer from "../persist/slices/token-persist.reducer";

const store = configureStore({
  reducer: {
    token: tokenPersistedReducer,
  },
});

const persistor = persistStore(store);
export { store, persistor };
