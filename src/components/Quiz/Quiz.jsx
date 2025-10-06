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
      question: "Quel est de département de la ville d'Amiens",
      options: ["Somme", "Oise", "L'île de France", "Yvelines"],
      answer: "Somme",
    },
    {
      question: "Quel joeur a gagner l'edition de Roland garros 2025",
      options: ["Sinner", "Federer", "Alcaraz", "Patrick Sebastien"],
      answer: "Alcaraz",
    },
  ];

  const [count, setCount] = useState(0);
  const [result, setResult] = useState([]);
  const [isClicked, setIsClicked] = useState(false);

  function hanleIncrement(item, e) {
    setIsClicked(true);
    setResult([...result, item]);

    setTimeout(function () {
      setCount(count + 1);
      setIsClicked(false);
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
  }

  if (count + 1 > questions.length) {
    return (
      <ShowAnswer fn={showResult()} questions={questions} result={result}>
        <CustomButton text={"Recommencer"} fn={reset} />
      </ShowAnswer>
    );
  } else {
    return (
      <ShowQuestion question={questions[count].question}>
        <div className="flex gap-8 justify-center">
          {questions[count].options.map((option, index) => (
            <CustomButton
              className={
                isClicked
                  ? questions[count].answer === option
                    ? "green"
                    : "red"
                  : ""
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
