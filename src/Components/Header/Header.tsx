import './Header.css';
import avatar from '../../assets/user.png';
import applogo from '../../assets/pokeapp.png';
import { Link } from 'react-router-dom';
import { baseUrl } from '../../Helpers/Router';
import { useContext } from 'react';
import { AuthContext } from '../../Contexts/AuthContext';

const Header = () => {
  const { userData } = useContext(AuthContext);

  return (
    <header className='header-container'>
      <img className='header-img' src={applogo} alt='app logo' />
      <Link to={`${baseUrl}/user/${userData.id}`}>
        <img className='header-avatar' src={avatar} alt='user avatar' />
      </Link>
    </header>
  );
};

export default Header;
