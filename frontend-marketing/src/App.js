import logo from "./logo.svg";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import { Riders } from "./pages/Riders";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { ParallaxProvider } from "react-scroll-parallax";

import { defaultTheme } from "./theme";

function App() {
  const theme = createMuiTheme(defaultTheme);

  return (
    <ThemeProvider theme={theme}>
      <ParallaxProvider>
        <Router>
          <Header />
          <Switch>
            <Route path="/riders" component={Riders} />
          </Switch>
          <Footer />
        </Router>
      </ParallaxProvider>
    </ThemeProvider>
  );
}

export default App;
