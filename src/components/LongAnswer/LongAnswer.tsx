import { ChangeEvent, FC } from "react";
import { Question } from "../../types/questions";
import styles from "./LongAnswers.module.css";

type Props = {
  question: Question;
  answer: string;
  handleChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
};

const LongAnswer: FC<Props> = ({ question, answer, handleChange }) => {
  return (
    <div className={styles.container}>
      <h3 className={styles.question}>{question.text}</h3>
      <textarea
        placeholder="Напишите развёрнутый ответ"
        className={styles.inputArea}
        value={answer}
        onChange={handleChange}
      />
    </div>
  );
};

export default LongAnswer;
