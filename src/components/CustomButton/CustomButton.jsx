export const CustomButton = ({ text, fn, className }) => {
  return (
    <button className={"border-1 outline-none " + className} onClick={fn}>
      {text}
    </button>
  );
};
