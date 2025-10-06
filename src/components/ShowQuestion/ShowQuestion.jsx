import Progressbar from "../Progressbar/Progressbar";

export const ShowQuestion = ({ question, children, range }) => {
  return (
    <>
      <Progressbar range={range} />
      <h1 className="text-5xl font-bold mt-20">Quiz</h1>
      <div className="mb-10 text-base mt-[2rem] question">{question}</div>
      {children}
    </>
  );
};
