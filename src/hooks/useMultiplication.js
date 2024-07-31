import { toast } from "sonner";
import Swal from "sweetalert2";
import useResult from "./useResult";

const useMultiplication = () => {
  const [mulResult, setMulResults] = useResult();

  const mulFunc = (a, b) => {
    if (a[0].length !== b.length) {
      Swal.fire({
        icon: "error",
        title: "Dimensi matriks tidak sesuai",
      });
      return;
    }
    if (!isInputValid(a) || !isInputValid(b)) {
      Swal.fire({
        icon: "error",
        title: "Input harus berupa angka!",
      });
      return;
    }

    function isInputValid(matrix) {
      for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
          if (isNaN(matrix[i][j])) {
            return false;
          }
        }
      }
      return true;
    }

    let resultMatrix = [];

    for (let i = 0; i < a.length; i++) {
      resultMatrix[i] = new Array(b[0].length).fill(0);
    }

    for (let i = 0; i < a.length; i++) {
      for (let j = 0; j < b[0].length; j++) {
        for (let k = 0; k < b.length; k++) {
          resultMatrix[i][j] += a[i][k] * b[k][j];
        }
      }
    }
    setMulResults(resultMatrix);
    toast.success(`Matrix A x B has been successfully calculated`);
  };

  return { mulResult, mulFunc };
};

export default useMultiplication;
