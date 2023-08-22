import useResult from "./useResult";
import Swal from "sweetalert2";

const useSubtraction = () => {
  const [results, setResults] = useResult();

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
    setResults(result);
  };

  return { results, subFunc };
};

export default useSubtraction;
