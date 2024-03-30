import ViewResult from "../fragments/ViewResult";

const PreviewMode = ({ toggleFN, matrixA, matrixB, result, identity }) => {
  return (
    <section className="relative flex w-full flex-col items-start justify-start gap-7  rounded-md border border-black/50 bg-slate-200/50 p-5">
      <CloseButton toggleFN={toggleFN} />
      <p className="uppercase text-slate-900/50">{"on back stage :"}</p>
      <div className="flex flex-col gap-2 md:flex-row">
        <div className="flex flex-col items-start">
          <p className="text-slate-900/50">matrix A</p>
          <ViewResult results={matrixA} />
        </div>
        <div className="mt-4 hidden items-center px-1 text-xl text-black/50 md:flex">
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
      className="absolute top-0 right-0 cursor-pointer rounded-md border-l border-b border-slate-900/50 px-2 pb-1 text-2xl text-slate-500 hover:bg-red-500/80 hover:text-slate-100/80 "
    >
      x
    </p>
  );
};
