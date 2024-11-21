import Input from '../Input/Input';
import './SignUpModal.scss';
import Button from '../Button/Button';
import { ChangeEvent, memo, useContext, useState } from 'react';
import { TAuthContext, TSignUpData } from '../../types/types';
import { AuthContext } from '../../Contexts/AuthContext';
import TailSpinner from '../TailSpinner/TailSpinner';

type TInvalidInputs = {
  nickNameInvalid: boolean;
  emailInvalid: boolean;
  passwordInvalid: boolean;
};

const SignUpModal = memo(({ onClose }: { onClose: () => void }) => {
  const { signUp } = useContext<TAuthContext>(AuthContext);

  const [signUpData, setSignUpData] = useState<TSignUpData>({
    email: '',
    nickName: '',
    password: '',
  });

  const [errorState, setInvalidState] = useState<TInvalidInputs>({
    nickNameInvalid: false,
    emailInvalid: false,
    passwordInvalid: false,
  });

  const [isSubmitButtonDisabled, setIsSubmitButtonDisabled] =
    useState<boolean>(false);

  const { nickName, email, password } = signUpData;

  const submitForm = async (): Promise<void> => {
    const errors: TInvalidInputs = {
      nickNameInvalid: !nickName,
      emailInvalid: !email,
      passwordInvalid: !password,
    };

    setInvalidState(errors);

    const hasErrors = Object.values(errors).some((error) => error);

    if (hasErrors) return;

    setIsSubmitButtonDisabled(true);

    const created = await signUp(signUpData);
    if (created) closeModal();
  };

  const closeModal = (): void => {
    onClose();
    setIsSubmitButtonDisabled(false);
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    setSignUpData({ ...signUpData, [name]: value });

    if (value) {
      setInvalidState((prev) => ({ ...prev, [`${name}Invalid`]: false }));
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
            classNameInput={`modal-form-input ${
              errorState.nickNameInvalid ? 'invalid' : ''
            }`}
            valueInput={nickName}
            placeholderInput='Nickname'
            nameInput='nickName'
            onChangeInputHandler={handleInputChange}
          />
          <Input
            classNameInput={`modal-form-input ${
              errorState.emailInvalid ? 'invalid' : ''
            }`}
            valueInput={email}
            placeholderInput='Email'
            nameInput='email'
            onChangeInputHandler={handleInputChange}
          />
          <Input
            classNameInput={`modal-form-input ${
              errorState.passwordInvalid ? 'invalid' : ''
            }`}
            valueInput={password}
            placeholderInput='Password'
            typeInput='password'
            nameInput='password'
            onChangeInputHandler={handleInputChange}
          />
          <Button
            btnClassName='modal-form-input-button'
            btnDisabled={isSubmitButtonDisabled}
            children={
              isSubmitButtonDisabled ? (
                <TailSpinner width={20} height={20} color='#ffffff' />
              ) : (
                'Sign Up'
              )
            }
            btnOnClick={(e) => {
              e.preventDefault();
              submitForm();
            }}
          />
        </form>
      </div>
    </div>
  );
});

export default SignUpModal;
