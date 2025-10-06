export const ShowQuestion = ({ question, children }) => {
  return (
    <>
      <h1>Quiz</h1>
      <div className="mb-10">{question}</div>
      {children}
    </>
  );
};
