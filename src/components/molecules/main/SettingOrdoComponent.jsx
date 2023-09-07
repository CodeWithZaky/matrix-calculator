import SubmitButtton from "../../atoms/SubmitButtton";

const SettingOrdoComponent = ({ handleSettingOrdo, row, col }) => {
  return (
    <form
      onSubmit={handleSettingOrdo}
      className="flex justify-start gap-4 px-2 py-1"
    >
      <div className="flex gap-3 border rounded border-slate-400">
        <section className="flex flex-col ml-0.5 my-0.5">
          <div>row</div>
          <input
            type="number"
            min={0}
            defaultValue={row}
            className="border w-[60px] border-slate-700 rounded text-center"
          />
        </section>
        <section className="flex flex-col my-0.5">
          <div>colomn</div>
          <input
            type="number"
            min={0}
            defaultValue={col}
            className="border w-[60px] border-slate-700 rounded text-center"
          />
        </section>
        {/* <button
          type="submit"
          className="h-full px-2 text-white bg-blue-900 rounded-md btn hover:bg-blue-800"
        >
          save
        </button> */}
        <SubmitButtton label="save" layout="h-full px-2" />
      </div>
    </form>
  );
};

export default SettingOrdoComponent;
