import React from "react";

const SettingInput = ({ handleSubmitOrdo, rowInput, colInput }) => {
  return (
    <form
      onSubmit={handleSubmitOrdo}
      className="flex justify-start gap-4 px-2 py-1"
    >
      <div className="flex gap-3 border rounded border-slate-400">
        <section className="flex flex-col ml-0.5 my-0.5">
          <div>row</div>
          <input
            type="number"
            min={0}
            defaultValue={rowInput}
            className="border w-[60px] border-slate-700 rounded text-center"
          />
        </section>
        <section className="flex flex-col my-0.5">
          <div>colomn</div>
          <input
            type="number"
            min={0}
            defaultValue={colInput}
            className="border w-[60px] border-slate-700 rounded text-center"
          />
        </section>
        <button type="submit" className="px-2 text-white bg-slate-700">
          save
        </button>
      </div>
    </form>
  );
};

export default SettingInput;
