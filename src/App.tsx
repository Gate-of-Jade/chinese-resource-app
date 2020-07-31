import React,  { useState, useEffect } from 'react';
// import logo from './logo.svg';
import './App.css';
import { Router, Switch, Redirect, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

import AppScreen from './screens/AppScreen/AppScreen';

import store from "./utils/managers/ReduxStoreManager";
import history from "./utils/history";

// css libraries go here 
import 'bootstrap/dist/css/bootstrap.min.css';

import "@fortawesome/fontawesome-free/css/all.min.css";

const theme = createMuiTheme({
  typography: {
    fontSize: 12.5,
    fontFamily: [
      "Open Sans",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
});


function App() {
  const [result, setResult] = useState(0);
  useEffect(() => {
    fetch("/test").then(res => res.json()).then(data => {
      setResult(data.response)
    })
  }, []);

  return (
    <div className="App">
      <Provider store={store}>
        <Router history={history}>
          <ThemeProvider theme={theme}>
            <Route path="/" component={AppScreen} />
          </ThemeProvider>
        </Router>
      </Provider>
    </div>
  );
}

export default App;