import { useState } from "react";
import Swal from "sweetalert2";
import { toast } from "sonner";

function useSetMatrix(row, col) {
  const [matrix, setMatrix] = useState([
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ]);

  const handleSetMatrix = (e, title) => {
    e.preventDefault();

    const inputValues = Array.from(
      e.target.querySelectorAll(".PROCESS__INPUT"),
      (input) => input.value,
    );

    // Validate input values
    if (inputValues.some((value) => value === "" || isNaN(value))) {
      Swal.fire({
        icon: "error",
        title: "Masukan harus berisi angka dan tidak boleh kosong!",
      });
      return;
    }

    const arr2DInputResults = Array.from({ length: row }, (_, rowIndex) =>
      inputValues.slice(rowIndex * col, (rowIndex + 1) * col).map(Number),
    );

    setMatrix(arr2DInputResults);
    toast.success(`${title}`);
  };

  return {
    matrix,
    handleSetMatrix,
  };
}

export default useSetMatrix;
