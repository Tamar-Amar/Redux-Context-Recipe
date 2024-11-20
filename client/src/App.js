import './App.css';
import { MyRouting } from './components/Myrouting';
import { BrowserRouter } from 'react-router-dom';
import { Menu } from './components/Menu';
import { UserProvider } from './userContext';
import { useState } from 'react';
import { Provider } from 'react-redux';
import store_Store from './REDUX/store';
import React, { useEffect } from 'react';




function App() {

  const [userList,setUserList]=useState([]);

  const addUser=(user)=>{
    setUserList(j=>j.concat(user))
  }

  const transfer={
    userList: userList,
    onAdd:addUser,
    setList:(myList)=>{setUserList(myList)}
  }


return (
  //סיפוק מחסן הנתונים
  <Provider store={store_Store}>
    <UserProvider value={transfer}>
      <div className="App text-md-right bg-dark text-light p-4">
        <BrowserRouter>
        <Menu></Menu> 
        <MyRouting></MyRouting>
        </BrowserRouter> 
      </div>
    </UserProvider>
  </Provider>
  );
}

export default App;
