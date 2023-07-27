import React from 'react';
import './App.css';
import Navbar from './components/Navbar'; 
import Footers from './components/Footers'; 
import Headers from './components/Headers';
import Hooks_basic from './components/Hooks_basic';
function App () {
  return (
    // We can return only one but if we want to return more than one then we use JSX fragement( <>   </> )
   <>
{/* <Navbar/> */}
<Navbar title="Home" about="About_Us"/>
<Footers/>
<Headers/>
<Hooks_basic/>
</>
 )}

export default App;
