import {
  PopExit,
  PopExitContainer,
  PopExitTll,
  PopExitYes,
  PopExitNo,
  PopExitFormGroup,
  PopExitBlock,
} from "./PopUser.styled.js";
export default function PopUser() {
  return (
    <PopExit className="pop-exit" id="popExit">
      <PopExitContainer className="pop-exit__container">
        <PopExitBlock className="pop-exit__block">
          <PopExitTll className="pop-exit__ttl">
            <h2>Выйти из аккаунта?</h2>
          </PopExitTll>
          <form className="pop-exit__form" id="formExit" action="#">
            <PopExitFormGroup className="pop-exit__form-group">
              <PopExitYes className="pop-exit__exit-yes _hover01" id="exitYes">
                <a href="modal/signin.html">Да, выйти</a>{" "}
              </PopExitYes>
              <PopExitNo className="pop-exit__exit-no _hover03" id="exitNo">
                <a href="main.html">Нет, остаться</a>{" "}
              </PopExitNo>
            </PopExitFormGroup>
          </form>
        </PopExitBlock>
      </PopExitContainer>
    </PopExit>
  );
}
