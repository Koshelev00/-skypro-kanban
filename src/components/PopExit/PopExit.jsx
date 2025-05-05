import * as S from "./PopExit.styled.js";
import { useNavigate } from 'react-router-dom'
export default function PopExit({ onClose}) {

  const navigate = useNavigate();  
  const handleConfirm = () => {
    localStorage.removeItem('authToken');
    navigate('/signin');
  };
  return (
    <S.PopExit className="pop-exit">
      <S.PopExitContainer className="pop-exit__container">
        <S.PopExitBlock className="pop-exit__block">
          <S.PopExitTtl className="pop-exit__ttl">
            <h2>Выйти из аккаунта?</h2>
          </S.PopExitTtl>
          
      
          <div className="pop-exit__form"> 
      <S.PopExitFormGroup>
        <S.PopExitYes>
          <S.Button   onClick={(e) => {
          e.preventDefault()
          handleConfirm() 
        }}>
    Да, выйти</S.Button> 
        </S.PopExitYes>
        <S.PopExitNo>
          <S.Button onClick={onClose}>Нет, остаться</S.Button>
        </S.PopExitNo>
      </S.PopExitFormGroup>
    </div>
        </S.PopExitBlock>
      </S.PopExitContainer>
    </S.PopExit>
  );
}