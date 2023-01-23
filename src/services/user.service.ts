import UserModel,{IUser} from "../models/user.model"
import { omit } from "lodash";

import hash from "../utils/hash";
import check from "../utils/checkPassword";
export async function createUser(input :IUser):Promise<object>{
       const {name,email,password} = input
      try {
            return await UserModel.create({
                  name,
                  email,
                  password:await hash(password!)
            })
      } catch (error:any) {
            throw new Error(error)      
      }
}



export async function validatePassword({email, password}:{email:string,password:string}){
      try {
            const user  = await UserModel.findOne({email})
            if(!user){
                  return ;
            }
            const valid = await check(password,user.password)
            if(valid){
            //    return omit(user.toJSON(),"password")
            return user
            }
            return ;
      
            
      } catch (error:any) {
            throw new Error(error)
            
      }
     


}