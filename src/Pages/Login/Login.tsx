import './Login.css';
import logo from '../../assets/pokeapp.png';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../../Components/Input/Input';
import Button from '../../Components/Button/Button';
import { AuthContext } from '../../Contexts/AuthContext';
import { toast } from 'react-toastify';

const Login = () => {
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const { signIn, userData } = useContext(AuthContext);
  const navigate = useNavigate();
  const { email, password } = loginData;

  const loginAndRedirect = async (
    email: string,
    password: string
  ): Promise<void> => {
    const isAuthenticated = await signIn(email, password);

    if (isAuthenticated) {
      navigate(`/v1/poke-app/${userData?.id}`);
      setLoginData({ email: '', password: '' });
    } else {
      toast.error('email or password incorrect!', { position: 'top-right' });
    }
  };

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
          />
        </div>
      </form>
    </div>
  );
};

export default Login;
