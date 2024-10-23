import { useState } from 'react';
import Input from '../../Components/Input/Input';
import Button from '../../Components/Button/Button';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <div>
      <form>
        <Input
          valueInput={email}
          placeholderInput='email'
          onChangeInputHandler={({ target: { value } }) => setEmail(value)}
        />
        <Input
          valueInput={password}
          placeholderInput='password'
          onChangeInputHandler={({ target: { value } }) => setPassword(value)}
        />
        <Button btnText='Sign Up' />
      </form>
    </div>
  );
};

export default Login;
