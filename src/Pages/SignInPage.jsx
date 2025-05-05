import AuthForm from "../components/SignIn/AuthForm";
import { SGlobal } from "../Global.styled";
function SignInPage({ setIsAuth }) {
  return (
    <>
      <SGlobal />
      <AuthForm setIsAuth={setIsAuth}  isSignUp={false}/>
    </>
  );
}

export default SignInPage;
