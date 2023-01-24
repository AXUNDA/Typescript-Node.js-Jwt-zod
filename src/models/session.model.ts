
import  {Schema,model,Types} from 'mongoose';
import { boolean } from 'zod';





interface Session {
  user: Types.ObjectId;
  valid?: boolean;
  userAgent:string
}


const sessionSchema = new Schema<Session>({
  user: { type: Schema.Types.ObjectId,ref:"User", required: true },
  valid: { type: Boolean,default:true },
  userAgent:{type:String}
  
},{timestamps:true});

const SessionModel = model<Session>('Session', sessionSchema)







export default  SessionModel
export {Session}