import React, {createContext} from 'react';
import {Route} from 'react-router-dom';
import LoginForm from './components/LoginForm';

export const ContextObject= createContext();

function App() {
  return (
    <ContextObject.Provider value={null}>
      <Route path='/' render={()=><LoginForm />}   />
    </ContextObject.Provider>
    
     
  );
}

export default App;