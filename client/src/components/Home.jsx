import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAllRecipe } from "./axios/recipeAxios";
import { FillDataRecipe } from "../REDUX/action";
import './HomeCSS.css';

export const Home = () => {

  const [arr, setArr] = useState([])
  let d=useDispatch()
  const navigate= useNavigate()

  useEffect(() => {
    async function loadData() {

      if(arr.length==0){
        let response = await getAllRecipe()
        setArr(response.data)
        
        d(FillDataRecipe(response.data))
      }
    } loadData()
  },[])

  return (
    <div className="flex-container-tamar">
      {arr.map(x=><div className="one-recipe-in-container-tamar">
        <div className="recipe-details">
        <h4 className="recipe-name">{x.nameRecipe}</h4>
          <img src={`http://localhost:7777/pic/${x.picture}`} alt={x.nameRecipe} />
          <button className="button-tamar" onClick={() => navigate(`../recipeDetails/${x._id}`)}>
            למתכון המלא
          </button>
        </div>
      </div>)}
    </div>
  );
};