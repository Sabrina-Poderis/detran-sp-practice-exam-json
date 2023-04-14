import { QuestionDetranInterface } from "../ts/question";

export const firstAidQuestions: Array<QuestionDetranInterface> = [
  {
    id: 1,
    question: "O que deve ser feito se uma vítima de acidente com motocicleta, após ser atropelada, tenta se retirar do local, alegando que se sente bem, apesar de sentir dores nas costas e pernas?",
    options: {
      A: "Permitir que a vítima se retire do local e vá para casa.",
      B: "Oferecer à vítima um analgésico para aliviar a dor.",
      C: "Orientá-la para não se movimentar e aguardar o socorro especializado no local.", // Resposta correta
      D: "Auxiliar a vítima a se levantar e se afastar do local do acidente."
    },
    answer: 'C',
    type: 'PRIMEIROS_SOCORROS'
  }
]

