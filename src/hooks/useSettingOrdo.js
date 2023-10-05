import { useState } from "react";
import { toast } from "sonner";
import Swal from "sweetalert2";

// Custom hook untuk validasi input ordo
function useSettingOrdo(initialRow = 3, initialCol = 3) {
  const [row, setRow] = useState(initialRow);
  const [col, setCol] = useState(initialCol);

  const handleSettingOrdo = (e, title) => {
    e.preventDefault();

    const [rowValue, colValue] = e.target;
    const newRow = parseInt(rowValue.value);
    const newCol = parseInt(colValue.value);

    if (isNaN(newRow) || isNaN(newCol) || newRow < 1 || newCol < 1) {
      Swal.fire({
        icon: "error",
        title: "Masukan tidak valid. Harus angka lebih dari 0.",
      });
      return;
    }

    setRow(newRow);
    setCol(newCol);
    toast.success(`${title}`);
  };

  return { row, col, handleSettingOrdo };
}

export default useSettingOrdo;
