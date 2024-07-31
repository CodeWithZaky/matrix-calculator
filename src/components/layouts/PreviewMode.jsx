import ViewResult from "../fragments/ViewResult";

const PreviewMode = ({ toggleFN, matrixA, matrixB, result, identity }) => {
  return (
    <section className="relative flex flex-col justify-start items-start gap-7 bg-slate-200/50 p-5 border border-black/50 rounded-md w-full">
      <CloseButton toggleFN={toggleFN} />
      <p className="text-slate-900/50 uppercase">{"on back stage :"}</p>
      <div className="flex md:flex-row flex-col gap-2">
        <div className="flex flex-col items-start">
          <p className="text-slate-900/50">matrix A</p>
          <ViewResult results={matrixA} />
        </div>
        <div className="md:flex items-center hidden mt-4 px-1 text-black/50 text-xl">
          {identity}
        </div>
        <div className="flex flex-col items-start">
          <p className="text-slate-900/50">matrix B</p>
          <ViewResult results={matrixB} />
        </div>
      </div>
      <div className="flex flex-col items-start gap-1">
        <p className="text-slate-900/50">{`result matrix A ${identity} B :`}</p>
        <ViewResult results={result} />
      </div>
    </section>
  );
};

export default PreviewMode;

const CloseButton = ({ toggleFN }) => {
  return (
    <p
      onClick={() => toggleFN()}
      className="top-0 right-0 absolute border-slate-900/50 hover:bg-red-500/80 px-2 pb-1 border-b border-l rounded-md text-2xl text-slate-500 hover:text-slate-100/80 cursor-pointer"
    >
      x
    </p>
  );
};
