import { ChangeEvent, FC } from "react";
import { Question, QuestionTypes } from "../../types/questions";
import SingleSelect from "../SingleSelect";
import MultiSelect from "../MultiSelect";
import ShortAnswer from "../ShortAnswer";
import LongAnswer from "../LongAnswer";
import { QUESTIONS } from "../../data/Questions";

import styles from "./StepForm.module.css";
import { useAppDispatch } from "../../store/store";
import { resetState } from "../../store/slice";

type Props = {
  step: number;
  question: Question;
  answer: string | string[];
  handleNext: () => void;
  handlePrev: () => void;
  handleChange: (
    event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => void;
};

const StepForm: FC<Props> = ({
  step,
  question,
  answer,
  handlePrev,
  handleNext,
  handleChange,
}) => {
  const dispatch = useAppDispatch();

  const renderQuestions = () => {
    switch (question.type) {
      case QuestionTypes.SINGLE_SELECT:
        return (
          <SingleSelect
            question={question}
            selectedOption={answer as string}
            handleChange={handleChange}
          />
        );

      case QuestionTypes.MULTI_SELECT:
        return (
          <MultiSelect
            question={question}
            selectedOptions={answer as string[]}
            handleChange={handleChange}
          />
        );

      case QuestionTypes.SHORT_ANSWER:
        return (
          <ShortAnswer
            question={question}
            answer={answer as string}
            handleChange={handleChange}
          />
        );

      case QuestionTypes.LONG_ANSWER:
        return (
          <LongAnswer
            question={question}
            answer={answer as string}
            handleChange={handleChange}
          />
        );
    }
  };

  const isFinal = step === QUESTIONS.length - 1;

  const handleFinish = () => {
    alert("Поздравляем!");
    localStorage.removeItem("answers");
    localStorage.removeItem("progress");
    dispatch(resetState());
  };

  return (
    <section className={styles.container}>
      {renderQuestions()}
      <div className={styles.navigation}>
        <button
          type="button"
          className={styles.button}
          disabled={step === 0}
          onClick={handlePrev}
        >
          Назад
        </button>
        <button
          type="button"
          className={styles.button}
          disabled={step === QUESTIONS.length - 1}
          onClick={handleNext}
        >
          Вперёд
        </button>
      </div>
      {isFinal && (
        <div className={styles.finish}>
          <button
            type="button"
            className={styles.button}
            onClick={handleFinish}
          >
            Завершить тест
          </button>
        </div>
      )}
    </section>
  );
};

export default StepForm;
