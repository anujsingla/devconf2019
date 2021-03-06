import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import UserQuery from './userQuery';
import UseEffectHookForWeather from './useEffectHookForWeather';
import UseEffectHookTopNews from './useEffectHookTopNews';
// import { AppComment } from './reaction/AppComment';
// import { AppCommentWithUseContext } from './Comment/AppCommentWithUseContext';
import { AppCommentWithLocalState } from './Comment/AppCommentWithLocalState';
// import { UseEffectHook } from './UseEffectHook';
// import { UseCallback } from './UseCallback';
// import UserQueryWithCustomHook from './UserQueryWithCustomHook';
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
        <hr />
        {/* <AppComment /> */}
        {/* <AppCommentWithUseContext /> */}
        <AppCommentWithLocalState />
        {/* <hr/>
        <UseEffectHook /> */}
        {/* <hr/>
        <UseCallback /> */}
        {/* <hr/> */}
        {/* <UserQueryWithCustomHook /> */}
      </header>
    </div>
  );
}

export default App;
