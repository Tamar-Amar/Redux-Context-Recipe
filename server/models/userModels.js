import myMongoose from "mongoose";
let userSchema= myMongoose.Schema({
    userName: String,
    userPassword: String,
    userEmailAdress: String,
})

let user = myMongoose.model("userModelChoose",userSchema,"Users")
export default user