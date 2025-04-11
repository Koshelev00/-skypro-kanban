import * as S from "./Header.styled";
import { useState } from "react";
import PopUser from "../PopUser/PopUser";

export default function Header() {
  const [showExitPopup, setShowExitPopup] = useState(false);
  return (
    <S.StyledHeader className="header">
      <S.Container className="container">
        <S.HeaderBlock className="header__block">
          <S.HeaderLogo className="header__logo _show _light">
            <a href="" target="_self">
              <img src={"/logo.png"} alt="logo"></img>
            </a>
          </S.HeaderLogo>
          <div className="header__logo _dark">
            <a href="" target="_self">
              <img src={"/logo_dark.png"} alt="logo"></img>
            </a>
          </div>
          <S.HeaderNav className="header__nav">
            <S.HeaderButtonNew
              className="header__btn-main-new _hover01"
              id="btnMainNew"
            >
              <a href="#popNewCard">Создать новую задачу</a>
            </S.HeaderButtonNew>
            <S.HeaderUser
              href="#user-set-target"
              className="header__user _hover02"
            >
              Ivan Ivanov
            </S.HeaderUser>
            <S.HeaderUserPop
              className="header__pop-user-set pop-user-set"
              id="user-set-target"
            >
              {/* <!-- <a href="">x</a> --> */}
              <S.HeaderUserName className="pop-user-set__name">
                Ivan Ivanov
              </S.HeaderUserName>
              <S.HeaderUserMail className="pop-user-set__mail">
                ivan.ivanov@gmail.com
              </S.HeaderUserMail>
              <S.HeaderUserTheme className="pop-user-set__theme">
                <p>Темная тема</p>
                <input
                  type="checkbox"
                  className="checkbox"
                  name="checkbox"
                ></input>
              </S.HeaderUserTheme>
              <button
                type="button"
                className="_hover03"
                onClick={() => setShowExitPopup(true)}
              >
                Выйти
              </button>

              {showExitPopup && (
                <PopUser onClose={() => setShowExitPopup(false)} />
              )}
            </S.HeaderUserPop>
          </S.HeaderNav>
        </S.HeaderBlock>
      </S.Container>
    </S.StyledHeader>
  );
}
