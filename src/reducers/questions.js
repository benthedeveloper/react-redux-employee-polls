import { RECEIVE_QUESTIONS } from '../actions/questions';

export default function questions(state = {}, action) {
  switch (action.type) {
    case RECEIVE_QUESTIONS:
      return {
        ...state,
        ...action.questions,
      };

    // TODO implement other cases like ADD_QUESTION, ANSWER_QUESTION, etc.
    
    default:
      return state;
  }
}
