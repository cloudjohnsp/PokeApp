import './Profile.css';
import avatar from '../../assets/user.png';
import { AuthContext } from '../../Contexts/AuthContext';
import { ChangeEvent, useContext, useState } from 'react';
import ProfileUpdateForm from '../../Components/ProfileUpdateForm/ProfileUpdateForm';
import ProfileInfo from '../../Components/ProfileInfo/ProfileInfo';
// import { errorHandler } from '../../http/errors';
// import { axiosApi } from '../../http/config/axios';

const Profile = () => {
  const { userData } = useContext(AuthContext);
  const [editValues, setEditValues] = useState({
    newNickName: '',
    newEmail: '',
  });

  const [isFormEnabled, setIsFormEnable] = useState(false);

  const { nickName, email } = userData;
  const { newNickName, newEmail } = editValues;

  const onHandleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    setEditValues({ ...editValues, [name]: value });
  };

  // const updateUser = () => {
  //   try {
  //   } catch (err) {
  //     errorHandler(err)
  //   }
  // }

  const showEditForm = () => {
    return (
      <ProfileUpdateForm
        newNickName={newNickName}
        newEmail={newEmail}
        onChangeMethod={onHandleChange}
        saveMethod={() => console.log('save')}
        cancelMethod={() => setIsFormEnable((prevState) => !prevState)}
      />
    );
  };

  const showProfileInfo = () => {
    return (
      <ProfileInfo
        nickName={nickName}
        email={email}
        onClickMethod={() => setIsFormEnable((prevState) => !prevState)}
      />
    );
  };

  return (
    <div className='profile'>
      <img className='profile-avatar' src={avatar} alt='avatar' width={100} />
      {isFormEnabled ? showEditForm() : showProfileInfo()}
    </div>
  );
};

export default Profile;
