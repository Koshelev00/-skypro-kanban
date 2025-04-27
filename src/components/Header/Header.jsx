import {
  StyledHeader,
  HeaderBlock,
  HeaderLogo,
  HeaderNav,
  HeaderButtonNew,
  HeaderUser,
  HeaderUserPop,
  HeaderUserName,
  HeaderUserMail,
  HeaderUserTheme,
  Container,
} from "./Header.styled";
export default function Header() {
  return (
    <StyledHeader className="header">
      <Container className="container">
        <HeaderBlock className="header__block">
          <HeaderLogo className="header__logo _show _light">
            <a href="" target="_self">
              <img src={"/logo.png"} alt="logo"></img>
            </a>
          </HeaderLogo>
          <div className="header__logo _dark">
            <a href="" target="_self">
              <img src={"/logo_dark.png"} alt="logo"></img>
            </a>
          </div>
          <HeaderNav className="header__nav">
            <HeaderButtonNew
              className="header__btn-main-new _hover01"
              id="btnMainNew"
            >
              <a href="#popNewCard">Создать новую задачу</a>
            </HeaderButtonNew>
            <HeaderUser
              href="#user-set-target"
              className="header__user _hover02"
            >
              Ivan Ivanov
            </HeaderUser>
            <HeaderUserPop
              className="header__pop-user-set pop-user-set"
              id="user-set-target"
            >
              {/* <!-- <a href="">x</a> --> */}
              <HeaderUserName className="pop-user-set__name">
                Ivan Ivanov
              </HeaderUserName>
              <HeaderUserMail className="pop-user-set__mail">
                ivan.ivanov@gmail.com
              </HeaderUserMail>
              <HeaderUserTheme className="pop-user-set__theme">
                <p>Темная тема</p>
                <input
                  type="checkbox"
                  className="checkbox"
                  name="checkbox"
                ></input>
              </HeaderUserTheme>
              <button type="button" className="_hover03">
                <a href="#popExit">Выйти</a>
              </button>
            </HeaderUserPop>
          </HeaderNav>
        </HeaderBlock>
      </Container>
    </StyledHeader>
  );
}
