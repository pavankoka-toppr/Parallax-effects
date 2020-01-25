import React from 'react';
import Toggle from './Toggle';
import { useSpring, animated } from 'react-spring';
import Parallax from './parallax/index';
import './App.scss';

const App = () => {
  const fade = useSpring({ from: { opacity: 0 }, opacity: 1 });

  // return (
  //   <div
  //     className="App"
  //   >
  //     <animated.div className="text" style={fade} > Pavan Koka</animated.div>
  //     <main>
  //       <Toggle />
  //     </main>
  //   </div> 
  // )
  return <Parallax />
}

export default App;
