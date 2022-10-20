import React,{createContext, useState} from 'react';
import './App.css';
import {BrowserRouter as Router ,Routes,Route} from 'react-router-dom'
import PageNotFound from './Pages/PageNotFound';
import Home from './Pages/Home';
import Followers from './Pages/Followers';
import Details from './Pages/Details';
export const GlobalStore=createContext()
function App() {
  const [val,setval]=useState(0)
  const getval=(ele)=>{
    // console.log(ele)
    setval(ele)
  }
  
  return (
    <GlobalStore.Provider value={{getval:getval ,val:val}}>
      
    <Router>
   <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Details' element={<Details/>}/>
      <Route path='/Details/Followers' element={<Followers/>}/>
      <Route path ='/*' element={<PageNotFound/>}/>
   </Routes>
     
    </Router>
    </GlobalStore.Provider>
  );
}

export default App;
