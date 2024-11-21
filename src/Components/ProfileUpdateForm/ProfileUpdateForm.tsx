import './ProfileUpdateForm.scss';
import { ChangeEventHandler, memo, MouseEventHandler } from 'react';
import Button from '../Button/Button';
import Input from '../Input/Input';
import TailSpinner from '../TailSpinner/TailSpinner';

export type TProfileUpdateFormProps = {
  newNickName: string;
  currentNickName: string;
  nickNameInputInvalid: boolean;
  isSubmitting: boolean;
  isBtnDisabled: boolean;
  onChangeMethod: ChangeEventHandler<HTMLInputElement>;
  saveMethod: MouseEventHandler<HTMLButtonElement>;
  cancelMethod: MouseEventHandler<HTMLButtonElement>;
};

const ProfileUpdateForm = memo(
  ({
    newNickName,
    currentNickName,
    nickNameInputInvalid,
    isSubmitting,
    isBtnDisabled,
    onChangeMethod,
    saveMethod,
    cancelMethod,
  }: TProfileUpdateFormProps) => {
    return (
      <form className='profile-update-form-wrapper'>
        <Input
          placeholderInput={currentNickName}
          nameInput='newNickName'
          classNameInput={`${
            nickNameInputInvalid ? 'invalid' : ''
          } profile-info-edit-field`}
          valueInput={newNickName}
          onChangeInputHandler={onChangeMethod}
        />
        <Button
          btnClassName='profile-edit-form-button'
          btnDisabled={isBtnDisabled}
          children={
            isSubmitting ? (
              <TailSpinner width={20} height={20} color='#ffffff' />
            ) : (
              'Save'
            )
          }
          btnOnClick={saveMethod}
        />
        <Button
          btnClassName='profile-edit-form-button'
          children='Cancel'
          btnOnClick={cancelMethod}
        />
      </form>
    );
  }
);

export default ProfileUpdateForm;
