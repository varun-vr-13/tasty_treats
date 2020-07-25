import React from 'react';

import './App.css';
import {useState,useEffect,useRef} from 'react';
import hello from './main'


import {HashRouter,Route, Switch} from "react-router-dom"
//export const history = createHashHistory();

function App(props) {
  console.log(props);
const[count,setCount] = useState('');
const[counts,setCounts] = useState('');
let interval = useRef();
const loadd = ()=>{
 setCount("asty");
 setCounts("reats");

}

const red = () => {
console.log(interval)
}
useEffect(()=>{
const  interval = setInterval(()=>{
loadd();

},1000);


  red();

return()=>{
  clearInterval(interval.current);
}
},[]);

  return (
<HashRouter>
    <div className="App">
       
    <Switch>
 
 <Route  path="/" exact component={App}></Route>
         <Route path="/main" component={hello}></Route>
      </Switch>
       <img src="./pics/cake.svg" />
        <span ><span className="id1">T<span className='div1'>{count}</span></span><span className="id2">T<span className='div1'>{counts}</span></span></span>
    </div>
    </HashRouter>
  );
}


export default App;
