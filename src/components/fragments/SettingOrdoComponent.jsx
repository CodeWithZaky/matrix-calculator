import SubmitButtton from "../elements/SubmitButtton";

const SettingOrdoComponent = ({ handleSettingOrdo, row, col, title }) => {
  return (
    <form
      onSubmit={handleSettingOrdo}
      className="flex justify-start gap-4 px-2 py-1"
    >
      <div className="flex gap-3 rounded border border-slate-400">
        <section className="my-0.5 ml-0.5 flex flex-col">
          <p className="text-slate-900">row</p>
          <input
            type="number"
            min={0}
            defaultValue={row}
            className="w-[60px] rounded border border-slate-700 bg-slate-50 text-center text-slate-900"
          />
        </section>
        <section className="my-0.5 flex flex-col">
          <p className="text-slate-900">colomn</p>
          <input
            type="number"
            min={0}
            defaultValue={col}
            className="w-[60px] rounded border border-slate-700 bg-slate-50 text-center text-slate-900"
          />
        </section>
        <SubmitButtton label="save" title={title} layout="h-full px-2" />
      </div>
    </form>
  );
};

export default SettingOrdoComponent;
