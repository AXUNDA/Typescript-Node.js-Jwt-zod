
import  {Schema,model,Types} from 'mongoose';
import { customAlphabet } from 'nanoid';



const nanoid = customAlphabet("abcdefghijklmnopqrstuvwxyz1234567890",10)

interface Product {
  user: Types.ObjectId;
  title: string;
  description: string;
  price:number;
  image: string;
}


const productSchema = new Schema<Product>({
  user: { type: Schema.Types.ObjectId, required: true },
  title: { type: String, required: true ,unique: true },
  description: {type: String, required: true},
  price: {type: Number, required: true},
  image: {type: String, required: false}
},{timestamps:true});

const ProductModel = model<Product>('Product', productSchema)







export default  ProductModel
export {Product}