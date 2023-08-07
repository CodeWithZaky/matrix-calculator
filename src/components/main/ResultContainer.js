import React from "react";
import OperationTitleResult from "./OperationTitleResult";
import MappingResult from "@/src/components/main/MappingResult";

const ResultContainer = ({ funcLogic, results, operation }) => {
  return (
    <div className="flex flex-col items-center justify-center w-full gap-3 border border-blue-800 rounded bg-slate-200 ">
      <div className="w-full px-5 text-center bg-blue-900/90">
        <button
          onClick={() => {
            funcLogic();
          }}
          className="bg-slate-900 my-2 px-4 py-0.5 rounded-lg active:bg-slate-800 text-3xl text-white border border-slate-400 text-center"
        >
          RESULT
        </button>
      </div>
      <div className="flex items-center justify-center gap-5 px-1 mb-3">
        <OperationTitleResult title={operation} />
        <MappingResult results={results} />
      </div>
    </div>
  );
};

export default ResultContainer;
