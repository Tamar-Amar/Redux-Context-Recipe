
export const AddRecipeToRedux=(recipe)=>{
    return {type: 'ADD-RECIPE-TO-REDUX',payload:recipe}
}

export const FillDataRecipe=(val)=>{
    return {type:'FILL-DATA-RECIPE',payload:val}
}
export const FillDataUser=(val)=>{
    return {type:'FILL-DATA-USER',payload:val}
}

