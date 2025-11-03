
// import Routers from "./Routers";
import AppRouters from "./AppRouters";
import { AuthProvider } from "./components/AuthContext";
import { ThemeProviderContext } from "./components/context/ThemeContext";

function App() {

  return (
    <>
      <AuthProvider>
      {/* <Routers /> */}
        <ThemeProviderContext>
          <AppRouters />
        </ThemeProviderContext>
      </AuthProvider>
    </>
  );
}

export default App;
