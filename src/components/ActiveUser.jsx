import { connect } from 'react-redux';
import { logOutUser } from '../actions/authedUser';

const ActiveUser = ({ dispatch, activeUser }) => {
  const handleLogout = () => {
    dispatch(logOutUser());
  };

  return (
    <div className="active-user">
      <div>
        <img src={activeUser.avatarURL} alt="" className="avatar-img" />
        <span>{activeUser.name}</span>
      </div>
      <div>
        <button className="btn" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = ({ authedUser, users }) => {
  return {
    activeUser: users[authedUser],
  };
};

const ConnectedActiveUser = connect(mapStateToProps)(ActiveUser);

export default ConnectedActiveUser;
