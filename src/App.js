import { useState, useEffect } from 'react';
import styles from './app.module.css';
import { Switch, Route } from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';

import * as actionTypes from './store/actions';

import { Header } from './fragments/header';
import { Footer } from './fragments/footer';

import { Home } from './pages/home'; 
import { Prices } from './pages/prices';
import { Portfolio } from './pages/portfolio';
import { AddAdmin } from './pages/add-admin';
import { AdminPanel } from './pages/admin-panel';
import { ChangePassword } from './pages/change-password';

const App = ({ user, login, logout }) => {
  
  const fetchUser = async () => {
    try {
      if (user) return;

      const response = await axios.get('/api/admins', { withCredentials: true });
      login(response.data);
    } catch (error) {
      logout();
    }
  };

  useEffect(fetchUser, []);

  return (
    <div className={ styles.App }>
      <Header user={ user } login={ login } logout={ logout } />
      <Switch>
        <Route exact path='/' component={ Home } />
        <Route exact path='/priser' component={ Prices } />
        <Route exact path='/portfolio' component={ Portfolio } />
        <Route exact path='/add-admin'>
          <AddAdmin user={ user } />
        </Route>
        <Route exact path='/admin-panel'>
          <AdminPanel user={ user } />
        </Route>
        <Route exact path='/change-password'>
          <ChangePassword user={ user } />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    user: state.user
  };
}

const mapDispatchToProps = dispatch => {
  return {
    login: (user) => dispatch({ type: actionTypes.LOG_IN, user }),
    logout: () => dispatch({ type: actionTypes.LOG_OUT }),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);