import './Profile.scss';
import avatar from '../../assets/user.png';
import { AuthContext } from '../../Contexts/AuthContext';
import { ChangeEvent, useContext, useState } from 'react';
import ProfileUpdateForm from '../../Components/ProfileUpdateForm/ProfileUpdateForm';
import ProfileInfo from '../../Components/ProfileInfo/ProfileInfo';
import Header from '../../Components/Header/Header';
import { TAuthContext, TUserInfo } from '../../types/types';
import { toast } from 'react-toastify';
import usePersistedState from '../../Hooks/usePersistedData';
import { userInitialValue } from '../../Helpers/Factory';

type ProfileBooleanStates = {
  isFormEnabled: boolean;
  isSubmitting: boolean;
  isFieldEmpty: boolean;
  isSaveButtonDisabled: boolean;
};

const Profile = () => {
  const { updateUser } = useContext<TAuthContext>(AuthContext);

  const { value } = usePersistedState<TUserInfo>('user_data', userInitialValue);

  const [profileData, setProfileData] = useState<{
    email: string;
    nickName: string;
  }>({
    email: value.email,
    nickName: value.nickName,
  });

  const [booleanStates, setBooleanStates] = useState<ProfileBooleanStates>({
    isFormEnabled: false,
    isSubmitting: false,
    isFieldEmpty: false,
    isSaveButtonDisabled: false,
  });

  const [editValues, setEditValues] = useState<{ newNickName: string }>({
    newNickName: '',
  });

  const { isFormEnabled, isSubmitting, isFieldEmpty, isSaveButtonDisabled } =
    booleanStates;
  const { newNickName } = editValues;

  const onHandleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    setEditValues({ ...editValues, [name]: value });
  };

  const onHandleCancelClick = () => {
    setBooleanStates((prevState) => ({
      ...prevState,
      isFormEnabled: false,
      isFieldEmpty: false,
      isSubmitting: false,
    }));

    setEditValues({ ...editValues, newNickName: '' });
  };

  const onHandleSuccessfulSubmit = (nickName: string): void => {
    setProfileData({ ...profileData, nickName });
    setBooleanStates((prevState) => ({
      ...prevState,
      isSubmitting: false,
      isFormEnabled: false,
      isFieldEmpty: false,
      isSaveButtonDisabled: false,
    }));
  };

  const validateField = (): boolean => {
    if (newNickName === '') {
      setBooleanStates((prevState) => ({
        ...prevState,
        isFieldEmpty: true,
      }));
      toast.warning('Nickname must not be empty!');
      return false;
    }

    return true;
  };

  const submitUpdateUser = async (): Promise<void> => {
    const proceedSubmitting = validateField();
    if (!proceedSubmitting) return;

    setBooleanStates((prevState) => ({
      ...prevState,
      isSaveButtonDisabled: true,
      isSubmitting: true,
    }));

    const updateSucessful = await updateUser(value.id, newNickName);

    if (updateSucessful) {
      onHandleSuccessfulSubmit(newNickName);
    }

    onHandleCancelClick();
  };

  const showEditForm = () => {
    return (
      <ProfileUpdateForm
        newNickName={newNickName}
        currentNickName={profileData.nickName}
        nickNameInputInvalid={isFieldEmpty}
        isSubmitting={isSubmitting}
        isBtnDisabled={isSaveButtonDisabled}
        onChangeMethod={onHandleChange}
        saveMethod={submitUpdateUser}
        cancelMethod={onHandleCancelClick}
      />
    );
  };

  const showProfileInfo = () => {
    return (
      <ProfileInfo
        nickName={profileData.nickName}
        email={profileData.email}
        onClickMethod={() =>
          setBooleanStates((prevState) => ({
            ...prevState,
            isFormEnabled: true,
          }))
        }
      />
    );
  };

  const showContent = () => {
    return isFormEnabled ? showEditForm() : showProfileInfo();
  };

  return (
    <>
      <Header />
      <div className='profile'>
        <img className='profile-avatar' src={avatar} alt='avatar' width={200} />
        {showContent()}
      </div>
    </>
  );
};

export default Profile;
