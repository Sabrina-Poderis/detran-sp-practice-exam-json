import QuestionOptionsEnum from "@modules/QuestionDetran/ts/enums/QuestionOptionsEnum";

export default interface SimulatedExamAnswerInterface {
  questionId: number;
  selectedOption: QuestionOptionsEnum;
}
