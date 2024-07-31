const MappingResult = (props) => {
  return (
    <div className="flex flex-col justify-center items-center">
      {props.results.map((m, n) => (
        <div key={n} className="flex justify-center items-center">
          {m.map((x, y) => (
            <div
              key={y}
              className="flex justify-center items-center bg-white border border-black rounded-lg min-w-[50px] font-semibold text-slate-900 text-xl"
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
