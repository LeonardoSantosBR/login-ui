import { persistReducer } from "redux-persist";
import { persistConfig } from "../persist.config";
import tokenReducer from "../../slices/token.slice";

const tokenPersistedReducer = persistReducer(persistConfig, tokenReducer);
export default tokenPersistedReducer;
