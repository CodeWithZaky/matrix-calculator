import { FaEquals } from "react-icons/fa";

const ResultButton = ({ funcLogic, title }) => {
  return (
    <button
      onClick={() => funcLogic()}
      className="bg-blue-900 hover:bg-blue-800 active:bg-slate-800 my-2 px-4 py-0. border border-blue-700 rounded-md w-full text-5xl text-center text-white 5 btn"
    >
      <FaEquals />
    </button>
  );
};

export default ResultButton;
