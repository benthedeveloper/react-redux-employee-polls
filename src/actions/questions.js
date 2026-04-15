import { getQuestions, saveQuestionAnswer } from '../utils/api';

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
export const ANSWER_QUESTION = 'ANSWER_QUESTION';

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

// TODO handle saving a new Question

function answerQuestion({ questionId, authedUser, answerId }) {
  return {
    type: ANSWER_QUESTION,
    questionId,
    authedUser,
    answerId,
  };
}

export function handleSaveQuestionAnswer(questionId, answerId) {
  return async (dispatch, getState) => {
    const { authedUser } = getState();

    // TODO dispatch disableForm or loading? (so user can't attempt submit again right away)

    try {
      const response = await saveQuestionAnswer({
        authedUser,
        questionId,
        answerId,
      });
      dispatch(answerQuestion({ authedUser, questionId, answerId }));
      return response;
    } catch (error) {
      console.warn('Error in handleSaveQuestionAnswer:', error);
      alert('Error ');
    } finally {
      // TODO re-enable form or turn off "loading" state
    }
  };
}
