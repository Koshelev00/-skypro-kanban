import { useNavigate } from 'react-router-dom';
import PopExit from '../components/PopExit/PopExit';

export default function ExitPage({ setIsAuth }) {
  const navigate = useNavigate();

  // Закрытие попапа
  const handleClose = () => navigate(-1); 

  // Подтверждение выхода
  const handleConfirm = () => {
    console.log('Logout confirmed!');
    setIsAuth(false);
    localStorage.removeItem('authToken');
    navigate('/signin');
  };

  return (
    <PopExit 
      onClose={handleClose}   // Передаем оба пропса
      onConfirm={handleConfirm} 
    />
  );
}