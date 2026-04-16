import { RECEIVE_USERS } from '../actions/users';
import { ANSWER_QUESTION, ADD_QUESTION } from '../actions/questions';

export default function users(state = {}, action) {
  switch (action.type) {
    case RECEIVE_USERS:
      return {
        ...state,
        ...action.users,
      };

    case ANSWER_QUESTION: {
      return {
        ...state,
        [action.authedUser]: {
          ...state[action.authedUser],
          answers: {
            ...state[action.authedUser].answers,
            [action.questionId]: action.answerId,
          },
        },
      };
    }

    case ADD_QUESTION: {
      return {
        ...state,
        [action.formattedQuestion.author]: {
          ...state[action.formattedQuestion.author],
          questions: state[action.formattedQuestion.author].questions.concat([
            action.formattedQuestion.id,
          ]),
        },
      };
    }

    default:
      return state;
  }
}
