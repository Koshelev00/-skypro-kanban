import { useNavigate } from "react-router-dom";
import * as S from "./SignIn.styled";
import React, { useState } from "react";

function SignIn({ setIsAuth }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // if (email !== 'correct@email.com' || password !== 'validpassword') {
      //   throw new Error('Введенные данные не распознаны...');
      // }

      setIsAuth(true);
      navigate("/");
    } catch (err) {
      setError(err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <S.Container>
      <S.Card>
        <S.Title>Вход</S.Title>

        <form onSubmit={handleSubmit}>
          <S.Input
            type="email"
            placeholder="Эл. почта"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setError(null);
            }}
            error={error ? "error" : undefined}
            disabled={isSubmitting}
          />

          <S.Input
            type="password"
            placeholder="Пароль"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setError(null);
            }}
            error={error ? "error" : undefined}
            disabled={isSubmitting}
          />

          {error && <S.ErrorMessage>{error}</S.ErrorMessage>}

          <S.Button disabled={isSubmitting || !!error}>
            {isSubmitting ? "Проверка..." : "Войти"}
          </S.Button>
        </form>

        <S.Text>
          Нужно зарегистрироваться?{" "}
          <S.StyledLink href="/signUp">Регистрируйтесь здесь</S.StyledLink>
        </S.Text>
      </S.Card>
    </S.Container>
  );
}

export default SignIn;
