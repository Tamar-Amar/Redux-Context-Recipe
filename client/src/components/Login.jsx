import { useState } from "react"
import { useNavigate } from "react-router-dom"
import {getAllUser} from "./axios/userAxios"
import { useContext,useEffect } from "react"
import UsersContext from "../userContext";


export const Login =()=>{
    const { loggedInUser, setLoggedInUser } = useContext(UsersContext);

    const [UserDetails, SetUserDetails]=useState([]); 
    
    const setlist=useContext(UsersContext).setUserList
    const [UserList,setUserList]=useState([]);
    
    useEffect(()=>{
        async function load(){
            const res=await getAllUser()
            setlist(res.data)
            setUserList(res.data)
        }load()
    },[])


    let page=useNavigate(); 

        function check()
        {
            let isMng=false;
            let isSign=false;
            if((UserDetails.userName=="תמר"||UserDetails.userName=="מנהל")&&UserDetails.userPassword=='0556738762')
            {
                isMng=true;
                page('/userList')
                setLoggedInUser(UserDetails);
            }
            else{
                for(let i=0; i<UserList.length; i++){
                    if(UserList[i].userName==UserDetails.userName && UserList[i].userPassword==UserDetails.userPassword)
                    {
                        isSign=true;
                        page('/home');
                        setLoggedInUser(UserDetails);
                    }   
                }   
            }

            if(isMng==false && isSign==false)
                page('/register');
        }
        
    return <div className="container mt-3 text-right">
        <input type="text" className="form-control " placeholder="שם משתמש" onChange={(e)=>SetUserDetails ({...UserDetails,userName:e.target.value})}/>
        <br></br>
        <input type="password" className="form-control" placeholder="הכנס סיסמה" onChange={(me)=>SetUserDetails({...UserDetails,userPassword:me.target.value})}/> 
        <br></br>
        <button className="btn btn-light " onClick={()=>check()}>התחבר</button>
    </div>
}