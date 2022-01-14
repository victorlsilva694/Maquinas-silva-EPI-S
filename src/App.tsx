import { CategoryContextProvider } from "./Contexts/CategoryContext";
import GlobalStyle from "./GlobalStyle";
import Home from "./Pages/Home";

function App() {
  return (
    <>
      <CategoryContextProvider>
        <GlobalStyle />
        <Home />
      </CategoryContextProvider>
    </>
  );
}

export default App;
