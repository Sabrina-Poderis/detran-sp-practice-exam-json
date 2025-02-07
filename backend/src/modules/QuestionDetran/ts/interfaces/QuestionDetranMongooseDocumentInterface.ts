import { Document, Types } from 'mongoose';
import QuestionDetranInterface from "./QuestionDetranInterface";

export default interface QuestionDetranMongooseDocumentInterface extends Omit<QuestionDetranInterface, 'id'>, Document {
  id: number; 
  _id: Types.ObjectId; 
}