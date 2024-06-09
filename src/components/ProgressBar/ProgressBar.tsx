import { FC } from "react";

import "./ProgressBar.css";

type Props = {
  currentStep: number;
  totalQuestions: number;
};

const ProgressBar: FC<Props> = ({ currentStep, totalQuestions }) => {
  return (
    <div className="progressBar">
      {Array.from({ length: totalQuestions }).map((_, index) => (
        <div
          key={index}
          className={`segment ${index <= currentStep ? "completed" : ""}`}
        />
      ))}
    </div>
  );
};

export default ProgressBar;
