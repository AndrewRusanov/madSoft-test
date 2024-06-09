import { ChangeEvent, FC } from "react";
import { Question } from "../../types/questions";

type Props = {
  question: Question;
  answer: string;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

const ShortAnswer: FC<Props> = ({ question, answer, handleChange }) => {
  return (
    <div>
      <h3>{question.text}</h3>
      <input type="text" value={answer} onChange={handleChange} />
    </div>
  );
};

export default ShortAnswer;
