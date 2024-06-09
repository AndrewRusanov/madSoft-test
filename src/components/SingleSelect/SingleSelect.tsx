import { ChangeEvent, FC } from "react";
import { Question } from "../../types/questions";
import AnswerOption from "../AnswerOption";

import styles from "./SingleSelect.module.css";

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
    <div className={styles.container}>
      <h3 className={styles.question}>{question.text}</h3>
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
