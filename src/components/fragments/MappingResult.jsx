const MappingResult = (props) => {
  return (
    <div className="flex flex-col justify-center items-center">
      {props.results.map((m, n) => (
        <div key={n} className="flex justify-center items-center">
          {m.map((x, y) => (
            <div
              key={y}
              className=" min-w-[50px] flex justify-center items-center border border-black rounded-lg text-xl font-semibold bg-white"
            >
              {x}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default MappingResult;
