import express from 'express'
let myRoutUser= express.Router()
import userModel from '../models/userModels.js'
import bodyParser from "body-parser";
// שיוך בודי-פרסר
myRoutUser.use(bodyParser())

//הצגת רשימת משתמשים
//axiosהשתמשתי ב
myRoutUser.get('/getAllUser',async(req,res)=>{
    let data= await userModel.find({})
    res.json(data)
})

//מציאת משתמש ספציפי לפי שם וסיסמא
myRoutUser.get('/getUserByNameAndPassword/:name/ :password',async(req,res)=>{
    let name=req.params.name
    let password=req.params.password
    let user= await userModel.findOne({'userName':name,'userPassword':password})
    //החזרת המשתמש שנמצא
    res.json(user)
})

//מציאת משתמש לפי שם
//axiosהשתמשתי ב
myRoutUser.get('/getUserByName/:name',async(req,res)=>{
    let name=req.params.name
    let user= await userModel.findOne({'userName':name})
    res.json(user)
})


//הוספת משתמש
//axiosהשתמשתי ב
myRoutUser.post('/addUser',async(req, res)=>{
    //שליפת הנתונים המגיעים בצורה מאובטחת
    let newUser=req.body
    //הוספה
    let y=await userModel.create(newUser)
    // //נשלוף עוד פעם את הנתונים ונראה שהם נוספו
    // let data=await userModel.find({})
    // //שליחת הנתונים אחרי ההוספה
    // res.json(data)
    })



//ייצוא הקונטרולר
export default myRoutUser

