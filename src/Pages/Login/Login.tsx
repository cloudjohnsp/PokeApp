import './Login.css';
import logo from '../../assets/pokeapp.png';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../../Components/Input/Input';
import Button from '../../Components/Button/Button';
import { AuthContext } from '../../Contexts/AuthContext';

const Login = () => {
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const { signIn } = useContext(AuthContext);
  const { email, password } = loginData;
  const navigate = useNavigate();

  const loginAndRedirect = async (email: string, password: string) => {
    const userId = await signIn(email, password);
    navigate(`/v1/poke-app/main/${userId}`);
    setLoginData({ email: '', password: '' });
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
