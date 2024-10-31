import { MouseEventHandler } from 'react';
import Button from '../Button/Button';

export type TProfileInfoProps = {
  nickName: string;
  email: string;
  onClickMethod: MouseEventHandler<HTMLButtonElement>;
};

const ProfileInfo = ({ nickName, email, onClickMethod }: TProfileInfoProps) => {
  return (
    <div className='profile-info-wrapper'>
      <div className='profile-info-field'>{nickName}</div>

      <div className='profile-info-field'>{email}</div>

      <div className='profile-button-wrapper'>
        <Button
          btnClassName='profile-edit-button'
          btnText='Edit Profile'
          btnOnClick={onClickMethod}
        />
      </div>
    </div>
  );
};

export default ProfileInfo;
