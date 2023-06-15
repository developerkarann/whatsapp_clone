import './App.css';
// Components
import Messanger from './components/Messanger';
import { GoogleOAuthProvider } from '@react-oauth/google';
import AccountProvider from './context/AccountProvider';

function App() {

  const clientId = "972663577374-kg88s5h9ldg8lulbpf00okka2mpuijcm.apps.googleusercontent.com";
  return (
    <>
      <GoogleOAuthProvider clientId={clientId}>
        <AccountProvider>
          <Messanger />
        </AccountProvider>
      </GoogleOAuthProvider>
    </>
  );
}

export default App;
