
// import Routers from "./Routers";
import AppRouters from "./AppRouters";
import { AuthProvider } from "./components/AuthContext";

function App() {

  return (
    <AuthProvider>
    
      {/* <Routers /> */}
      <AppRouters />
    </AuthProvider>
  );
}

export default App;
