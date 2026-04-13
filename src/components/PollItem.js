import { connect } from 'react-redux';

const PollItem = ({ question, questionAuthor }) => {
  console.log('question in PollItem:', question);
  console.log('questionAuthor in PollItem:', questionAuthor);

  return (
    <li className="poll-item">
      Poll Item
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
