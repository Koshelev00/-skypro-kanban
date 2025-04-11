import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PopUser from '../PopUser/PopUser';

export default function ExitPage({ setIsAuth }) {
  const navigate = useNavigate();

  useEffect(() => {
    setIsAuth(false);
    localStorage.removeItem('authToken');
    navigate('/signIn');
  }, [setIsAuth, navigate]);

  return <PopUser/>;
}