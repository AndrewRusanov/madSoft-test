import { ChangeEvent, FC } from "react";

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
    <div>
      <input
        type={type}
        value={option}
        checked={selectedOptions.includes(option)}
        onChange={handleChange}
      />
      {option}
    </div>
  );
};

export default AnswerOption;
