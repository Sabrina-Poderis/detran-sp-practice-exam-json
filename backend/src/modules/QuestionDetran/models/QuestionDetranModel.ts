import { Schema, model } from 'mongoose';
import QuestionTypeEnum from "@modules/QuestionDetran/ts/enums/QuestionTypeEnum";
import QuestionOptionsEnum from "@modules/QuestionDetran/ts/enums/QuestionOptionsEnum";
import QuestionDetranMongooseDocumentInterface from "@modules/QuestionDetran/ts/interfaces/QuestionDetranMongooseDocumentInterface";

const QuestionDetranSchema = new Schema<QuestionDetranMongooseDocumentInterface>({
  id: { type: Number, required: true, unique: true },
  question: { type: String, required: true },
  options: {
    A: { type: String, required: true },
    B: { type: String, required: true },
    C: { type: String, required: true },
    D: { type: String, required: true },
  },
  answer: { 
    type: String, 
    required: true, 
    enum: Object.values(QuestionOptionsEnum) 
  },
  type: { 
    type: String, 
    required: true, 
    enum: Object.values(QuestionTypeEnum) 
  },
  checked: { type: Boolean, default: false }
});

QuestionDetranSchema.set('toObject', { virtuals: true });
QuestionDetranSchema.set('toJSON', { virtuals: true });
QuestionDetranSchema.pre('save', function (next) {
  throw new Error('This collection is readonly.');
});
QuestionDetranSchema.pre('updateOne', function (next) {
  throw new Error('This collection is readonly.');
});
QuestionDetranSchema.pre('deleteOne', function (next) {
  throw new Error('This collection is readonly.');
});

const QuestionDetranModel = model<QuestionDetranMongooseDocumentInterface>('questions-detran', QuestionDetranSchema, 'questions-detran');

export default QuestionDetranModel