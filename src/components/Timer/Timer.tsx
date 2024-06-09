import { FC, useEffect, useState } from "react";

type Props = {
  initialTime: number;
};

const Timer: FC<Props> = ({ initialTime }) => {
  const [time, setTime] = useState(initialTime);

  useEffect(() => {
    if (time > 0) {
      const decTimer = setInterval(() => setTime(time - 1), 1000);
      return () => clearInterval(decTimer);
    }
  }, [time]);

  return <div>Осталось времени: {time}</div>;
};

export default Timer;
