import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import GlobalStyle from "./theme/globalStyles";
import { ThemeProvider } from "styled-components";
import theme from "./theme/theme";
import { StylesProvider } from "@material-ui/core/styles";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Offers from "./pages/offers/Offers";
import Navigation from "./shared/navigation/Navigation";
import Footer from "./shared/footer/Footer";

function App() {
  return (
    <StylesProvider injectFirst>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Router>
          <Navigation />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/offers" component={Offers} />
            <Redirect to="/" />
          </Switch>
          <Footer />
        </Router>
      </ThemeProvider>
    </StylesProvider>
  );
}

export default App;
