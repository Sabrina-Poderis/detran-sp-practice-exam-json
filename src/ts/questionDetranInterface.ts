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
  checked?: boolean;
}

type QuestionDetranType = 
  'NAO_IDENTIFICADO' |
  'CIDADANIA_E_MEIO_AMBIENTE' |
  'DIRECAO_DEFENSIVA' | 
  'LEGISLACAO' | 
  'PRIMEIROS_SOCORROS' |
  'MECANICA_BASICA' |
  'PLACAS_DE_TRANSITO';

type QuestionDetranOptions = 
  'A' |
  'B' | 
  'C' | 
  'D' | 
  '?';
