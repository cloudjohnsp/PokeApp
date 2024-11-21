import './Header.scss';
import avatar from '../../assets/user.png';
import applogo from '../../assets/pokeapp.png';
import { Link } from 'react-router-dom';
import { baseUrl } from '../../Helpers/Router';
import FloatMenu from '../FloatMenu/FloatMenu';
import { useState } from 'react';

const Header = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  const showFloatingMenu = () => {
    setShowMenu((prevState) => !prevState);
  };

  return (
    <header className='header-container'>
      <Link to={`${baseUrl}/main`}>
        <img className='header-img' src={applogo} alt='app logo' />
      </Link>
      <img
        className='header-avatar'
        src={avatar}
        alt='user avatar'
        onClick={() => showFloatingMenu()}
      />
      {showMenu && <FloatMenu />}
    </header>
  );
};

export default Header;
