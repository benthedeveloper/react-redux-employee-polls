import {
  _getQuestions,
  _getUsers,
  _saveQuestion,
  _saveQuestionAnswer,
} from './_DATA';

export function getQuestions() {
  return _getQuestions();
}

export function getUsers() {
  return _getUsers();
}

// TODO handle saving a Question

// TODO handle saving the answer to a Question
