import {
  RECEIVE_QUESTIONS,
  ADD_QUESTION,
  ANSWER_QUESTION,
} from '../actions/questions';

export default function questions(state = {}, action) {
  switch (action.type) {
    case RECEIVE_QUESTIONS:
      return {
        ...state,
        ...action.questions,
      };

    case ADD_QUESTION:
      return {
        ...state,
        [action.formattedQuestion.id]: action.formattedQuestion,
      };

    case ANSWER_QUESTION:
      return {
        ...state,
        [action.questionId]: {
          ...state[action.questionId],
          [action.answerId]: {
            ...state[action.questionId][action.answerId],
            votes: state[action.questionId][action.answerId].votes.concat([
              action.authedUser,
            ]),
          },
        },
      };

    // TODO implement other cases like ADD_QUESTION, etc.

    default:
      return state;
  }
}
