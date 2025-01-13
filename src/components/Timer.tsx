import { useEffect, useState, useRef } from "react";

const Timer = () => {
  const [sec, setSec] = useState(0);
  const [min, setMin] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const intervalRef = useRef(0);
let number = 0;
  useEffect(() => {
    if (isRunning) {
      const val = setInterval(function () {
          
        console.log(number);

         if(number==10){
          setMin(val=>val +1);
          setSec(0);
          number = 0;
          }else {
            setSec(val=>val+1);
          }
        number++;
      }, 100);
      intervalRef.current = val;
    } else {
      const test = intervalRef.current;
      clearInterval(test);
      console.log("stop");
    }
  }, [isRunning]);

  const startFunc = () => {
    setIsRunning(true);
  };
  const stopFunc = () => {
    console.log("stop func");
    setIsRunning(false);
  };
  const resetFunc = () => {
    setSec(0);
    setMin(0);
  };
  return (
    <>
      <h1 className="mb-5">00.{min <10 ? ('0'+min) : min}.{sec <10 ? ('0'+sec) : sec}</h1>

      <button className="mr-5 mb-5 bg-green-500" onClick={startFunc}>
        Start
      </button>
      <button className="bg-orange-500" onClick={stopFunc}>
        Stop
      </button>
      <br />
      <button className="bg-red-500" onClick={resetFunc}>
        Reset
      </button>
    </>
  );
};

export default Timer;
