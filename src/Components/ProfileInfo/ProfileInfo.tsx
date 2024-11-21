import './ProfileInfo.scss';
import { memo, MouseEventHandler } from 'react';
import Button from '../Button/Button';

export type TProfileInfoProps = {
  nickName: string;
  email: string;
  onClickMethod: MouseEventHandler<HTMLButtonElement>;
};

const ProfileInfo = memo(
  ({ nickName, email, onClickMethod }: TProfileInfoProps) => {
    return (
      <div className='profile-info-wrapper'>
        <div className='profile-info-field'>{nickName}</div>

        <div className='profile-info-field'>{email}</div>

        <Button
          btnClassName='profile-info-edit-button'
          children='Change Nickname'
          btnOnClick={onClickMethod}
        />
      </div>
    );
  }
);

export default ProfileInfo;
