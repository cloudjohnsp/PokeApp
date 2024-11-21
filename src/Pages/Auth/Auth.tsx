import './Auth.scss';
import { toast } from 'react-toastify';
import logo from '../../assets/pokeapp.png';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { baseUrl } from '../../Helpers/Router';
import Input from '../../Components/Input/Input';
import Button from '../../Components/Button/Button';
import { AuthContext } from '../../Contexts/AuthContext';
import RegisterModal from '../../Components/SignUpModal/SignUpModal';
import TailSpinner from '../../Components/TailSpinner/TailSpinner';

type BooleanStates = {
  isSubmittingLogin: boolean;
  isButtonDisabled: boolean;
};

const Auth = () => {
  const { signIn } = useContext(AuthContext);
  const [loginData, setLoginData] = useState<{
    email: string;
    password: string;
  }>({ email: '', password: '' });
  const [showModal, setShowModal] = useState<boolean>(false);
  const [booleanStates, setBooleanStates] = useState<BooleanStates>({
    isSubmittingLogin: false,
    isButtonDisabled: false,
  });
  const navigate = useNavigate();
  const { email, password } = loginData;

  const loginAndRedirect = async (
    email: string,
    password: string
  ): Promise<void> => {
    if (email === '' || password === '') {
      toast.warning('Email or password must not be empty!');
      return;
    }
    setBooleanStates({
      ...booleanStates,
      isSubmittingLogin: true,
      isButtonDisabled: true,
    });
    const user = await signIn(email, password);

    if (!user) {
      toast.error('Email or password incorrect!');
    } else {
      setLoginData({ email: '', password: '' });
      navigate(`${baseUrl}/main`);
    }
    setBooleanStates({
      ...booleanStates,
      isSubmittingLogin: false,
      isButtonDisabled: false,
    });
  };

  const showSignUpModal = () => setShowModal(true);
  const hideSignUpModal = () => setShowModal(false);

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
            btnDisabled={booleanStates.isButtonDisabled}
            children={
              booleanStates.isSubmittingLogin ? (
                <TailSpinner width={20} height={20} color='#ffffff' />
              ) : (
                'Sign In'
              )
            }
            btnOnClick={() => loginAndRedirect(email, password)}
          />

          <Button
            btnClassName='login-form-button-container-button'
            children='Create Account'
            btnOnClick={showSignUpModal}
          />
        </div>
      </form>

      {showModal && <RegisterModal onClose={hideSignUpModal} />}
    </div>
  );
};

export default Auth;
