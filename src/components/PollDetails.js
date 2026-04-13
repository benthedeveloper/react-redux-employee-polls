import { useState } from 'react';
import { useParams } from 'react-router';
import { useSelector } from 'react-redux';
import AppHeader from './AppHeader';

const PollDetails = () => {
  const { question_id: questionId } = useParams();
  const question = useSelector((state) => state.questions[questionId]);
  const [isAnswered, setIsAnswered] = useState(false);
  const users = useSelector((state) => state.users);
  const authedUser = useSelector((state) => state.authedUser);

  // TODO need a 404 page instead
  if (!question) {
    return <div>Question not found</div>;
  }
  
  const activeUser = users[authedUser];
  const questionAuthor = users[question.author];

  // TODO move logic in this "if" statement to a helper function?
  if (Object.hasOwn(activeUser.answers, questionId)) {
    setIsAnswered(true);
  }

  return (
    <>
      <AppHeader />
      <div className="page-content">
        <div className='poll-details'>
          <header>
            <h2 class='poll-details-heading'>
              <span>Poll by:</span>
              <img src={questionAuthor.avatarURL} className='avatar-img' alt="" />
              <span className='author-name'>{questionAuthor.name}</span>
            </h2>
            {isAnswered && <div className='answered-box'>Answered</div>}
          </header>
          <div class="poll-details-content">
            <div>TODO render form</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PollDetails;
