import SettingOrdoComponent from "./SettingOrdoComponent";

const CardMatrix = ({ children }) => {
  return (
    <div className="border border-blue-800 rounded bg-slate-200">
      {children}
    </div>
  );
};

const Header = ({ title }) => {
  return (
    <p className="px-5 text-3xl text-center text-white bg-slate-800">{title}</p>
  );
};

const SettingOrdo = ({ handleSettingOrdo, row, col }) => {
  return (
    <div className="mb-4">
      <SettingOrdoComponent
        handleSettingOrdo={handleSettingOrdo}
        row={row}
        col={col}
      />
    </div>
  );
};

const SetMatrix = ({ handleSetMatrix, children }) => {
  return (
    <form onSubmit={handleSetMatrix} className="flex-col">
      {children}
      <button
        type="submit"
        className="btn w-full px-3 rounded-md bg-blue-900 hover:bg-blue-800 text-white active:bg-slate-400 py-0.5 mt-4"
      >
        submit
      </button>
    </form>
  );
};

CardMatrix.Header = Header;
CardMatrix.SettingOrdo = SettingOrdo;
CardMatrix.SetMatrix = SetMatrix;

export default CardMatrix;
