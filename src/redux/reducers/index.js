import { combineReducers } from "redux";
import { questionReducer } from "./questionReducer";


const rootReducer = combineReducers({
    questionList: questionReducer
})

export default rootReducer