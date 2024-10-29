import './Login.css';
import { toast } from 'react-toastify';
import logo from '../../assets/pokeapp.png';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { baseUrl } from '../../Helpers/Router';
import Input from '../../Components/Input/Input';
import Button from '../../Components/Button/Button';
import { AuthContext } from '../../Contexts/AuthContext';
import RegisterModal from '../../Components/RegisterModal/RegisterModal';

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const { email, password } = loginData;
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const loginAndRedirect = async (
    email: string,
    password: string
  ): Promise<void> => {
    if (email === '' || password === '') {
      toast.warning('Email or password must not be empty!');
      return;
    }

    const user = await signIn(email, password);
    if (!user) {
      toast.error('Email or password incorrect!');
    } else {
      navigate(`${baseUrl}/main/${user.id}`);
      setLoginData({ email: '', password: '' });
    }
  };

  const showSignUpModal = () => setShowModal(true);
  const hideSignUpModal = () => setShowModal(false);

  return (
    <div className='login'>
      <img src={logo} alt='pokeapp logo' />
      <form className='login-form'>
        <Input
          classNameInput='login-form-input'
          valueInput={loginData.email}
          placeholderInput='email'
          onChangeInputHandler={({ target: { value } }) =>
            setLoginData({ ...loginData, email: value })
          }
        />
        <Input
          classNameInput='login-form-input'
          valueInput={loginData.password}
          placeholderInput='password'
          typeInput='password'
          onChangeInputHandler={({ target: { value } }) =>
            setLoginData({ ...loginData, password: value })
          }
        />
        <div className='login-form-button-container'>
          <Button
            btnClassName='login-form-button-container-button'
            btnText='Sign In'
            btnOnClick={() => loginAndRedirect(email, password)}
          />
          <Button
            btnClassName='login-form-button-container-button'
            btnText='Create Account'
            btnOnClick={showSignUpModal}
          />
        </div>
      </form>

      {showModal && <RegisterModal onClose={hideSignUpModal} />}
    </div>
  );
};

export default Login;
