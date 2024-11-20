import {Route, Routes} from "react-router-dom"
import { Register } from "./Register"
import { Login } from "./Login"
import { Home } from "./Home"
import { About } from "./About"
import { Menu } from "./Menu"
import { AddRecipe_AR} from "./AddRecipe"
import { UserList_SAU } from "./ShowAllUsers"
import { ListRecipe_LR } from "./RecipeList"
import {RecipeData} from "./showRcpDetails"
import { RecipeDetails } from "./showRcpDetails"

export const MyRouting=()=>
{
    return<Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="home" element={<Home></Home>}></Route>
            <Route path="about" element={<About></About>}></Route>
            <Route path="login" element={<Login></Login>}></Route>
            <Route path="addRecipe" element={<AddRecipe_AR></AddRecipe_AR>}></Route>
            <Route path="register" element ={<Register></Register>}></Route>
            <Route path="userList" element={<UserList_SAU></UserList_SAU>}></Route>
            <Route path="recipeList" element={<Home></Home>}></Route>
            <Route path="recipeDetails/:id" element={<RecipeDetails></RecipeDetails>}></Route>
        </Routes>
}