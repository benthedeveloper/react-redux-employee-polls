import { connect } from 'react-redux';

const PollItem = ({ question, questionAuthor }) => {
  console.log('question in PollItem:', question);
  console.log('questionAuthor in PollItem:', questionAuthor);

  return (
    <li className="poll-item">
      <div>
        <div className="user-info">
          <img className="avatar-img" src={questionAuthor.avatarURL} alt="" />
          <div>
            <div className="user-name">{questionAuthor.name}</div>
            <div>
              <span>{new Date(question.timestamp).toLocaleDateString()}</span>
              <span> | </span>
              <span>{new Date(question.timestamp).toLocaleTimeString()}</span>
            </div>
          </div>
        </div>
        <div className="question-info">
          <div>Would you rather:</div>
          <ul>
            <li>{question.optionOne.text}</li>
            <li>{question.optionTwo.text}</li>
          </ul>
        </div>
      </div>
      <div className="button-container">
        {/* TODO change this to a Link - to questions/:questionId after setting up route */}
        <button className="btn">View</button>
      </div>
    </li>
  );
};

const mapStateToProps = ({ users }, { question }) => {
  const author = users[question.author];
  return {
    questionAuthor: author,
  };
};

export default connect(mapStateToProps)(PollItem);
