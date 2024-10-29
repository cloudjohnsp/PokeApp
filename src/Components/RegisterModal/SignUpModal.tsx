import Input from '../Input/Input';
import './SignUpModal.css';
import Button from '../Button/Button';
import { useContext, useState } from 'react';
import { TAuthContext, TSignUpData } from '../../types/types';
import { AuthContext } from '../../Contexts/AuthContext';
//import { isEmptyOrNull } from '../../Helpers/Forms';

const SignUpModal = ({ onClose }: { onClose: () => void }) => {
  const { signUp } = useContext<TAuthContext>(AuthContext);
  const [signUpData, setSignUpData] = useState<TSignUpData>({
    email: '',
    nickName: '',
    password: '',
  });

  const { nickName, email, password } = signUpData;

  const submitForm = async (): Promise<void> => {
    await signUp(signUpData).then((created: boolean | undefined) =>
      created ? onClose() : null
    );
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
            classNameInput={`modal-form-input`}
            valueInput={nickName}
            placeholderInput='Nickname'
            onChangeInputHandler={({ target: { value } }) =>
              setSignUpData({ ...signUpData, nickName: value })
            }
          />
          <Input
            classNameInput={`modal-form-input`}
            valueInput={email}
            placeholderInput='Email'
            onChangeInputHandler={({ target: { value } }) =>
              setSignUpData({ ...signUpData, email: value })
            }
          />
          <Input
            classNameInput={`modal-form-input`}
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

export default SignUpModal;
