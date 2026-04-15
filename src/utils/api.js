import {
  _getQuestions,
  _getUsers,
  _saveQuestion,
  _saveQuestionAnswer,
} from './_DATA';

// TODO document this function
export function getQuestions() {
  return _getQuestions();
}

// TODO document this function
export function getUsers() {
  return _getUsers();
}

// TODO document this function
export function saveQuestion(question) {
  return _saveQuestion(question);
}

// handle saving the answer to a Question
export function saveQuestionAnswer({ authedUser, questionId, answerId }) {
  return _saveQuestionAnswer({ authedUser, qid: questionId, answer: answerId });
}
