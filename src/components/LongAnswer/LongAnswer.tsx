import { ChangeEvent, FC } from "react";
import { Question } from "../../types/questions";

type Props = {
  question: Question;
  answer: string;
  handleChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
};

const LongAnswer: FC<Props> = ({ question, answer, handleChange }) => {
  return (
    <div>
      <h3>{question.text}</h3>
      <textarea value={answer} onChange={handleChange} />
    </div>
  );
};

export default LongAnswer;
