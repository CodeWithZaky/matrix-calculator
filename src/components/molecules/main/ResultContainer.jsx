import OperationIdentity from "./OperationIdentity";
import MappingResult from "./MappingResult";

const ResultContainer = ({ operationIdentity, results }) => {
  return (
    <div className="flex items-center justify-center w-full border border-blue-800 rounded bg-slate-200 ">
      <div className="flex items-center justify-center gap-5 px-1 my-3">
        <OperationIdentity operationIdentity={operationIdentity} />
        <MappingResult results={results} />
      </div>
    </div>
  );
};

export default ResultContainer;
