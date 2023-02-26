import data from "../data";
import jwt  from "jsonwebtoken";

const {privateKey,publicKey}:{privateKey:string,publicKey:string} = data


export function signJwt(object:object,options?:jwt.SignOptions | undefined){
      return jwt.sign(object,privateKey,
            {
                  ...(options && options),
                  algorithm:"HS384"
            }
            
            )
            


}

export function verifyJwt(token:string){

      try {
         const decoded =  jwt.verify(token,privateKey)
         return {
            valid:true,
            expired:false,
            decoded

         }
            
      } catch (error:any) {

            return {
                  valid:false,
                  expired:true,
                  decoded:null

            }

            
      }

}