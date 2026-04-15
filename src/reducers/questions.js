import { RECEIVE_QUESTIONS, ANSWER_QUESTION } from '../actions/questions';

export default function questions(state = {}, action) {
  switch (action.type) {
    case RECEIVE_QUESTIONS:
      return {
        ...state,
        ...action.questions,
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
