import { getQuestions, saveQuestion, saveQuestionAnswer } from '../utils/api';

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
export const ADD_QUESTION = 'ADD_QUESTION';
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

function addQuestion(formattedQuestion) {
  return {
    type: ADD_QUESTION,
    formattedQuestion
  };
}

export function handleSaveQuestion(optionOneText, optionTwoText) {
  return async (dispatch, getState) => {
    const { authedUser } = getState();

    // TODO dispatch disableForm or loading? (so user can't attempt submit again right away)

    try {
      const formattedQuestion = await saveQuestion({
        optionOneText,
        optionTwoText,
        author: authedUser,
      });
      dispatch(addQuestion(formattedQuestion));
      return formattedQuestion;
    } catch (error) {
      console.warn('Error in handleSaveQuestion:', error);
      alert('Error saving new poll. Please try again.');
    } finally {
      // TODO re-enable form or turn off "loading" state
    }
  };
}

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
      alert('Error saving answer. Please try again.');
    } finally {
      // TODO re-enable form or turn off "loading" state
    }
  };
}
