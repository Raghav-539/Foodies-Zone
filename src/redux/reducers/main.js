// all the reducers will be combine here and then they will be called in store.js

import {combineReducers} from "redux";
import { cartreducer } from "./reducer";


const rootred = combineReducers({
    cartreducer
});


export default rootred