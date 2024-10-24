import { useContext, useState } from 'react';
import Input from '../../Components/Input/Input';
import Button from '../../Components/Button/Button';
import { AuthContext } from '../../Contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const { signIn } = useContext(AuthContext);
  const { email, password } = loginData;
  const navigate = useNavigate();

  const loginAndRedirect = async (email: string, password: string) => {
    const userId = await signIn(email, password);
    navigate(`/v1/poke-app/main/user/${userId}`);
  };

  return (
    <div>
      <form>
        <Input
          valueInput={loginData.email}
          placeholderInput='email'
          onChangeInputHandler={({ target: { value } }) =>
            setLoginData({ ...loginData, email: value })
          }
        />
        <Input
          valueInput={loginData.password}
          placeholderInput='password'
          typeInput='password'
          onChangeInputHandler={({ target: { value } }) =>
            setLoginData({ ...loginData, password: value })
          }
        />
        <Button
          btnText='Sign In'
          btnOnClick={() => loginAndRedirect(email, password)}
        />
      </form>
    </div>
  );
};

export default Login;
