import { expect, describe, it } from 'vitest';
import { _saveQuestion, _saveQuestionAnswer } from '../../utils/_DATA';

describe('_saveQuestion', () => {
  it('Will return saved question with all expected fields populated', async () => {
    const expectedOptionOneText = 'Test option 1 text';
    const expectedOptionTwoText = 'Test option 2 text';
    const expectedAuthor = 'tylermcginnis';
    const testQuestion = {
      optionOneText: expectedOptionOneText,
      optionTwoText: expectedOptionTwoText,
      author: expectedAuthor,
    };

    const result = await _saveQuestion(testQuestion);

    expect(result).not.toBeNull();
    expect(result.id).toEqual(expect.any(String));
    expect(result.timestamp).toEqual(expect.any(Number));
    expect(result.author).toEqual(expectedAuthor);
    expect(result.optionOne).not.toBeNull();
    expect(result.optionOne.votes).toHaveLength(0);
    expect(result.optionOne.text).toEqual(expectedOptionOneText);
    expect(result.optionTwo).not.toBeNull();
    expect(result.optionTwo.votes).toHaveLength(0);
    expect(result.optionTwo.text).toEqual(expectedOptionTwoText);
  });

  it('Will reject with an error if incorrect data is passed in', async () => {
    const invalidQuestion = {
      optionOneText: 'Test option 1 text',
      author: 'sarahedo',
    };

    await expect(_saveQuestion(invalidQuestion)).rejects.toEqual(
      'Please provide optionOneText, optionTwoText, and author',
    );
  });
});

describe('_saveQuestionAnswer', () => {
  it('Will return true when valid data is sent', async () => {
    const authedUser = 'tylermcginnis';
    const qid = 'xj352vofupe1dqz9emx13r';
    const answer = 'optionTwo';

    const result = await _saveQuestionAnswer({ authedUser, qid, answer });

    expect(result).toBe(true);
  });

  it('Will reject with an error when invalid data is sent', async () => {
    const authedUser = 'tylermcginnis';
    // send questionId (invalid property) instead of qid
    const questionId = 'xj352vofupe1dqz9emx13r';
    const answer = 'optionTwo';

    await expect(
      _saveQuestionAnswer({ authedUser, questionId, answer }),
    ).rejects.toEqual('Please provide authedUser, qid, and answer');
  });
});
