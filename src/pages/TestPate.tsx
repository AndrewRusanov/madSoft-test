import { ChangeEvent, FC } from "react";
import Timer from "../components/Timer";
import StepForm from "../components/StepForm";
import { useAppDispatch, useAppSelector } from "../store/store";
import { QUESTIONS } from "../data/Questions";
import { setAnswer, setProgress } from "../store/slice";

const TestPage: FC = () => {
  const dispatch = useAppDispatch();
  const { answers, progress } = useAppSelector((state) => state.test);

  const handleNext = () => {
    if (progress < QUESTIONS.length - 1) {
      dispatch(setProgress(progress + 1));
    }
  };

  const handlePrev = () => {
    if (progress > 0) {
      dispatch(setProgress(progress - 1));
    }
  };

  const handleTimeUp = () => {
    alert("Время вышло!");
  };

  const handleChange = (
    event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { type, value, checked } = event.target;
    const currentQuestionId = QUESTIONS[progress].id;
    let updatedAnswer;

    if (type === "checkbox") {
      const currentAnswers = answers[currentQuestionId] as string[] | [];
      updatedAnswer = checked
        ? [...currentAnswers, value]
        : currentAnswers.filter((option) => option !== value);
    } else {
      updatedAnswer = value;
    }

    dispatch(
      setAnswer({ questionId: currentQuestionId, answer: updatedAnswer })
    );
  };

  return (
    <section>
      <Timer initialTime={3600} onTimeUp={handleTimeUp} />
      <StepForm
        step={progress}
        question={QUESTIONS[progress]}
        answer={answers[QUESTIONS[progress].id]}
        handleNext={handleNext}
        handlePrev={handlePrev}
        handleChange={handleChange}
      />
    </section>
  );
};

export default TestPage;
