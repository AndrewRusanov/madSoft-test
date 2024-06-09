import { ChangeEvent, FC } from "react";
import { Question } from "../../types/questions";
import AnswerOption from "../AnswerOption";

type Props = {
  question: Question;
  selectedOptions: string[];
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

const MultiSelect: FC<Props> = ({
  question,
  selectedOptions,
  handleChange,
}) => {
  return (
    <div>
      <h3>{question.text}</h3>
      {question.options?.map((option, index) => (
        <AnswerOption
          key={index}
          option={option}
          type="checkbox"
          selectedOptions={selectedOptions}
          handleChange={handleChange}
        />
      ))}
    </div>
  );
};

export default MultiSelect;
