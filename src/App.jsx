import "./App.css";
import AppRoutes from "./AppRoutes";
import { SGlobal } from "./Global.styled";
import AuthProvider from './context/AuthProvider'

function App() {
  return (
    
     <AuthProvider>
      <SGlobal />
      <AppRoutes />
      </AuthProvider>
    
  );
}

export default App;
