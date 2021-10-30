import './App.css';
import React from 'react';
import HookTimer from './components/HookTimer';
// import FocusInput from './components/FocusInput';
// import CounterTwo from './components/CounterTwo';
// import ComponentC from './components/ComponentC';
// import CounterOne from './components/CounterOne';
// import DataFetching from './components/DataFetching';
// import IntervallHookCounter from './components/IntervalHookCounter';
// import MouseContainer from './components/MouseContainer';
// import HookMouse from './components/HookMouse';
// import HookCounterFour from './components/HookCounterFour';
// import HookCounterThree from './components/HookCounterThree';
// import HookCounter from './components/HookCounter';
// import HookCounterTwo from './components/HookCounterTwo';
// import HookEffectOne from './components/HookEffectOne';

export const UserContext = React.createContext()

function App() {
  return (
    <div className="App">
      {/* <HookCounter /> */}
      {/* <HookCounterTwo /> */}
      {/* <HookCounterThree /> */}
      {/* <HookCounterFour /> */}
      {/* <HookEffectOne /> */}
      {/* <HookMouse /> */}
      {/* <MouseContainer /> */}
      {/* <IntervallHookCounter /> */}
      {/* <DataFetching /> */}
      {/* <UserContext.Provider value={'moaz'}>
        <ComponentC />
      </UserContext.Provider> */}
      {/* <CounterOne /> */}
      {/* <CounterTwo /> */}
      {/* <FocusInput /> */}
      <HookTimer />
    </div>
  );
}

export default App;
