import {
  _getQuestions,
  _getUsers,
  _saveQuestion,
  _saveQuestionAnswer,
} from './_DATA';

/**
 * Retrieves all questions
 * @returns {Promise} Questions object
 */
export function getQuestions() {
  return _getQuestions();
}

/**
 * Retrieves all users
 * @returns {Promise} Users object
 */
export function getUsers() {
  return _getUsers();
}

/**
 * Saves a new question
 * @param {Object} question - The question to save
 * @returns {Promise} A promise resolving to the saved question
 */
export function saveQuestion(question) {
  return _saveQuestion(question);
}

/**
 * Saves an answer to a question
 * @param {Object} params - The parameters for saving the answer
 * @param {string} params.authedUser - The authenticated user
 * @param {string} params.questionId - The ID of the question
 * @param {string} params.answerId - The ID of the answer
 * @returns {Promise} A promise resolving to true if the answer was saved successfully
 */
export function saveQuestionAnswer({ authedUser, questionId, answerId }) {
  return _saveQuestionAnswer({ authedUser, qid: questionId, answer: answerId });
}
