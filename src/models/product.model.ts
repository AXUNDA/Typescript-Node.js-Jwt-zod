
import  {Schema,model,Types} from 'mongoose';
import { customAlphabet } from 'nanoid';





interface Product {
  user: Types.ObjectId;
  title: string;
  description: string;
  price:number;
}


const productSchema = new Schema<Product>({
  user: { type: Schema.Types.ObjectId, required: true },
  title: { type: String, required: true ,unique: true },
  description: {type: String, required: true},
  price: {type: Number, required: true},
},{timestamps:true});

const ProductModel = model<Product>('Product', productSchema)







export default  ProductModel
export {Product}