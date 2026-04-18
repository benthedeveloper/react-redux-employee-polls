import PollItem from './PollItem';

const PollItemList = ({ questions }) => {
  const sortedQuestions = questions.sort((a, b) => b.timestamp - a.timestamp);
  
  return (
    <ul className="poll-item-list">
      {sortedQuestions.map((question) => (
        <PollItem key={question.id} question={question} />
      ))}
    </ul>
  );
};

export default PollItemList;
