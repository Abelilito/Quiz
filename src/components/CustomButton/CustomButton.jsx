export const CustomButton = ({ text, fn, className }) => {
  return (
    <button
      className={
        "border border-solid outline-none px-[15px] py-[5px] rounded-md w-max " +
        className
      }
      onClick={fn}
    >
      {text}
    </button>
  );
};
