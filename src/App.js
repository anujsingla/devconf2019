import React from 'react';
// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import UserQuery from './userQuery';
import UseEffectHook from './useEffectHook';
// import UserQueryWithClassComponent from './userQueryWithClass';

function App() {
  return (
    <div className="container">
      <header className="">
        <h1 className="m-b-50">React Hook Examples</h1>
        <UserQuery />
        <UseEffectHook />
        {/* <UserQueryWithClassComponent /> */}
      </header>
    </div>
  );
}

export default App;
