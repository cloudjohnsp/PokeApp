import { Link, useNavigate } from 'react-router-dom';
import './FloatMenu.scss';
import { baseUrl } from '../../Helpers/Router';
import { useEffect, useRef, useState } from 'react';
import { signOut } from '../../Helpers/Storage';
import usePersistedState from '../../Hooks/usePersistedData';
import { userInitialValue } from '../../Helpers/Factory';

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
      <div
        className='float-menu-item link-item'
        onClick={() => {
          signOut();
          navigate(baseUrl);
        }}
      >
        Sign out
      </div>
    </div>
  );
};

export default FloatMenu;
