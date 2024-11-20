import express from "express"
//מופע של אקפרס
let app=express()

import dotenv from 'dotenv';
dotenv.config()

import myMongoose from "mongoose";
//חיבור למונגו
myMongoose.connect("mongodb://0.0.0.0:27017/recipeWebsite",{ useNewUrlParser: true, useUnifiedTopology: true })
// databaseהגדרת משתנה שיכיל את ה
let db=myMongoose.connection
// פתיחה של מסד הנתונים
db.on('open',()=>{console.log("db is open");})

import cors from 'cors'
app.use(cors())

//הגדרת תיקיית התמונות כציבורית
app.use(express.static('public'))


import recipeController from './controllers/recipeController.js'
// שיוך קונטרולר מתכונים
app.use('/recipe',recipeController)

import userController from './controllers/userController.js'
// שיוך קונטרולר משתמשים
app.use('/user',userController)
    
    
//הרצה
app.listen(process.env.PORT,()=>{
    console.log("i'm running");
})
