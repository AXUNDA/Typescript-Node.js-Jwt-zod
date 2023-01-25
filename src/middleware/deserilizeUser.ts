import { Request,Response,NextFunction } from "express"
import { get } from "lodash"
import { verifyJwt } from "../utils/jwt.utils"
import { reIssueToken } from "../services/session.service";




 async function deserializeUser (req:Request,res:Response,next:NextFunction){
      // /const accessToken = get(req,"headers.authorization","").replace(/^Bearer\s/,"")
      try {
            const authHeader = req.headers.authorization;
      const accessToken  = authHeader!.split(" ")[1];
     const refreshToken:any = get(req, "headers.x-refresh");
      
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
            const newAccessToken =  await reIssueToken({refreshToken})

            if(newAccessToken){
                  res.setHeader("x-access-token",newAccessToken)
                const decoded = verifyJwt(newAccessToken)
            res.locals.user = decoded
            return next()



            }
            
      }

      return next()

            
      } catch (error) {
      return next()

            
      }
      


}

export default deserializeUser