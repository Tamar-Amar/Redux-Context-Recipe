
import { useContext } from "react"
import UsersContext from "../userContext"
import { useNavigate } from "react-router-dom"
import { addUser_A } from "./axios/userAxios"


export const Register = () => {

    const page=useNavigate()
    const add = useContext(UsersContext).onAdd

    const saveuser = async () => {
        if(document.getElementById("userPassword").value!=document.getElementById("userPassword2").value){
            alert("הסיסמאות אינן תואמות, נסה שוב")
        }
        else  if(document.getElementById("userPassword").value==""||document.getElementById("userPassword2").value==""||document.getElementById("userName").value==""||document.getElementById("userEmailAdress").value==""){
            alert("יש למלא את כל השדות")
        }
        else{
            const obj={ userName:document.getElementById('userName').value,  userPassword:document.getElementById('userPassword').value,  userEmailAddress:document.getElementById('userEmailAddress').value}
            addUser_A(obj)
            alert("נרשמת בהצלחה!")
            page('/home')
        }
    }
  
    //החזרת טופס הרשמה\הוספת משתמש
    return <div className="ConnectingForm">
  
        <input type="text" className="form-control" id="userName" placeholder="הכנס שם"/><br/>
        <input type="text" className="form-control" id="userEmailAddress" placeholder="הכנס כתובת מייל"/><br/>
        <input type="password" className="form-control" id="userPassword" placeholder="הכנס סיסמא חדשה"/><br/>
        <input type="password" className="form-control" id="userPassword2" placeholder="הכנס שוב סיסמא לאימות"/><br/>
        <button type="button" className="btn btn-light"  onClick={(e) => {
        add({ userName:document.getElementById('userName').value,userPassword:document.getElementById('userPassword').value,userEmailAddress:document.getElementById('userEmailAddress').value},e)
        saveuser()}}>אישור והרשמה</button>
    </div>
  }

















// import { useContext } from "react"
// import { useNavigate } from "react-router-dom"
// import { addUser_A } from "./axios/userAxios"
// import UsersContext from "../userContext";


// export const Register = () => {
//     const { loggedInUser, setLoggedInUser } = useContext(UsersContext);

//     //הגדרת משתנה המאפשר מעבר בין דפים
//     const page=useNavigate()
  
//     const saveuser = async () => {
//         if(document.getElementById("userPassword").value!=document.getElementById("userPassword2").value){
//             alert("הסיסמאות אינן תואמות, נסה שוב")
//         }
//         else{
//             const obj={ userName:document.getElementById('userName').value,  userPassword:document.getElementById('userPassword').value,  userEmailAddress:document.getElementById('userEmailAddress').value}
//             addUser_A(obj)
//             setLoggedInUser(obj);
//             alert("נרשמת בהצלחה!")
//             page('/home')
//         }
//     }
    
  
//     //הגדרת משתנה המכיל את פונקציית הוספת משתמש לרשימת המשתמשים
//     const  addUser = UsersContext.addUser
  
//     //החזרת טופס הרשמה\הוספת משתמש
//     return <div className="ConnectingForm">
  
//         <input type="text" className="form-control" id="userName" placeholder="הכנס שם"/><br/>
//         <input type="text" className="form-control" id="userEmailAddress" placeholder="הכנס כתובת מייל"/><br/>
//         <input type="password" className="form-control" id="userPassword" placeholder="הכנס סיסמא חדשה"/><br/>
//         <input type="password" className="form-control" id="userPassword2" placeholder="הכנס שוב לאימות"/><br/>
  
//         <button type="button" className="btn btn-light"  onClick={(e) => {
//         addUser({ userName:document.getElementById('userName').value,  userPassword:document.getElementById('userPassword').value,  Address:document.getElementById('userEmailAddress').value}, )
//         saveuser()}}>אישור והרשמה</button>
  
  
//     </div>
//   }










/*
export const Register =()=>{
    let myNaviagte=useNavigate()
    const addU=useContext(usersContext).onadd
    
    function addUserCheck(e)
    {
        if(document.getElementById("newUserPassword1").value==document.getElementById("newUserPassword2").value){
            alert(" נרשמת בהצלחה ")
            addU({name:document.getElementById("newUserName").value,password:document.getElementById("newUserPassword1").value},e)
            myNaviagte('/showAllUsers')
        }
        else{
            alert("הסיסמאות אינן תואמות, נסה שוב")
        }
    }
    
    return <div className="container mt-3">
        
        <input type="text" className="form-control" id="newUserName" placeholder="הכנס שם"/><br/>
        <input type="password" className="form-control" id="newUserPassword1" placeholder="הכנס סיסמא חדשה"/><br/>
        <input type="password" className="form-control" id="newUserPassword2" placeholder="הכנס שוב לאימות"/><br/>
        <input type="text" className="form-control" id="newUserName" placeholder="הכנס שם"/><br/>
        <br></br>
        <button className="btn btn-light " onClick={(e)=>addUserCheck(e)}>אישור והרשמה</button>
        
    </div>
}*/