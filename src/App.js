import './App.css';
import Header from "./components/header/Header";
import {Route} from "react-router-dom";
import {Admin,  User} from "./page";
import {useDispatch} from "react-redux";
import {useEffect, useState} from "react";
import {FetchUsers} from "./storre/asyncAction/users";




function App() {
    const dispatch = useDispatch();
    useEffect(()=>{
        fetchUser()
    },[])


    const fetchUser = () =>{
        dispatch(FetchUsers());
    }


  return (
    <div className="App">
      <Header />

      <div className="content">
          <Route exact path='/' render={()=><User/>} />
          <Route  path='/list' component={Admin} />
      </div>

    </div>
  );
}

export default App;
