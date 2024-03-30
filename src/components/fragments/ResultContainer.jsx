import MappingResult from "./MappingResult";

const ResultContainer = ({ operationIdentity, results }) => {
  return (
    <div className="flex w-full items-center justify-center rounded border border-blue-800 bg-slate-200 ">
      <div className="my-3 flex items-center justify-center gap-5 px-1">
        <p className="text-xl font-medium text-slate-900 md:text-3xl">
          {operationIdentity}
        </p>
        <MappingResult results={results} />
      </div>
    </div>
  );
};

export default ResultContainer;
