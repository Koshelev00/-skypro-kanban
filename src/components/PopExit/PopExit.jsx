import * as S from "./PopExit.styled.js";

export default function PopExit({ onClose, onConfirm }) {
  return (
    <S.PopExit className="pop-exit">
      <S.PopExitContainer className="pop-exit__container">
        <S.PopExitBlock className="pop-exit__block">
          <S.PopExitTtl className="pop-exit__ttl">
            <h2>Выйти из аккаунта?</h2>
          </S.PopExitTtl>
          
          {/* Заменили форму на div для избежания submit */}
          <div className="pop-exit__form"> {/* Было <form> */}
      <S.PopExitFormGroup>
        <S.PopExitYes>
          <S.Button onClick={onConfirm}>Да, выйти</S.Button> {/* Не type="submit"! */}
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