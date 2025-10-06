import { useState } from "react";
import { CustomButton } from "../CustomButton/CustomButton";
import ShowQuestion from "../ShowQuestion";
import ShowAnswer from "../ShowAnswer";

export const Quiz = () => {
  const questions = [
    {
      question: "Quel est le créateur de React ?",
      options: ["Google", "Facebook", "Microsoft", "Twitter"],
      answer: "Facebook",
    },
    {
      question: "Quel est de département de la ville d'Amiens ?",
      options: ["Somme", "Oise", "L'île de France", "Yvelines"],
      answer: "Somme",
    },
    {
      question: "Qui est le gagnant de Roland garros 2025 ?",
      options: ["Sinner", "Federer", "Alcaraz", "Patrick Sebastien"],
      answer: "Alcaraz",
    },
  ];

  const [count, setCount] = useState(0);
  const [result, setResult] = useState([]);
  const [isClicked, setIsClicked] = useState(false);
  const [range, setRange] = useState(100 / questions.length);

  function hanleIncrement(item, e) {
    setIsClicked(true);
    setResult([...result, item]);

    setTimeout(function () {
      setCount(count + 1);
      setIsClicked(false);
      setRange(range + range);
    }, 1000);
  }

  function showResult() {
    let counter = 0;
    questions.map((q, index) => {
      let response = q.answer === result[index];
      if (response) {
        counter++;
      }
    });
    return counter;
  }

  function reset() {
    setCount(0);
    setResult([]);
    setRange(100 / questions.length);
  }

  if (count + 1 > questions.length) {
    return (
      <ShowAnswer fn={showResult()} questions={questions} result={result}>
        <CustomButton
          text={"Recommencer"}
          fn={reset}
          className="bg-purple-500 text-white font-bold"
        />
      </ShowAnswer>
    );
  } else {
    return (
      <ShowQuestion question={questions[count].question} range={range}>
        <div className="flex gap-8 items-center md:justify-center flex-col md:flex-row">
          {questions[count].options.map((option, index) => (
            <CustomButton
              className={
                isClicked
                  ? questions[count].answer === option
                    ? "bg-green-400 text-white font-bold"
                    : "bg-red-400 text-white font-bold"
                  : "border-black text-black font-light"
              }
              key={index}
              text={option}
              fn={(e) => hanleIncrement(option, e)}
            />
          ))}
        </div>
      </ShowQuestion>
    );
  }
};
