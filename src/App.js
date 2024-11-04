import { ThemeProvider } from "styled-components";
import { lightTheme } from "./styles/theme";
import { GlobalStyle } from "./GlobalStyle";
import {BrowserRouter as Router} from "react-router-dom";
import { NavbarContainer } from "./Navbar/NavBarStyle";


function App() {
  return (
    <Router>
    <ThemeProvider theme={lightTheme}>
      <GlobalStyle />
      <NavbarContainerr />
    </ThemeProvider>
    </Router>
  );
}

export default App;
