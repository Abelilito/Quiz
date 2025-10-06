import LegalNotice from "../LegalNotice/LegalNotice";
import Progressbar from "../Progressbar/Progressbar";

export const ShowQuestion = ({ question, children, range }) => {
  return (
    <>
      <Progressbar range={range} />
      <div className="flex flex-col items-center justify-center flex-1 relative">
        <h1 className="text-5xl font-bold">Quiz</h1>
        <div className="mb-10 text-base mt-[2rem] question">{question}</div>
        {children}
      </div>
      <LegalNotice />
    </>
  );
};
