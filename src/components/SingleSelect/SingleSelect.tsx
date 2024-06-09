import { ChangeEvent, FC } from "react";
import { Question } from "../../types/questions";
import AnswerOption from "../AnswerOption";

type Props = {
  question: Question;
  selectedOption: string;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

const SingleSelect: FC<Props> = ({
  question,
  selectedOption,
  handleChange,
}) => {
  return (
    <div>
      <h3>{question.text}</h3>
      {question.options?.map((option, index) => (
        <AnswerOption
          key={index}
          option={option}
          type="radio"
          selectedOptions={[selectedOption]}
          handleChange={handleChange}
        />
      ))}
    </div>
  );
};

export default SingleSelect;
