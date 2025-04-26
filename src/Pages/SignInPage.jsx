import SignIn from "../components/SignIn/SignIn";
import { SGlobal } from "../Global.styled";
function SignInPage({ setIsAuth }) {
  return (
    <>
      <SGlobal />
      <SignIn setIsAuth={setIsAuth} />
    </>
  );
}

export default SignInPage;
