import { FC, useEffect, useState } from "react";
import { getFormatedTime } from "../../utils/getFormatedTime";

type Props = {
  initialTime: number;
  onTimeUp: () => void;
};

const Timer: FC<Props> = ({ initialTime, onTimeUp }) => {
  const [time, setTime] = useState(initialTime);

  useEffect(() => {
    if (time > 0) {
      const decTimer = setInterval(() => setTime(time - 1), 1000);
      return () => clearInterval(decTimer);
    } else {
      onTimeUp();
    }
  }, [time, onTimeUp]);

  return <div>Осталось времени: {getFormatedTime(time)}</div>;
};

export default Timer;
