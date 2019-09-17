import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';

// import AppNavbar from './components/Layout/AppNavbar';
import AppHome from './components/Pages/AppHome';
import AppRooms from './components/Pages/AppRooms';
import AppSingleRooms from './components/Pages/AppSingleRooms';
import AppError from './components/Pages/AppError';

import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';


const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#00bcd4"
    },
    secondary: {
      main: "#2196f3",
    },
    error: {
      main: "#f44336",
    },
    surface: {
      main: "#FFFFFF"
    },
    onSurface: {
      main: "#333333"
    },
    grey: {
      main: "#E5E5E5"
    }
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Switch>
        <Route exact path="/" component={AppHome}></Route>
        <Route exact path="/rooms" component={AppRooms}></Route>
        <Route exact path="/rooms/:id" component={AppSingleRooms}></Route>
        <Route component={AppError}></Route>
      </Switch>
    </ThemeProvider>
  );
}

export default App;
