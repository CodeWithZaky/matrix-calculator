import { toast } from "sonner";
import Swal from "sweetalert2";
import useResult from "./useResult";

const useSubtraction = () => {
  const [subResult, setSubResults] = useResult();

  const subFunc = (a, b) => {
    if (a.length !== b.length) {
      Swal.fire({
        icon: "error",
        title: "pada operasi pengurangan ordo harus sama!",
      });
      return;
    }
    if (a[0].length !== b[0].length) {
      Swal.fire({
        icon: "error",
        title: "pada operasi pengurangan ordo harus sama!",
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
        row.push(parseInt(a[i][j]) - parseInt(b[i][j]));
      }
      result.push(row);
    }
    setSubResults(result);
    toast.success(`Matrix A - B has been successfully calculated`);
  };

  return { subResult, subFunc };
};

export default useSubtraction;
