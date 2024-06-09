import { Question, QuestionTypes } from "../types/questions";

export const QUESTIONS: Question[] = [
  {
    id: 1,
    type: QuestionTypes.SINGLE_SELECT,
    text: "Как зовут папу Александра Сергеевича",
    options: ["Александр", "Сергей", "Афанасий"],
  },
  {
    id: 2,
    type: QuestionTypes.SINGLE_SELECT,
    text: "Столица Австралии...",
    options: ["Канберра", "Сидней", "Австралиа"],
  },
  {
    id: 3,
    type: QuestionTypes.MULTI_SELECT,
    text: "Какие цвета есть на светофоре?",
    options: ["Красный", "Синий", "Желтый", "Зелёный"],
  },
  {
    id: 4,
    type: QuestionTypes.MULTI_SELECT,
    text: "Выберите чудеса света",
    options: [
      "Статуя Зевса в Олимпии",
      "Колосс Родосский",
      "Эйфелева башня",
      "Статуя Свободы",
    ],
  },
  {
    id: 5,
    type: QuestionTypes.SHORT_ANSWER,
    text: "Отгадайте загадку: 'Висит груша, нельзя скушать.'",
  },
  {
    id: 6,
    type: QuestionTypes.SHORT_ANSWER,
    text: "Что такое гипотенуза?",
  },
  {
    id: 7,
    type: QuestionTypes.LONG_ANSWER,
    text: "Дайте определение понятию 'Экономика'",
  },
  {
    id: 8,
    type: QuestionTypes.LONG_ANSWER,
    text: "Напишите мини-соченение на тему 'Как я провёл лето'",
  },
];
