import { useParams } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import AppHeader from './AppHeader';
import PollForm from './PollForm';
import { handleSaveQuestionAnswer } from '../actions/questions';

const PollDetails = () => {
  const { question_id: questionId } = useParams();
  const dispatch = useDispatch();
  const question = useSelector((state) => state.questions[questionId]);
  const users = useSelector((state) => state.users);
  const authedUser = useSelector((state) => state.authedUser);

  const handleSubmit = (selectedAnswer) => {
    dispatch(handleSaveQuestionAnswer(questionId, selectedAnswer))
  };

  // TODO need a 404 page instead
  if (!question) {
    return <div>Question not found</div>;
  }

  const activeUser = users[authedUser];
  const questionAuthor = users[question.author];
  const isAnswered = Object.hasOwn(activeUser.answers, questionId);
  const userAnswer = activeUser.answers[questionId];

  return (
    <>
      <AppHeader />
      <div className="page-content">
        <div className="poll-details">
          <header>
            <h2 className="poll-details-heading">
              <span>Poll by:</span>
              <img
                src={questionAuthor.avatarURL}
                className="avatar-img"
                alt=""
              />
              <span className="author-name">{questionAuthor.name}</span>
            </h2>
            {isAnswered && <div className="answered-box">Answered</div>}
          </header>
          <div className="poll-details-content">
            <PollForm
              question={question}
              isAnswered={isAnswered}
              userAnswer={userAnswer}
              onSubmit={handleSubmit}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default PollDetails;
