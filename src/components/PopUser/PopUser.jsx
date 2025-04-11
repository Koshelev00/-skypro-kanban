import * as S from "./PopUser.styled.js";
export default function PopUser({ onClose }) {
  return (
    <S.PopExit className="pop-exit">
      <S.PopExitContainer className="pop-exit__container">
        <S.PopExitBlock className="pop-exit__block">
          <S.PopExitTll className="pop-exit__ttl">
            <h2>Выйти из аккаунта?</h2>
          </S.PopExitTll>
          <form className="pop-exit__form" id="formExit" action="#">
            <S.PopExitFormGroup className="pop-exit__form-group">
              <S.PopExitYes className="pop-exit__exi-yes _hover01">
                <S.Button onClick={onClose}>Да, выйти</S.Button>
              </S.PopExitYes>
              <S.PopExitNo className="pop-exit__exit-no _hover03">
                <S.Button onClick={onClose}>Нет, остаться</S.Button>
              </S.PopExitNo>
            </S.PopExitFormGroup>
          </form>
        </S.PopExitBlock>
      </S.PopExitContainer>
    </S.PopExit>
  );
}
