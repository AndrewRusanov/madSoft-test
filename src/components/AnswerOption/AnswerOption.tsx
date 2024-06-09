import { ChangeEvent, FC } from "react";

import styles from "./AnswerOption.module.css";

type Props = {
  option: string;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  type: "checkbox" | "radio";
  selectedOptions: string[];
};

const AnswerOption: FC<Props> = ({
  option,
  type,
  selectedOptions = [],
  handleChange,
}) => {
  return (
    <div className={styles.container}>
      <input
        name={option}
        className={styles.input}
        type={type}
        value={option}
        checked={selectedOptions.includes(option)}
        onChange={handleChange}
      />
      <label htmlFor={option}>{option}</label>
    </div>
  );
};

export default AnswerOption;
