import { Schema, model } from 'mongoose';
import ResultInterface from '@modules/Results/ts/interfaces/ResultInterface';

const ResultSchema = new Schema<ResultInterface>({
  user_id: { type: String, required: true },
  score: { type: Number, required: true },
  total_questions: { type: Number, required: true },
  created_at: { type: Date, required: true, default: Date.now },
});

ResultSchema.set('toObject', { virtuals: true });
ResultSchema.set('toJSON', { virtuals: true });

ResultSchema.pre('save', function (next) {
  throw new Error('This collection is readonly.');
});
ResultSchema.pre('updateOne', function (next) {
  throw new Error('This collection is readonly.');
});
ResultSchema.pre('deleteOne', function (next) {
  throw new Error('This collection is readonly.');
});

const ResultModel = model<ResultInterface>('Result', ResultSchema, 'results');

export default ResultModel;
