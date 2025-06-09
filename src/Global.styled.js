import { createGlobalStyle } from "styled-components";

export const SGlobal = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  *:before,
  *:after {
    box-sizing: border-box;
  }

  a,
  a:visited {
    text-decoration: none;
    cursor: pointer;
    color: ${({ theme }) => theme?.linkColor || '#000000'};
 
  }
    

  button,
  ._btn {
    cursor: pointer;
    outline: none;
    background: ${({ theme }) => theme?.buttonBg || '#f0f0f0'};
    color: ${({ theme }) => theme?.buttonText || '#000000'};
    border: ${({ theme }) => theme?.buttonBorder || '1px solid #ddd'};
  }

  ul li {
    list-style: none;
  }

  html,
  body {
    width: 100%;
    height: 100%;
    font-family: 'Roboto', Arial, Helvetica, sans-serif;
    background-color: ${({ theme }) => theme?.bodyBg || '#ffffff'};
    color: ${({ theme }) => theme?.textColor || '#000000'};
    transition: all 0.25s ease;
  }

  ._orange {
    background-color: ${({ theme }) => theme?.orangeBg || '#ffe4c2'};
    color: ${({ theme }) => theme?.orangeText || '#ff6d00'};
  }

  ._green {
    background-color: ${({ theme }) => theme?.greenBg || '#b4fdd1'};
    color: ${({ theme }) => theme?.greenText || '#06b16e'};
  }

  ._purple {
    background-color: ${({ theme }) => theme?.purpleBg || '#e9d4ff'};
    color: ${({ theme }) => theme?.purpleText || '#9a48f1'};
  }

  ._gray {
    background-color: ${({ theme }) => theme?.grayBg || '#94a6be'};
    color: ${({ theme }) => theme?.grayText || '#ffffff'};
}
    .pop-user-set:target,
.pop-exit:target,
.pop-new-card:target,
.pop-browse:target {
  display: block;
}
  h2 {
  text-align: center;
  font-size: 20px;
  font-weight: 700;
  line-height: 30px;
  letter-spacing: -0.4px;
  margin-bottom: 20px;
}
  .loud {
  font-size: 38px;
  line-height: 12px;
  margin-top: 20%;
  margin-left: 45%;
}
   ._current {
   font-weight: bold;
  
}
   ._other-month {
  opacity: 0;
}
  .wrapper {
  max-width: 100%;
  width: 100vw;
  min-height: 100vh;
  overflow: hidden;
  background-color: #F1F1F1;
}
   .container {
    max-width: 1260px;
    width: 100%;
    margin: 0 auto;
    padding: 0 30px;
  }
    ._hover01:hover {
  background-color: #33399b;
}

._hover02:hover, .header__user:hover {
  color: #33399b;
}
._hover02:hover::after, .header__user:hover::after {
  border-left-color: #33399b;
  border-bottom-color: #33399b;
}

._hover03:hover {
  background-color: #33399b;
  color: #FFFFFF;
}
._hover03:hover a {
  color: #FFFFFF;
}
  ._active-category {
  opacity: 1 !important;
}

  @media screen and (max-width: 495px) {
    .container {
      width: 100%;
      padding: 0 16px;
    }
  }
`;
