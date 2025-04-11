import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #EAEEF6;
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
  padding: 12px;
  margin-bottom: 8px;
  border: 1px solid ${props => props.error ? '#ef4444' : '#d1d5db'};
  border-radius: 8px;
  font-size: 16px;
  outline: none;
  transition: border-color 0.3s;
  
  &:focus {
    border-color: ${props => props.error ? '#ef4444' : '#3b82f6'};
    box-shadow: ${props => props.error 
      ? '0 0 0 1px #F84D4D' 
      : '0 0 0 1px #565EEF'};
  }
`;

export const Button = styled.button`
  width: 100%;
  background-color: ${props => props.disabled ? '#94A6BE' : '#565EEF'};
  color: white;
  padding: 12px;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  transition: background-color 0.3s;
  margin-top: 8px;
  
  
`;
export const Text = styled.p`
  text-align: center;
  font-size: 14px;
  color: #94A6BE66;
  margin-top: 12px;
`;

export const Link = styled.a`
  color: #94A6BE66;
  text-decoration: underline;
  &:hover {
    text-decoration: underline;
  }
`;
export const ErrorMessage = styled.div`
  color: #F84D4D;
  font-size: 14px;
  margin: 8px 0 16px;
  padding: 8px;
  background-color: #fef2f2;
  border-radius: 4px;
`;