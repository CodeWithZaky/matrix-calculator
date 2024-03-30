import { clsx } from "clsx";

const SubmitButton = ({ label, layout }) => {
  return (
    <button
      type="submit"
      className={clsx(
        "btn rounded-md bg-blue-900 text-white hover:bg-blue-800 active:bg-slate-400",
        layout,
      )}
    >
      {label}
    </button>
  );
};

export default SubmitButton;
