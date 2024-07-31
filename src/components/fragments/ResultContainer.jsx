import MappingResult from "./MappingResult";

const ResultContainer = ({ operationIdentity, results }) => {
  return (
    <div className="flex justify-center items-center bg-slate-200 border border-blue-800 rounded w-full">
      <div className="flex justify-center items-center gap-5 my-3 px-1">
        <p className="font-medium text-slate-900 text-xl md:text-3xl">
          {operationIdentity}
        </p>
        <MappingResult results={results} />
      </div>
    </div>
  );
};

export default ResultContainer;
