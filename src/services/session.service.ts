import SessionModel,{Session} from "../models/session.model";
import { Types,FilterQuery,UpdateQuery } from "mongoose";
import { verifyJwt,signJwt } from "../utils/jwt.utils";
import { get } from "lodash";
import { findUser } from "./user.service";


export async function createSession(user:Types.ObjectId,userAgent:string){

      const session = await SessionModel.create({
            user,
            userAgent
      })
      console.log(session)

return session


}

export async function findSession(params:FilterQuery<Session>) {
      return await SessionModel.find(params).lean()
      
}


export async function updateSession(params:FilterQuery<Session>,update:UpdateQuery<Session>) {

      return await SessionModel.updateOne(params,update)

      
}

export async function reIssueToken({refreshToken}:{refreshToken:string}){
      const {decoded} = verifyJwt(refreshToken)
      if(!decoded || !get(decoded,"_id")){
            return
      }
      const session = await SessionModel.findById(get(decoded,"session"))

      if(!session || !session.valid){
            false
      }
      const user = await findUser({_id: session!.user})
      if(!user){
            return
      }
      const accessToken = signJwt(
            {
            ...user,
            session:session!._id},
            {expiresIn:"1y"}

      
      )   

      return accessToken


}



