import { combineReducers} from "redux";
import authReducer from './authReducer'
import transectoinReducer from "./transectionReducer";

const rootReducer = combineReducers({

    auth:authReducer, 
    transactions:transectoinReducer
})

export default rootReducer