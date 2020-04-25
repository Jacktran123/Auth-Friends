import React, {createContext} from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import LoginForm from './components/LoginForm';
import FriendList from './components/FriendList';
import ProtectiveRoute from './components/ProtectiveRoute';

export const ContextObject= createContext();

function App() {
  return (
    <ContextObject.Provider value={null}>
         <Switch>
          <Route  exact path='/' render={(prop)=><LoginForm {...prop} />} />
          <ProtectiveRoute path='/friendList' component={FriendList} />
          <Redirect to='/' />
           </Switch>

    </ContextObject.Provider>
    
     
  );
}

export default App;