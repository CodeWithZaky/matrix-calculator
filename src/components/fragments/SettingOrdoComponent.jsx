import SubmitButtton from "../elements/SubmitButtton";

const SettingOrdoComponent = ({ handleSettingOrdo, row, col, title }) => {
  return (
    <form
      onSubmit={handleSettingOrdo}
      className="flex justify-start gap-4 px-2 py-1"
    >
      <div className="flex gap-3 border-slate-400 border rounded">
        <section className="flex flex-col my-0.5 ml-0.5">
          <p className="text-slate-900">row</p>
          <input
            type="number"
            min={0}
            defaultValue={row}
            className="border-slate-700 bg-slate-50 border rounded w-[60px] text-center text-slate-900"
          />
        </section>
        <section className="flex flex-col my-0.5">
          <p className="text-slate-900">colomn</p>
          <input
            type="number"
            min={0}
            defaultValue={col}
            className="border-slate-700 bg-slate-50 border rounded w-[60px] text-center text-slate-900"
          />
        </section>
        <SubmitButtton label="save" title={title} layout="h-full px-2" />
      </div>
    </form>
  );
};

export default SettingOrdoComponent;
