import { Request,Response,NextFunction } from "express"
import { get } from "lodash"
import { verifyJwt } from "../utils/jwt.utils"




 async function deserializeUser (req:Request,res:Response,next:NextFunction){
      // /const accessToken = get(req,"headers.authorization","").replace(/^Bearer\s/,"")
      try {
            const authHeader = req.headers.authorization;
      const accessToken  = authHeader!.split(" ")[1];
      const refreshToken = req.headers.refreshToken
      console.log(accessToken)
      if(!accessToken){
      // console.log("hello world")

            return next()
      }

      const {decoded,expired} = verifyJwt(accessToken)
      // console.log(decoded,expired)
      if(decoded){
            console.log(decoded)
            res.locals.user =decoded
      }

      if(expired && refreshToken){
            
      }

      return next()

            
      } catch (error) {
      return next()

            
      }
      


}

export default deserializeUser