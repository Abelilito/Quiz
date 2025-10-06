export const ShowQuestion = ({ question, children }) => {
  return (
    <>
      <h1 className="text-5xl">Quiz</h1>
      <div className="mb-10 text-base mt-[2rem]">{question}</div>
      {children}
    </>
  );
};
