import ViewResult from "../fragments/ViewResult";

const PreviewMode = ({ toggleFN, matrixA, matrixB, result, identity }) => {
  return (
    <section className="w-full relative flex flex-col border border-black/50 rounded-md  justify-start gap-7 items-start p-5 ">
      <CloseButton toggleFN={toggleFN} />
      <p className="uppercase text-slate-900/50">{"on back stage :"}</p>
      <div className="flex flex-col md:flex-row gap-2">
        <div className="flex flex-col items-start">
          <p className="text-slate-900/50">matrix A</p>
          <ViewResult results={matrixA} />
        </div>
        <div className="hidden md:flex items-center px-1 text-black/50 text-xl mt-4">
          {identity}
        </div>
        <div className="flex flex-col items-start">
          <p className="text-slate-900/50">matrix B</p>
          <ViewResult results={matrixB} />
        </div>
      </div>
      <div className="flex flex-col items-start gap-1">
        <p className="text-slate-900/50">{`result matrix A ${identity} matrix B :`}</p>
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
      className="absolute top-0 right-0 text-2xl hover:bg-red-500/80 cursor-pointer text-slate-500 hover:text-slate-100/80 pb-1 px-2 rounded-md border-l border-b border-slate-900/50 "
    >
      x
    </p>
  );
};
