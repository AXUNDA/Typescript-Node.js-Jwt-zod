import data from "../data";
import jwt  from "jsonwebtoken";

const {privateKey,publicKey}:{privateKey:string,publicKey:string} = data


function signJwt(object:object,options?:jwt.SignOptions | undefined){
      return jwt.sign(object,privateKey,
            {
                  ...(options && options),
                  algorithm:"RS256"
            }
            
            )


}

function verifyJwt(token:string){

      try {
         const decoded =  jwt.verify(token,publicKey)
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