import './Header.css';
import avatar from '../../assets/user.png';
import applogo from '../../assets/pokeapp.png';

const Header = () => {
  return (
    <header className='header-container'>
      <img className='header-img' src={applogo} alt='app logo' />
      <img className='header-avatar' src={avatar} alt='user avatar' />
    </header>
  );
};

export default Header;
