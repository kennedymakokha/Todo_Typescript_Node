import { Schema, model, connect } from 'mongoose';
import {BaseTodo,Todo} from './todo.interface'

// 1. Create an interface representing a document in MongoDB.


// 2. Create a Schema corresponding to the document interface.
const schema = new Schema<BaseTodo>({
  todo: { type: String, required: true },
    isDone: { type: Boolean,default:false },
  deletedAt: { type: Date, default: null, }
  
});

// 3. Create a Model.
 export const TodoModel = model<BaseTodo>('todos', schema);

run().catch(err => console.log(err));

async function run(): Promise<void> {
  // 4. Connect to MongoDB
  await connect(
    "mongodb+srv://kennedy:eAkEqFSKu7bsaz4g@joblinq.wbhmn.mongodb.net/db_todo?retryWrites=true&w=majority"
  );

//   const doc = new UserModel({
//     todo: 'Bill',
//     isDone: false,
//     avatar: 'https://i.imgur.com/dM7Thhn.png'
//   });
//   await doc.save();

//   console.log(doc.todo); // 'bill@initech.com'
}

