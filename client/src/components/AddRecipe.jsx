import { useState } from "react";
import { useDispatch } from "react-redux";
import { AddRecipeToRedux , FillDataRecipe} from "../REDUX/action";
import { useNavigate } from "react-router-dom";
import { addRecipe } from "./axios/recipeAxios";
import './AddRecipeCSS.css'
import { useContext } from "react";
import UsersContext from "../userContext";


export const AddRecipe_AR = () => {
    const { loggedInUser, userList } = useContext(UsersContext);

    const [newRecipy, setNewRecipy]=useState({})

    const [IngredientsArr, setIngredientsArr]=useState([{name:"", amount:""}])

    let myD=useDispatch()

    let page=useNavigate(); 


   const editName=(value, index)=>{

      const arr=[...IngredientsArr]
      arr[index].name=value
      setIngredientsArr(arr)
   }


   const editAmount=(value, index)=>{

       const arr=[...IngredientsArr]
       arr[index].amount=value
       setIngredientsArr(arr)
    }


    const add=async()=>{
        const allNewRecipy={...newRecipy}
        allNewRecipy.ingredients=IngredientsArr
        page('/home');
        let res=await addRecipe(allNewRecipy)
        myD(FillDataRecipe(res.data))

        alert("המתכון נוסף בהצלחה")
    }



   return <div>

       <div className='register-Details'>

        <br/>
         <label className='BoldLabel'>שם עורך</label>
           <input type="text" placeholder={loggedInUser.userName} className="form-control" id='TextInput' onChange={(e)=>setNewRecipy({...newRecipy, owner:e.target.value})}></input>
           <br></br>

           <label className='BoldLabel'>שם מתכון</label>
           <input type="text" className="form-control" id='TextInput' onChange={(e)=>setNewRecipy({...newRecipy, nameRecipe:e.target.value})}></input>
           <br></br>

           <label className='BoldLabel'>סיסמת מתכון</label>
           <input type="text" className="form-control" id='TextInput' onChange={(e)=>setNewRecipy({...newRecipy, codeRcp:e.target.value})}></input>
           <br></br>


           <label className='BoldLabel'>:קטגוריה</label>
            <div className="form-check" id="RadioButton">
                <input type="radio" id="Easy" name="Level" value="עוגות" className="form-check-input" onChange={(e)=>setNewRecipy({...newRecipy, category:e.target.value})}></input>
                <label for="Easy" className="form-check-label" id='RadioLable'>עוגות</label>
            </div>

            <div className="form-check" id="RadioButton">
                <input type="radio" id="Middle" name="Level" value="עוגיות" className="form-check-input" onChange={(e)=>setNewRecipy({...newRecipy, category:e.target.value})}></input>
                <label for="Middle" className="form-check-label" id='RadioLable'>עוגיות</label>
            </div>

            <div className="form-check" id="RadioButton">
                <input type="radio" id="Hard" name="Level" value="קינוחים" className="form-check-input" onChange={(e)=>setNewRecipy({...newRecipy, category:e.target.value})}></input>
                <label for="Hard" className="form-check-label" id='RadioLable'>קינוחים</label>
            </div>

            <div className="form-check" id="RadioButton">
                <input type="radio" id="Hard" name="Level" value="אחר" className="form-check-input" onChange={(e)=>setNewRecipy({...newRecipy, category:e.target.value})}></input>
                <label for="Hard" className="form-check-label" id='RadioLable'>אחר</label>
            </div>
           <br></br>


           <label className='BoldLabel'>זמן הכנה</label>
           <input type="text" className="form-control" id='TextInput' onChange={(e)=>setNewRecipy({...newRecipy, preparationTime:e.target.value})}></input>
           <br></br>


           <label className='BoldLabel'>:דרגת קושי</label>
           <div className="form-check" id="RadioButton">
               <input type="radio" id="Easy" name="Type" value="מתחילים" className="form-check-input" onChange={(e)=>setNewRecipy({...newRecipy, difficultLevel:e.target.value})}></input>
               <label for="Easy" className="form-check-label" id='RadioLable'>מתחילים</label>
           </div>

           <div className="form-check" id="RadioButton">
               <input type="radio" id="Middle" name="Type" value="מתקדמים" className="form-check-input" onChange={(e)=>setNewRecipy({...newRecipy, difficultLevel:e.target.value})}></input>
               <label for="Middle" className="form-check-label" id='RadioLable'>מתקדמים</label>
           </div>

           <div className="form-check" id="RadioButton">
               <input type="radio" id="Hard" name="Type" value="מתמחים" className="form-check-input" onChange={(e)=>setNewRecipy({...newRecipy, difficultLevel:e.target.value})}></input>
               <label for="Hard" className="form-check-label" id='RadioLable'>מתמחים</label>
           </div>
       </div>

    <div className="register-Details">
       <div className='IngredientsDiv'><br></br>
           <label className='BoldLabel'>:רכיבים</label>

           {IngredientsArr.map((x, index)=><div className="row">
           <br></br>
                <br/>
                <div className="col">
                   <input type="text" className="form-control" placeholder="שם" name="pswd" id='IngredientsTextInput' value={x.name} onChange={(e)=>editName(e.target.value, index)}></input>
               </div>

               <div className="col">
                   <input type="text" className="form-control" placeholder="כמות" name="pswd" id='IngredientsTextInput' value={x.amount} onChange={(e)=>editAmount(e.target.value, index)}></input>
               </div>

           </div>)}

           <button type="button" className="btn btn-light" id='AddIngredient' onClick={()=>setIngredientsArr(IngredientsArr.concat({name:"", amount:""}))}>הוספת רכיב</button>
           <br></br>
           <br></br>
           
           <label className='BoldLabel'>הוראות הכנה</label>
           <input type="text" className="form-control" id='TextInput' onChange={(e)=>setNewRecipy({...newRecipy, description:e.target.value})}></input>
           <br></br>
           <button type="button" className="btn btn-light" id='AddRecipy' onClick={()=>add()}>הוספת מתכון</button>
               
       </div>
       </div>

   </div>
}