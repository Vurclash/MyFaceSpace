import React from 'react';
import Home from './components/Home';
import ProtectedRoute from './components/ProtectedRoute';
import NoMatch from './components/NoMatch';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Register from './components/Register';
import FetchUser from './components/FetchUser';
import MyFacepages from './components/MyFacepages';
import { Switch, Route, } from 'react-router-dom';
import { Container, } from 'semantic-ui-react';

const App = () => (
  <>
    <Navbar />
    <FetchUser>
      <Container>
        <Switch>
          <ProtectedRoute exact path='/' component={Home} />
          <ProtectedRoute exact path='/my-facepages' component={MyFacepages} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/register' component={Register} />
          <Route component={NoMatch} />
        </Switch>
      </Container>
    </FetchUser>
  </>
);

export default App;
