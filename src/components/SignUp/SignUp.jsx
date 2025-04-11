import * as S from "./SignUp.styled";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      if (name.trim() === "" || !email.includes("@") || password.length < 3) {
        throw new Error("Пожалуйста, заполните все поля корректно");
      }

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
        <S.Title>Регистрация</S.Title>
        <form onSubmit={handleSubmit}>
          <S.Input
            type="text"
            placeholder="Имя"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              setError(null);
            }}
            error={error ? "error" : undefined}
            disabled={isSubmitting}
          />
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

          <S.Button type="submit" disabled={isSubmitting || !!error}>
            {isSubmitting ? "Регистрация..." : "Зарегистрироваться"}
          </S.Button>
        </form>

        <S.Text>
          Уже есть аккаунт? <S.Link href="/signIn">Войдите здесь</S.Link>
        </S.Text>
      </S.Card>
    </S.Container>
  );
}

export default SignUp;
