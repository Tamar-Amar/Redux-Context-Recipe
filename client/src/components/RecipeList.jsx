import { useDispatch, useSelector } from "react-redux";
import axios from 'axios';
import { useEffect,useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { FillDataRecipe } from '../REDUX/action';
import { getAllRecipe } from './axios/recipeAxios';

export const ListRecipe_LR = () => {
  const [rList, setRList] = useState({ingredients: []});
  const params= useParams()

  useEffect(() => {
      async function loadDataRecipe() {
      const rList= await getAllRecipe(params.id)
      setRList(rList.data[0])
    }
    loadDataRecipe()
  },[])

  return <>
      <h1>{rList.name}</h1>
      <img src={`http://localhost:7777/pic/${rList.picture}`} height={350} width={350}></img>
    </>
}
