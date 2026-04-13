import { getQuestions } from '../utils/api';

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';

export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  };
}

export function handleGetQuestions() {
  return async (dispatch) => {
    const questions = await getQuestions();
    dispatch(receiveQuestions(questions));
    return questions;
  };
}
