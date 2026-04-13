import PollItem from './PollItem';

const PollItemList = ({ questions }) => {
  console.log('questions in PollItemList:', questions);

  return (
    <ul className="poll-item-list">
      {questions.map((question) => (
        <PollItem key={question.id} question={question} />
      ))}
    </ul>
  );
};

export default PollItemList;
