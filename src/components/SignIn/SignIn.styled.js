import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;

background: rgb(229, 229, 229);
`;

export const Card = styled.div`
 width: 368px;
height: 329px;
// display: flex;
flex-direction: row;
justify-content: flex-start;
align-items: flex-start;
gap: 10;
padding: 50px 60px 50px 60px;
box-sizing: border-box;
border: 0.7px solid rgb(212, 219, 229);
border-radius: 10px;
box-shadow: 0px 4px 67px -12px rgba(0, 0, 0, 0.13);
background: rgb(255, 255, 255);
`;

export const Title = styled.h2`
  text-align: center;
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 16px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 12px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 16px;
  outline: none;
  
  &:focus {
    border-color: #565eef;
    box-shadow: 0 0 4px #3b82f6;
  }
&::placeholder {
 color: rgb(148, 166, 190);
font-family: Roboto;
font-size: 14px;
font-weight: 400;
line-height: 150%;
letter-spacing: -2%;
text-align: left;
  }
`;

export const Button = styled.button`
  width: 100%;
  background-color: #565EEF;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;
  height: 30px;
 
`;

export const Text = styled.p`
 color: rgba(148, 166, 190, 0.4);
font-family: Roboto;
font-size: 14px;
font-weight: 400;
line-height: 150%;
letter-spacing: -1%;
text-align: center;
  margin-top: 20px;
`;

export const Link = styled.a`
  color: #565EEF;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;
export const ErrorText = styled.p`
    font-family: 'Roboto';
    line-height: 150%;
    text-align: center;
    font-size: 12px;
    color: #6b7280;
    margin-top: 14px;
`

export const LinkText = styled.span`
  color: rgba(148, 166, 190, 0.4);
  font-family: Roboto;
  font-size: 14px;
  font-weight: 400;
  line-height: 150%;
  etter-spacing: -1%;
  text-align: center;
  text-decoration: underline;
`
export const Form = styled.form`
  width: 100%;
`
export const InputForm = styled.div`
  display: flex;
  flex-direction:column;
  gap: 7px;
`