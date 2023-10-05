import { toast } from "sonner";
import useResult from "./useResult";
import Swal from "sweetalert2";

const useAddition = () => {
  const [addResult, setAddResults] = useResult();

  const addFunc = (a, b) => {
    if (a.length !== b.length) {
      Swal.fire({
        icon: "error",
        title: "pada operasi penambahan ordo harus sama!",
      });
      return;
    }
    if (a[0].length !== b[0].length) {
      Swal.fire({
        icon: "error",
        title: "pada operasi penambahan ordo harus sama!",
      });
      return;
    }

    const result = [];

    for (let i = 0; i < a.length; i++) {
      const row = [];
      for (let j = 0; j < a[0].length; j++) {
        if (isNaN(a[i][j]) || isNaN(b[i][j])) {
          Swal.fire({
            icon: "error",
            title: "Input harus berupa angka!",
          });
          return;
        }
        row.push(parseInt(a[i][j]) + parseInt(b[i][j]));
      }
      result.push(row);
    }
    setAddResults(result);
    toast.success(`Matrix A + B has been successfully calculated`);
  };
  return { addResult, addFunc };
};
export default useAddition;
