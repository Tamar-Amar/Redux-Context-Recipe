import axios from "axios";

//הגדרת ניתוב כללי לפעולות על מתכון
const url='http://localhost:7777/user/'

//פונקציה שניגשת לשרת לשליפת כל המשתמשים
export const getAllUser=()=>{
    return axios.get(`${url}getAllUser`)  
}

//פונקציה להחזרת משתמש על פי שם
export const getUserByName=(name)=>{
    const user_n= axios.get(`${url}getUserByName/${name}`)
    return user_n
}

//פונקציה להחזרת משתמש על פי שם וסיסמא
export const getUserByNameAndPassword=(name,password)=>{
    const user_n_P= axios.get(`${url}getUserByNameAndPassword/${name}/${password}`)
    return user_n_P
}



//פונקציה להוספת משתמש
export const addUser_A = (newUser) => {
    return axios.post(`${url}/addUser`, newUser)
}