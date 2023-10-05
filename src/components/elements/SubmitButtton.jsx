import { clsx } from "clsx";

const SubmitButton = ({ label, layout }) => {
  return (
    <button
      type="submit"
      className={clsx(
        "rounded-md btn text-white bg-blue-900 hover:bg-blue-800 active:bg-slate-400",
        layout
      )}
    >
      {label}
    </button>
  );
};

export default SubmitButton;
