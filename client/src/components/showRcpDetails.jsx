import { useEffect } from "react"
import { useState } from "react"
import { useParams } from "react-router-dom"
import { getRecipeByID } from './axios/recipeAxios'
import './showRcpDetails.css'

export const RecipeDetails=()=>{

    const [Recipe, setRecipe]=useState({ingredients:[]})

    const params=useParams()

    useEffect(()=>{
        async function load(){
            const recipe=await getRecipeByID(params.id) 
            setRecipe(recipe.data)
        }
        load()
    }, [])

    
    return <div>  
          {/* הצגת פרטי המתכון */}
        <div className="recipe-details-show">
          <h3>{Recipe.nameRecipe}</h3>
          <br/>
          <img src={`http://localhost:7777/pic/${Recipe.picture}`} alt="עובד" className="img-rec"></img>
            <br/>
          <p>| {Recipe.category} | {Recipe.difficultLevel} | {Recipe.preparationTime} |</p>
          <p>מאת: {Recipe.owner}</p> 
          <br></br> 
          <div className="ingre-div-t">
            <p className="ingre">:רכיבים</p>        
            <p className="right-more">{Recipe.ingredients.map(x=><p>{x.name +' | '+ x.amount}</p>)}</p>
          </div>
          <p className="ingre">:הוראות הכנה</p>  
          <p>{Recipe.description}</p>
          </div>
    </div>
}