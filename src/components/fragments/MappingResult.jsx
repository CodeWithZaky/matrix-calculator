const MappingResult = (props) => {
  return (
    <div className="flex flex-col items-center justify-center">
      {props.results.map((m, n) => (
        <div key={n} className="flex items-center justify-center">
          {m.map((x, y) => (
            <div
              key={y}
              className=" flex min-w-[50px] items-center justify-center rounded-lg border border-black bg-white text-xl font-semibold text-slate-900"
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
