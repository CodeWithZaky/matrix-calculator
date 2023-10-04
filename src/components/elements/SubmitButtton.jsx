import { clsx } from "clsx";
import { toast } from "sonner";

const SubmitButtton = ({ label, title, layout }) => {
  return (
    <button
      onClick={() => toast.success(`${title}`)}
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
export default SubmitButtton;
