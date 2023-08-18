import React from "react";

const CardMatrix = ({ title, settingInput, handleSubmit, arrInput }) => {
  return (
    <div className="border border-blue-800 rounded bg-slate-200">
      <p className="px-5 text-3xl text-center text-white bg-slate-800">
        {title}
      </p>
      <div className="mb-4">{settingInput}</div>
      <form onSubmit={handleSubmit} className="flex-col">
        {arrInput}
        <button
          type="submit"
          className="w-full px-3 rounded-sm bg-blue-900 text-white active:bg-slate-400 py-0.5 mt-4"
        >
          submit
        </button>
      </form>
    </div>
  );
};

export default CardMatrix;
