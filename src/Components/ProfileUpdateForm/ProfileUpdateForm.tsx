import { ChangeEventHandler, MouseEventHandler } from 'react';
import Button from '../Button/Button';
import Input from '../Input/Input';

export type TProfileUpdateFormProps = {
  newNickName: string;
  newEmail: string;
  onChangeMethod: ChangeEventHandler<HTMLInputElement>;
  saveMethod: MouseEventHandler<HTMLButtonElement>;
  cancelMethod: MouseEventHandler<HTMLButtonElement>;
};

const ProfileUpdateForm = ({
  newNickName,
  newEmail,
  onChangeMethod,
  saveMethod,
  cancelMethod,
}: TProfileUpdateFormProps) => {
  return (
    <form className='profile-update-form-wrapper'>
      <Input
        placeholderInput='NickName'
        nameInput='newNickName'
        classNameInput='profile-info-edit-field'
        valueInput={newNickName}
        onChangeInputHandler={onChangeMethod}
      />
      <Input
        placeholderInput='Email'
        nameInput='newEmail'
        classNameInput='profile-info-edit-field'
        valueInput={newEmail}
        onChangeInputHandler={onChangeMethod}
      />
      <Button btnText='Save' btnOnClick={saveMethod} />
      <Button btnText='Cancel' btnOnClick={cancelMethod} />
    </form>
  );
};

export default ProfileUpdateForm;
