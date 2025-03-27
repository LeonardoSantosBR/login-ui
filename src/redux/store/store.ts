//configs
import { configureStore } from "@reduxjs/toolkit";
import { persistStore } from "redux-persist";

//reducers
import tokenPersistReducer from "../persist/slices/token-persist.reducer";

const store = configureStore({
  reducer: {
    token: tokenPersistReducer,
  },
});

const persistor = persistStore(store);
export { store, persistor };
