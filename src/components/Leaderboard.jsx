import { useSelector } from 'react-redux';
import AppHeader from './AppHeader';

const Leaderboard = () => {
  const users = useSelector((state) => state.users);

  // TODO document this method
  const getNumPollsCreated = (user) => {
    return user.questions?.length || 0;
  };

  // TODO document this method
  const getNumPollsAnswered = (user) => {
    return Object.keys(user.answers)?.length || 0;
  };

  const sortedUsersArray = Object.values(users).sort((a, b) => {
    const aScore = getNumPollsAnswered(a) + getNumPollsCreated(a);
    const bScore = getNumPollsAnswered(b) + getNumPollsCreated(b);
    return bScore - aScore;
  });

  return (
    <>
      <AppHeader />
      <div className="page-content">
        <div className="leaderboard">
          <h2>Leaderboard</h2>
          <ol className="leaderboard-list" data-testid="leaderboard-list">
            {sortedUsersArray.map((user) => (
              <li key={user.id} className="leaderboard-list-item">
                <div className="user-info">
                  <img src={user.avatarURL} alt="" className="avatar-img" />
                  <span>{user.name}</span>
                </div>
                <div className="polls-info">
                  <span>Polls created: <span className='num-polls-created'>{getNumPollsCreated(user)}</span></span>
                  <span>Polls answered: <span className='num-polls-answered'>{getNumPollsAnswered(user)}</span></span>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </>
  );
};

export default Leaderboard;
