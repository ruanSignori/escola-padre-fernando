import { ObjectId } from "mongodb";

export interface Members extends Document {
  name: string;
  participant: string;
  id?: ObjectId;
}
