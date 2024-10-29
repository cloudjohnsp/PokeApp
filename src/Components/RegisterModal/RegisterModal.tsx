import Input from '../Input/Input';
import './RegisterModal.css';
import Button from '../Button/Button';
import { useContext, useState } from 'react';
import { TSignUpData } from '../../types/types';
import { AuthContext } from '../../Contexts/AuthContext';
import { validatePassword } from '../../Helpers/Forms';
import { toast } from 'react-toastify';

const RegisterModal = ({ onClose }: { onClose: () => void }) => {
  const { signUp } = useContext(AuthContext);
  const [signUpData, setSignUpData] = useState<TSignUpData>({
    email: '',
    nickName: '',
    password: '',
  });

  const { nickName, email, password } = signUpData;

  const submitForm = async (): Promise<void> => {
    const isValidPassword: boolean = await validatePassword(password);
    if (!isValidPassword) {
      toast.error(
        <div>
          Password must contain the following:
          <br /> 1 - A lowercase letter <br /> 2 - An uppercase letter <br /> 3
          - A number
          <br /> 4 - A special character <br /> 5 - Between 8 and 16 characters
        </div>
      );
    } else {
      signUp(signUpData);
      onClose();
    }
  };

  return (
    <div className='modal'>
      <div className='modal-content'>
        <button className='close-button' onClick={onClose}>
          &times;
        </button>
        <div className='modal-text-container'>
          <h2 className='modal-text-container-header'>Sign Up</h2>
          <p className='modal-text-container-message'>
            Create a free account with your email!
          </p>
        </div>
        <form className='modal-form'>
          <Input
            classNameInput='modal-form-input'
            valueInput={nickName}
            placeholderInput='Nickname'
            onChangeInputHandler={({ target: { value } }) =>
              setSignUpData({ ...signUpData, nickName: value })
            }
          />
          <Input
            classNameInput='modal-form-input'
            valueInput={email}
            placeholderInput='Email'
            onChangeInputHandler={({ target: { value } }) =>
              setSignUpData({ ...signUpData, email: value })
            }
          />
          <Input
            classNameInput='modal-form-input'
            valueInput={password}
            placeholderInput='Password'
            typeInput='password'
            onChangeInputHandler={({ target: { value } }) =>
              setSignUpData({ ...signUpData, password: value })
            }
          />
          <Button
            btnClassName='modal-form-input-button'
            btnText='Sign Up'
            btnOnClick={(e) => {
              e.preventDefault();
              submitForm();
            }}
          />
        </form>
      </div>
    </div>
  );
};

export default RegisterModal;
