import { useState } from 'react';
import Input from '../../Components/Input/Input';

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
      </form>
    </div>
  );
};

export default Login;
