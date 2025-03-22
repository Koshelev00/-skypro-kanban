import styled from "styled-components";
export const SHeader = styled.header`

  width: 100%;
  margin: 0 auto;
  background-color: #ffffff;

  .header__user:hover {
    color: #33399b;
  }
  .header__user:hover::after {
    border-left-color: #33399b;
    border-bottom-color: #33399b;
  }
 

  .header__block {
    height: 70px;
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: space-between;
    position: relative;
    top: 0;
    left: 0;
    padding: 0 10px;
  }
  .header__logo img {
    width: 85px;
  }
  .header__nav {
    max-width: 290px;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .header__btn-main-new {
    width: 178px;
    height: 30px;
    border-radius: 4px;
    background-color: #565eef;
    color: #ffffff;
    border: none;
    font-size: 14px;
    line-height: 1;
    font-weight: 500;
    margin-right: 20px;
  }
  .header__btn-main-new a {
    color: #ffffff;
  }
  .header__user {
    height: 20px;
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    line-height: 20px;
    color: #565eef;
  }
  .header__user::after {
    content: "";
    display: block;
    width: 6px;
    height: 6px;
    border-radius: 1px;
    border-left: 1.9px solid #565eef;
    border-bottom: 1.9px solid #565eef;
    transform: rotate(-45deg);
    margin: -6px 0 0 5px;
    padding: 0;
  }
  .header__pop-user-set {
    display: none;
    position: absolute;
    top: 61px;
    right: 0;
    width: auto;
    height: auto;
    width: 213px;
    height: 205px;
    border-radius: 10px;
    border: 0.7px solid rgba(148, 166, 190, 0.4);
    background: #fff;
    box-shadow: 0px 10px 39px 0px rgba(26, 56, 101, 0.21);
    padding: 34px;
    text-align: center;
    z-index: 2;
  }
    .pop-user-set__name {
  color: #000;
  font-size: 14px;
  font-weight: 500;
  line-height: 21px;
  letter-spacing: -0.14px;
  margin-bottom: 4px;
}
.pop-user-set__mail {
  color: #94A6BE;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: -0.14px;
  margin-bottom: 10px;
}
.pop-user-set__theme {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
}
.pop-user-set__theme p {
  color: #000;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: -0.14px;
}
.pop-user-set__theme input[type=checkbox] {
  position: relative;
  width: 24px;
  height: 13px;
  border-radius: 100px;
  background: #EAEEF6;
  outline: none;
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
}
.pop-user-set__theme input[type=checkbox]::before {
  content: "";
  position: absolute;
  top: 1px;
  left: 1px;
  width: 11px;
  height: 11px;
  border-radius: 50%;
  background-color: #94A6BE;
  transition: 0.5s;
}
.pop-user-set__theme input:checked[type=checkbox]::before {
  left: 12px;
}
.pop-user-set button {
  width: 72px;
  height: 30px;
  background: transparent;
  color: #565EEF;
  border-radius: 4px;
  border: 1px solid #565EEF;
}
.pop-user-set button a {
  color: #565EEF;
}
  ._hover03:hover {
  background-color: #33399b;
  color: #FFFFFF;
}
._hover03:hover a {
  color: #FFFFFF;
}

  @media screen and (max-width: 495px) {
    .header__btn-main-new {
      z-index: 3;
      position: fixed;
      left: 16px;
      bottom: 30px;
      top: auto;
      width: calc(100vw - 32px);
      height: 40px;
      border-radius: 4px;
      margin-right: 0;
    }
  }

  
`;

