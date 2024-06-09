import { ChangeEvent, FC } from "react";
import { Question } from "../../types/questions";
import styles from "./ShortAnswer.module.css";

type Props = {
  question: Question;
  answer: string;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

const ShortAnswer: FC<Props> = ({ question, answer, handleChange }) => {
  return (
    <div className={styles.container}>
      <h3 className={styles.question}>{question.text}</h3>
      <input
        placeholder="Напишите краткий ответ"
        className={styles.input}
        type="text"
        value={answer}
        onChange={handleChange}
      />
    </div>
  );
};

export default ShortAnswer;
