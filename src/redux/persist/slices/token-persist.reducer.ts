import { persistReducer } from "redux-persist";
import { persistConfig } from "../persist.config";
import tokenReducer from "../../slices/token.slice";

const tokenPersistReducer = persistReducer(persistConfig, tokenReducer);
export default tokenPersistReducer;
