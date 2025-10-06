const Progressbar = ({ range }) => {
  let percentage;
  if (range > 100) {
    percentage = 100;
  } else {
    percentage = range;
  }

  return (
    <div className="m-auto w-full md:w-[70%] lg:w-[40%]">
      <div
        className="
          h-[18px] relative bg-transparent border border-solid border-grey w-full rounded-tl-full rounded-bl-full
          rounded-tr-full rounded-br-full
        "
      >
        <div
          className="relative h-full bg-green-400 rounded-tl-full rounded-bl-full rounded-tr-full rounded-br-full"
          style={{ width: percentage + "%" }}
        ></div>
      </div>
    </div>
  );
};

export default Progressbar;
