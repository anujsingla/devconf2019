import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import UserQuery from './userQuery';
import UseEffectHookForWeather from './useEffectHookForWeather';
import UseEffectHookTopNews from './useEffectHookTopNews';
// import TopNewsWithCustomHook from './TopNewsWithCustomHook';
// import CustomHookForWeather from './CustomHookForWeather';

function App() {
  return (
    <div className="container">
      <header className="">
        <h1 className="m-b-50">React Hook Examples</h1>
        <UserQuery />
        <hr />
        <UseEffectHookForWeather />
        <hr />
        <UseEffectHookTopNews />
        {/* <TopNewsWithCustomHook />
        <CustomHookForWeather /> */}
        {/* <UserQueryWithClassComponent /> */}
      </header>
    </div>
  );
}

export default App;
