import NavBar from './NavBar';
import ActiveUser from './ActiveUser';

const AppHeader = () => {
  return (
    <header>
      <div>
        <NavBar />
      </div>
      <div>
        <ActiveUser />
      </div>
    </header>
  );
};

export default AppHeader;
