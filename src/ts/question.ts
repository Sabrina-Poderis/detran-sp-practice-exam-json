export interface QuestionDetranInterface {
  id: number;
  question: string;
  options: {
    A: string;
    B: string;
    C: string;
    D: string;
  };
  answer: QuestionDetranOptions;
  type: QuestionDetranType;
}

type QuestionDetranType = 
  'CIDADANIA' |
  'DIRECAO_DEFENSIVA' | 
  'LEGISLACAO' | 
  'PRIMEIROS_SOCORROS' |
  'MECANICA_BASICA' |
  'MEIO_AMBIENTE';

type QuestionDetranOptions = 
  'A' |
  'B' | 
  'C' | 
  'D';
