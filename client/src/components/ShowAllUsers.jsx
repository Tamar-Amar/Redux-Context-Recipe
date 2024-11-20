import { useContext,useEffect } from "react"
import {getAllUser} from "./axios/userAxios"
import { useState } from "react"
import './ShowAllUsersCSS.css'
import UsersContext from "../userContext";



export const UserList_SAU=()=>{
    const setlist=useContext(UsersContext).setUserList
    const [UserList,setUserList]=useState([]);
    
    useEffect(()=>{
        async function load(){
            const res=await getAllUser()
            setlist(res.data)
            setUserList(res.data)
        }load()
    },[])


    return <div className="container-tamar" id="Table">
        <table className="table-tamar">
            <thead>
                <th className="main-line-in-table">כתובת מייל</th>
                <th className="main-line-in-table">סיסמא</th>
                <th className="main-line-in-table">שם</th>
            </thead>
            <tbody>
                {UserList.map(x=>(
                    <tr>
                        <td className="main-line-in-table">{x.userEmailAdress}</td>                        
                        <td className="main-line-in-table">{x.userPassword}</td>                      
                        <td className="main-line-in-table">{x.userName}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
    }

// export const UserList = () => {
//     const setList=useContext(usesrContext).setListUser
//     useEffect(() => {
//         async function loadListUser() {
//             const response = await getAllUser();
//             setList(response.data);
//         }loadListUser()
//     }, [])

//     const css={color: 'blue'}
//     let list=useContext(usesrContext)
//     return <div>
//         {list.list.map(x=><div><span style={css}>{x.name}</span></div>)}
//     </div>
// }

