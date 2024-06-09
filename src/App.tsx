import { useEffect } from "react";
import "./App.css";
import TestPage from "./pages";
import { useAppDispatch, useAppSelector } from "./store/store";
import { setAnswer, setProgress } from "./store/slice";

function App() {
  const dispatch = useAppDispatch();
  const { progress, answers } = useAppSelector((state) => state.test);

  useEffect(() => {
    const savedProgress = localStorage.getItem("progress");
    const savedAnswers = localStorage.getItem("answers");

    if (savedProgress) {
      dispatch(setProgress(JSON.parse(savedProgress)));
    }

    if (savedAnswers) {
      const parsedAnswers = JSON.parse(savedAnswers);
      for (const questionId in parsedAnswers) {
        dispatch(
          setAnswer({
            questionId: Number(questionId),
            answer: parsedAnswers[questionId],
          })
        );
      }
    }
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem("progress", JSON.stringify(progress));
    localStorage.setItem("answers", JSON.stringify(answers));
  }, [progress, answers]);

  return <TestPage />;
}

export default App;
