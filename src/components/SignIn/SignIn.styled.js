import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #f3f4f6;
`;

export const Card = styled.div`
  background: white;
  padding: 32px;
  border-radius: 16px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  width: 350px;
`;

export const Title = styled.h2`
  text-align: center;
  font-size: 24px;
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
 
`;

export const Text = styled.p`
  text-align: center;
  font-size: 14px;
  color: #6b7280;
  margin-top: 12px;
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
    margin-top: 7px;
`

export const LinkText = styled.span`
    color: #6b7280;
    text-decoration: underline;
    &:hover {
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