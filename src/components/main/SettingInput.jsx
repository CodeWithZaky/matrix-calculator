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
          <Input defaultValue={rowInput} />
        </section>
        <section className="flex flex-col my-0.5">
          <div>colomn</div>
          <Input defaultValue={colInput} />
        </section>
        <button
          type="submit"
          className="h-full px-2 text-white bg-blue-900 rounded-md btn hover:bg-blue-800"
        >
          save
        </button>
      </div>
    </form>
  );
};

export default SettingInput;

const Input = ({ defaultValue }) => (
  <input
    type="number"
    min={0}
    defaultValue={defaultValue}
    className="border w-[60px] border-slate-700 bg-slate-50 rounded text-center"
  />
);
