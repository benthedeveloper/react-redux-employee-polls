import NavBar from './NavBar';
import ActiveUser from './ActiveUser';

const AppHeader = () => {
  return (
    <header className='app-header'>
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
