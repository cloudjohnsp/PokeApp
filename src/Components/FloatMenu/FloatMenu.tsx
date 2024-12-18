import { Link, useNavigate } from 'react-router-dom';
import './FloatMenu.scss';
import { baseUrl } from '../../Helpers/Router';
import { useEffect, useRef, useState } from 'react';
import { deleteCookie, getCookie } from '../../Helpers/Storage';
import usePersistedState from '../../Hooks/usePersistedData';
import { userInitialValue } from '../../Helpers/Factory';
import { toast } from 'react-toastify';

const FloatMenu = () => {
  const { value } = usePersistedState('user_data', userInitialValue);

  const [isOpen, setIsOpen] = useState<boolean>(true);

  const menuRef = useRef<HTMLDivElement | null>(null);

  const navigate = useNavigate();

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  const signOut = (): void => {
    const cookieName = 'auth_cookie';
    deleteCookie(cookieName);
    if (!getCookie(cookieName)) {
      navigate(baseUrl);
      toast.success('You have successfully signed out!');
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  if (!isOpen) return null;

  return (
    <div ref={menuRef} className='float-menu-wrapper'>
      <Link
        className='float-menu-item link-item'
        to={`${baseUrl}/user/${value.id}`}
      >
        Profile
      </Link>
      <div className='float-menu-item link-item' onClick={() => signOut()}>
        Sign out
      </div>
    </div>
  );
};

export default FloatMenu;
