import LegalNotice from "../LegalNotice/LegalNotice";

export const ShowAnswer = ({ fn, questions, result, children }) => {
  return (
    <>
      <div className="flex flex-col items-center justify-center flex-1 relative text-center">
        <h1 className="text-4xl font-bold">
          Réponses : {fn} / {questions.length}
        </h1>

        {questions.map((question, index) => {
          question.yourAnswer = result[index];
          return (
            <div key={index} className="mb-8">
              <div className="mt-8">
                <div className="question">{"Question " + (index + 1)}</div>
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
      </div>
      <LegalNotice />
    </>
  );
};
