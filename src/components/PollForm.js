import { useState } from 'react';
import { useNavigate } from 'react-router';

const PollForm = ({ question, isAnswered, onSubmit }) => {
  const navigate = useNavigate();
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const numVotesOption1 = question.optionOne.votes.length;
  const numVotesOption2 = question.optionTwo.votes.length;
  const totalVotes = numVotesOption1 + numVotesOption2;
  const percentageOption1 =
    totalVotes > 0 ? Math.round((numVotesOption1 / totalVotes) * 100) : 0;
  const percentageOption2 =
    totalVotes > 0 ? Math.round((numVotesOption2 / totalVotes) * 100) : 0;

  const handleSubmit = (event) => {
    event.preventDefault();

    if (isAnswered) {
      alert('Question is already answered!');
      return;
    }

    onSubmit(selectedAnswer);
  };

  const handleChange = (event) => {
    setSelectedAnswer(event.target.value);
  };

  const handleBackClick = () => {
    setSelectedAnswer('');
    navigate('/');
  };

  return (
    <form className="poll-form" onSubmit={handleSubmit}>
      <fieldset disabled={isAnswered}>
        <legend>Would you rather:</legend>
        <div>
          <div className="controls-wrapper">
            <input
              type="radio"
              id="optionOne"
              name="poll"
              value="optionOne"
              checked={selectedAnswer === 'optionOne'}
              onChange={handleChange}
            />
            <label htmlFor="optionOne">{question.optionOne.text}</label>
            {isAnswered && (
              <div>
                <span>
                  {`${numVotesOption1} ${numVotesOption1 === 1 ? 'person' : 'people'} voted`}
                </span>
                <span> | </span>
                <span>({`${percentageOption1}%`})</span>
              </div>
            )}
          </div>
          <div className="controls-wrapper">
            <input
              type="radio"
              id="optionTwo"
              name="poll"
              value="optionTwo"
              checked={selectedAnswer === 'optionTwo'}
              onChange={handleChange}
            />
            <label htmlFor="optionTwo">{question.optionTwo.text}</label>
            {isAnswered && (
              <div>
                <span>
                  {`${numVotesOption2} ${numVotesOption2 === 1 ? 'person' : 'people'} voted`}
                </span>
                <span> | </span>
                <span>({`${percentageOption2}%`})</span>
              </div>
            )}
          </div>
        </div>
        <div className="form-buttons primary">
          <button type="submit" className="btn" disabled={!selectedAnswer}>
            Submit
          </button>
        </div>
      </fieldset>
      <div className="form-buttons secondary">
        <button type="button" className="btn" onClick={handleBackClick}>
          Back to Dashboard
        </button>
      </div>
    </form>
  );
};

export default PollForm;
