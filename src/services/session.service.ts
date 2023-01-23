import SessionModel from "../models/session.model";
import { Types } from "mongoose";


export async function createSession(user:Types.ObjectId,userAgent:string):Promise<object>{

      const session = await SessionModel.create({
            user,
            userAgent
      })
return session.toJSON()


}