import s from "./style.module.css";

export const ShowAnswer = ({ fn, questions, result, children }) => {
  return (
    <>
      <h1 className="text-4xl font-bold">
        Réponses : {fn} / {questions.length}
      </h1>

      {questions.map((question, index) => {
        question.yourAnswer = result[index];
        return (
          <div key={index} className="mb-8">
            <div className="mt-8">
              <div className={s.question}>{"Question " + (index + 1)}</div>
              <div>
                Votre reponse est
                <span className="font-bold"> {question.yourAnswer}</span>
              </div>

              <div>
                La bonne reponse est
                <span className="font-bold text-green-400">
                  {" "}
                  {question.answer}
                </span>
              </div>
            </div>
          </div>
        );
      })}
      {children}
    </>
  );
};
