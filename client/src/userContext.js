//  import React from "react";

// // //יצירת אובייקט למאגר
//  const UsersContext=React.createContext({})

// // //יצירת המאגר
//  export const UserProvider= UsersContext.Provider

// export default UsersContext


 import React from 'react';

 import { createContext, useState } from "react";

 const UsersContext = createContext({});

 export const UserProvider = ({children}) => {
   const [loggedInUser, setLoggedInUser] = useState({});
   const [userList, setUserList] = useState([]);

   const contextValue = {
     loggedInUser,
     setLoggedInUser,
     userList,
     setUserList,
   };

   return (
     <UsersContext.Provider value={contextValue}>
       {children}
     </UsersContext.Provider>
   );
 };

export default UsersContext;





