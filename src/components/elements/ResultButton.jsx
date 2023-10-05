const ResultButton = ({ funcLogic }) => {
  return (
    <button
      onClick={() => funcLogic()}
      className="btn bg-blue-900 hover:bg-blue-800 px-4 py-0.5 rounded-md active:bg-slate-800 text-3xl text-white border border-blue-700 w-full text-center my-2"
    >
      RESULT
    </button>
  );
};

export default ResultButton;
