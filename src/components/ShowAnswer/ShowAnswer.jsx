import s from "./style.module.css";

export const ShowAnswer = ({ fn, questions, result, children }) => {
  function progressBar() {
    const range = 100 / questions.length;
    const totalProgess = range * fn;
    return totalProgess;
  }

  return (
    <>
      <progress id="file" max="100" value={progressBar()}></progress>
      <h1>
        {fn} / {questions.length}
      </h1>
      <br />
      {questions.map((question, index) => {
        question.yourAnswer = result[index];
        return (
          <div key={index}>
            <div className={s.container}>
              <div>{"Question " + (index + 1)}</div>
              <div>{"La bonne reponse est " + question.answer}</div>
              <div>{"Votre reponse est " + question.yourAnswer}</div>
            </div>
          </div>
        );
      })}
      {children}
    </>
  );
};
