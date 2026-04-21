import { useState } from 'react';
import { useNavigate } from 'react-router';
import AppHeader from './AppHeader';
import { showLoading, hideLoading } from '../actions/loading';
import { handleSaveQuestion } from '../actions/questions';
import { useDispatch } from 'react-redux';

const CreatePoll = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [optionOneText, setOptionOneText] = useState('');
  const [optionTwoText, setOptionTwoText] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!optionOneText || !optionTwoText) {
      alert('Please fill out both options.');
      return;
    }

    dispatch(showLoading());
    try {
      await dispatch(handleSaveQuestion(optionOneText, optionTwoText));
      dispatch(hideLoading());
      navigate('/');
    } catch (error) {
      console.warn('Error creating new poll:', error);
      dispatch(hideLoading());
    }
  };

  const handleBackClick = () => {
    setOptionOneText('');
    setOptionTwoText('');
    navigate('/');
  };

  return (
    <>
      <AppHeader />
      <div className="page-content">
        <div className="create-poll">
          <h2>Create a new poll</h2>
          <p>Fill in the options below and click Submit to create a new poll</p>
          <form className="create-poll-form" onSubmit={handleSubmit}>
            <h3>Would you rather:</h3>
            <div>
              <input
                type="text"
                value={optionOneText}
                placeholder="Type option 1 here"
                onChange={(event) => setOptionOneText(event.target.value)}
                required
              />
            </div>
            <div>
              <input
                type="text"
                value={optionTwoText}
                placeholder="Type option 2 here"
                onChange={(event) => setOptionTwoText(event.target.value)}
                required
              />
            </div>
            <div className="form-buttons primary">
              <button
                type="submit"
                className="btn"
                disabled={!optionOneText || !optionTwoText}
              >
                Submit
              </button>
            </div>
          </form>
          <div className="form-buttons secondary">
            <button type="button" className="btn" onClick={handleBackClick}>
              Back to Dashboard
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreatePoll;
