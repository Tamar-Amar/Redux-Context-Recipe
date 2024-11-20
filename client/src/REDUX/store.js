import { legacy_createStore } from 'redux';
import produce from 'immer';

//סטייט גלובלי שיהיה מוכר בכל הפרויקט - מלאי מידע על מתכונים
const initialState = 
{ 
    //רשימת המתכונים הגלובלית 
    listRecipe_Store:[]
} 

//פונקציה שמזומנת לשינוי בזמן אמת
//פועלת בהתאם ל'אקשן' שאליו זומנה, על פי בדיקה מיהו
const reducer = produce((state, action) => { 
     switch (action.type)
         {
            //במקרה שהופעלת דרך פעולת הוספת מתכון
            case 'ADD-RECIPE-TO-REDUX': 
                {
                    state.listRecipe_Store.push(action.payload); 
                    break;
                }
            case 'FILL-DATA-RECIPE':
                {
                    state.listRecipe_Store=action.payload
                    break;
                }
            case 'FILL-DATA-USER':
                {
                    state.recipeList_Store=action.payload
                    break;
                } 
            // default:
            //     return state;
         }
        },initialState );

const store_Store= legacy_createStore(reducer)

 //יצירת מחסן הנתונים
window.store= store_Store;
export default store_Store;
 
