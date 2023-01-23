import bcrypt from "bcrypt";
import { Types } from "mongoose";



const check = async( input:string,correct:string):Promise<boolean>=>{
      try {
      return  await bcrypt.compareSync(input,correct)

            
      } catch (error: any) {
            return false
            
      }





}


export default check