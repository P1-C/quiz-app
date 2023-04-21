import { ActionTypes } from "../constants/action-types"


export const AddQuestion = (question) => {
    return {
        type: ActionTypes.ADD_QUESTION,
        payload: question
    }
}