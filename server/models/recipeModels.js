import myMongoose from "mongoose";
let recipeSchema= myMongoose.Schema({
    nameRecipe : String,
    owner: String,
    preparationTime:String,
    difficultLevel: String,
    category: String,
    codeRcp: String,
    picture: String,
    ingredients: [],
    description:String,
})

//let myRecipe = myMongoose.model('recipe',recipeSchema)
let myRecipe = myMongoose.model("myNameChoose",recipeSchema,"recipe")
//יצוא המתכון
export default myRecipe