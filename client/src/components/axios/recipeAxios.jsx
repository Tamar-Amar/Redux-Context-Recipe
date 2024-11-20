import axios from "axios"
//הגדרת ניתוב כללי לפעולות על מתכון
const url='http://localhost:7777/recipe/'

//פונקציה שניגשת לשרת לשליפת כל המתכונים
export const getAllRecipe=()=>{
    return axios.get(`${url}getAllRecipe`)
}

//פונקציה להחזרת מתכון על פי שם
export const getRecipeByID=(id)=>{
    return axios.get(`${url}getRecipeByID/${id}`)
}

//פונקציה להוספת מתכון למסד נתונים
export const addRecipe = (newRecipe) => {
    return axios.post(`${url}addRecipe`,newRecipe)
}