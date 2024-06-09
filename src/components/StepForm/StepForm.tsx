import { ChangeEvent, FC } from "react";
import { Question, QuestionTypes } from "../../types/questions";
import SingleSelect from "../SingleSelect";
import MultiSelect from "../MultiSelect";
import ShortAnswer from "../ShortAnswer";
import LongAnswer from "../LongAnswer";
import { QUESTIONS } from "../../data/Questions";

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
  return (
    <div>
      {renderQuestions()}
      <button type="button" disabled={step === 0} onClick={handlePrev}>
        Назад
      </button>
      <button
        type="button"
        disabled={step === QUESTIONS.length-1}
        onClick={handleNext}
      >
        Вперёд
      </button>
    </div>
  );
};

export default StepForm;
