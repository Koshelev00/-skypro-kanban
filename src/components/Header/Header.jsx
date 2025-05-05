import * as S from "./Header.styled";
import { useState, useRef } from "react";
import PopUser from "../PopExit/PopExit";
import PopNewCard from "../PopNewCard/PopNewCard";
import { useEffect } from "react";
import { getToken } from '../../services/auth'

function useClickOutside(ref, callback) {
  useEffect(() => {
    const handleClick = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [ref, callback]);
}

export default function Header() {
  const [showExitPopup, setShowExitPopup] = useState(false);
  const [showNewCardPopup, setShowNewCardPopup] = useState(false);
  const [showHeaderUserPop, setShowHeaderUserPop] = useState(false);
  const headerUserPopRef = useRef();
  const newCardPopupRef = useRef();
  const [user] = useState(getToken())
  useClickOutside(headerUserPopRef, () => {
    setShowHeaderUserPop(false);
  });
  useClickOutside(newCardPopupRef, () => {
    setShowNewCardPopup(false);
  });

  return (
    <S.StyledHeader>
      <S.Container>
        <S.HeaderBlock>
          <S.HeaderLogo>
            <a href="" target="_self">
              <img src={"/logo.png"} alt="logo"></img>
            </a>
          </S.HeaderLogo>
          <div>
            <a href="" target="_self">
              <img src={"/logo_dark.png"} alt="logo"></img>
            </a>
          </div>
          <S.HeaderNav>
            <S.HeaderButtonNew onClick={() => setShowNewCardPopup(true)}>
              Создать новую задачу
            </S.HeaderButtonNew>
            {showNewCardPopup && (
          <PopNewCard 
            ref={newCardPopupRef} 
            onClose={() => setShowNewCardPopup(false)}
          />
        )}
            <S.HeaderUser onClick={() => setShowHeaderUserPop(true)}>
            {user ? getToken().name : ''}
            </S.HeaderUser>
            {showHeaderUserPop && (
              <S.HeaderUserPop ref={headerUserPopRef}>
                <S.HeaderUserName>   {getToken().name ? getToken().name : ''}</S.HeaderUserName>
                <S.HeaderUserMail>   {getToken().login ? getToken().login : ''}</S.HeaderUserMail>
                <S.HeaderUserTheme>
                  <p>Темная тема</p>
                  <input type="checkbox" name="checkbox"></input>
                </S.HeaderUserTheme>
                <button
                  type="button"
                  onClick={() => setShowExitPopup(true)}
                >
                  Выйти
                </button>
                {showExitPopup && (
                  <PopUser onClose={() => setShowExitPopup(false)} />
                )}
              </S.HeaderUserPop>
            )}
          </S.HeaderNav>
        </S.HeaderBlock>
      </S.Container>
    </S.StyledHeader>
  );
}