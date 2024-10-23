import { useState } from 'react';
import Input from '../../Components/Input/Input';
import Button from '../../Components/Button/Button';
import { axiosApi } from '../../http/config/axios';

const Login = () => {
  const [loginData, setLoginData] = useState({ email: '', password: '' });

  const signIn = async () => {
    const loginEndpoint: string = `auth/login`;
    const { email, password } = loginData;
    await axiosApi
      .post(loginEndpoint, {
        email,
        password,
      })
      .then(({ data }) => {
        console.log(data.token);
        document.cookie = data.token;
      })
      .catch((error) => {
        console.error(error);
      });
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
        <Button btnText='Sign In' btnOnClick={signIn} />
      </form>
    </div>
  );
};

export default Login;
