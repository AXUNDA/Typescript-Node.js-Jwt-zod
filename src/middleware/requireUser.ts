import { Request,Response,NextFunction } from "express";

export function requireUser(req:Request, res:Response,next:NextFunction){
      const user = res.locals.user
      if(!user){
            return res.status(404).json({
                  error:"user not found",
            })
      }
      console.log(user)
      return next()

}