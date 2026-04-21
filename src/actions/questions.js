import { getQuestions, saveQuestion, saveQuestionAnswer } from '../utils/api';
import { hideLoading, showLoading } from '../actions/loading';

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
    dispatch(showLoading());

    try {
      const questions = await getQuestions();
      dispatch(receiveQuestions(questions));
      return questions;
    } catch (error) {
      console.warn('Error in handleGetQuestions:', error);
    } finally {
      dispatch(hideLoading());
    }
  };
}

function addQuestion(formattedQuestion) {
  return {
    type: ADD_QUESTION,
    formattedQuestion,
  };
}

export function handleSaveQuestion(optionOneText, optionTwoText) {
  return async (dispatch, getState) => {
    const { authedUser } = getState();

    dispatch(showLoading());

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
      dispatch(hideLoading());
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

    dispatch(showLoading());

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
      dispatch(hideLoading());
    }
  };
}
