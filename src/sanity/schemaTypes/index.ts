import { type SchemaTypeDefinition } from 'sanity'
import  product  from './product'
import {comment} from './comment'
import { userSchema } from './user'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product,comment,userSchema],
}
