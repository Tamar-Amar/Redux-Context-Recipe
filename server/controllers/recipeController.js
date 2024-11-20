import express from 'express'
import recipeModel from '../models/recipeModels.js'

let myRout= express.Router()

// הצגת כל המתכונים
//axiosהשתמשתי ב
myRout.get('/getAllRecipe',async(req,res)=>{
    let data= await recipeModel.find({})
    res.json(data)
})

import bodyParser from 'body-parser'
myRout.use(bodyParser())
//הוספת מתכון
//axiosהשתמשתי ב
myRout.post('/addRecipe',async(req, res)=>{
    //שליפת הנתונים המגיעים בצורה מאובטחת
    let newRecipe=req.body
    //הוספה
    let y=await recipeModel.create(newRecipe)
    // //נשלוף עוד פעם את הנתונים ונראה שהם נוספו
     //let data=await recipeModel.find({})
    // //שליחת הנתונים אחרי ההוספה
     //res.json(data)
})

//מציאת מתכון לפי קוד מזהה
//axiosהשתמשתי ב
myRout.get('/getRecipeByID/:id',async(req,res)=>{
    let idR=req.params.id
    let recipe= await recipeModel.findOne({'_id':idR})
    res.json(recipe)
})

//יצוא הקונטרולר
export default myRout

