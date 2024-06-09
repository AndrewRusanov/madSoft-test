export enum QuestionTypes {
  SINGLE_SELECT = "single-select",
  MULTI_SELECT = "multi-select",
  SHORT_ANSWER = "short-answer",
  LONG_ANSWER = "long-answer",
}

export type Question = {
  id: number;
  type: QuestionTypes;
  text: string;
  options?: string[];
};
