import styled from "styled-components";
export const SColumn = styled.div`
 .cards__card {
    width: 220px;
    height: 130px;
    background-color: #ffffff;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: stretch;
    padding: 15px 13px 19px;
  }
  .cards__item {
    padding: 5px;
    animation-name: card-animation;
    animation-duration: 500ms;
    animation-timing-function: linear;
  }
  .main__column {
    width: 20%;
    margin: 0 auto;
    display: block;
  }

  .column__title {
    padding: 0 10px;
    margin: 15px 0;
  }
  .column__title p {
    color: #94a6be;
    font-size: 14px;
    font-weight: 600;
    line-height: 1;
    text-transform: uppercase;
  }

  .cards {
    width: 100%;
    display: block;
    position: relative;
  }
  @media screen and (max-width: 1200px) {
    .main__column {
      width: 100%;
      margin: 0 auto;
      display: block;
    }
    .cards {
      width: 100%;
      display: flex;
      overflow-y: auto;
    }
  }
`;
