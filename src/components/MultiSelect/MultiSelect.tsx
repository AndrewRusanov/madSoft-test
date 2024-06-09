import { ChangeEvent, FC } from "react";
import { Question } from "../../types/questions";
import AnswerOption from "../AnswerOption";

import styles from "./MultiSelect.module.css";

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
    <div className={styles.container}>
      <h3 className={styles.question}>{question.text}</h3>
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
