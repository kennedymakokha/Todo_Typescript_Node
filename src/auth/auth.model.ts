import { Schema, model, connect } from "mongoose";
import { BaseAuth, Auth } from "./auth.interface";

// 1. Create a Schema corresponding to the document interface.
const schema = new Schema<BaseAuth>({
  email: { type: String, required: true },
  password: { type: String, required: true },
  name: { type: String },
  phone: { type: Number },
  deletedAt: { type: Date, default: null },
});

// 2. Create a Model.
export const UserModel = model<BaseAuth>("user", schema);

run().catch((err) => console.log(err));

async function run(): Promise<void> {
  // 4. Connect to MongoDB
  await connect("mongodb+srv://kennedy:eAkEqFSKu7bsaz4g@joblinq.wbhmn.mongodb.net/db_todo?retryWrites=true&w=majority"
  );

}
