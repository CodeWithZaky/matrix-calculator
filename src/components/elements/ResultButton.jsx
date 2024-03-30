import { FaEquals } from "react-icons/fa";

const ResultButton = ({ funcLogic, title }) => {
  return (
    <button
      onClick={() => funcLogic()}
      className="py-0. 5 btn my-2 w-full rounded-md border border-blue-700 bg-blue-900 px-4 text-center text-5xl text-white hover:bg-blue-800 active:bg-slate-800"
    >
      <FaEquals />
    </button>
  );
};

export default ResultButton;
