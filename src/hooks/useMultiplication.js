import useResult from "./useResult";

const useMultiplication = () => {
  const [results, setResults] = useResult();

  const mulFuch = (a, b) => {
    if (a[0].length !== b.length) {
      return alert("Dimensi matriks tidak sesuai");
    }
    if (!isInputValid(a) || !isInputValid(b)) {
      return alert("Input harus berupa angka");
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
    // Membuat matriks kosong dengan ukuran yang sesuai
    let resultMatrix = [];
    for (let i = 0; i < a.length; i++) {
      resultMatrix[i] = new Array(b[0].length).fill(0);
    }

    // Melakukan operasi perkalian matriks
    for (let i = 0; i < a.length; i++) {
      for (let j = 0; j < b[0].length; j++) {
        for (let k = 0; k < b.length; k++) {
          resultMatrix[i][j] += a[i][k] * b[k][j];
        }
      }
    }
    setResults(resultMatrix);
  };
  return { results, mulFuch };
};

export default useMultiplication;
