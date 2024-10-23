import { useContext, useState } from 'react';
import Input from '../../Components/Input/Input';
import Button from '../../Components/Button/Button';
import { UserContext } from '../../Contexts/UserContext';

const Login = () => {
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const { signIn } = useContext(UserContext);
  const { email, password } = loginData;

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
        <Button btnText='Sign In' btnOnClick={() => signIn(email, password)} />
      </form>
    </div>
  );
};

export default Login;
