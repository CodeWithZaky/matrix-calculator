import { useState } from "react";

const useMatrixOperations = () => {
  const [matrixA, setMatrixA] = useState([
    [[""], [""]],
    [[""], [""]],
  ]);
  const [matrixB, setMatrixB] = useState([
    [[""], [""]],
    [[""], [""]],
  ]);
  const [result, setResult] = useState(null);

  const handleChange = (e, matrix, setMatrix, rowIndex, colIndex) => {
    const value = e.target.value;
    const newMatrix = matrix.map((row, rIdx) =>
      row.map((col, cIdx) =>
        rIdx === rowIndex && cIdx === colIndex ? value : col,
      ),
    );
    setMatrix(newMatrix);
  };

  const handleAddition = () => {
    const newResult = matrixA.map((row, rIdx) =>
      row.map((col, cIdx) => {
        const sum =
          parseFloat(matrixA[rIdx][cIdx] || 0) +
          parseFloat(matrixB[rIdx][cIdx] || 0);
        return isNaN(sum) ? "" : sum;
      }),
    );
    setResult(newResult);
  };

  const handleSubtraction = () => {
    const newResult = matrixA.map((row, rIdx) =>
      row.map((col, cIdx) => {
        const difference =
          parseFloat(matrixA[rIdx][cIdx] || 0) -
          parseFloat(matrixB[rIdx][cIdx] || 0);
        return isNaN(difference) ? "" : difference;
      }),
    );
    setResult(newResult);
  };

  const handleMultiplication = () => {
    if (matrixA[0].length !== matrixB.length) {
      setResult("Matrix dimensions do not match for multiplication");
      return;
    }

    const newResult = Array(matrixA.length)
      .fill(null)
      .map(() => Array(matrixB[0].length).fill(0));

    for (let i = 0; i < matrixA.length; i++) {
      for (let j = 0; j < matrixB[0].length; j++) {
        for (let k = 0; k < matrixA[0].length; k++) {
          newResult[i][j] +=
            parseFloat(matrixA[i][k] || 0) * parseFloat(matrixB[k][j] || 0);
        }
      }
    }

    setResult(newResult);
  };

  const addRow = (matrix, setMatrix, count = 1) => {
    const newMatrix = [...matrix];
    for (let i = 0; i < count; i++) {
      newMatrix.push(new Array(matrix[0].length).fill(""));
    }
    setMatrix(newMatrix);
  };

  const addColumn = (matrix, setMatrix, count = 1) => {
    const newMatrix = matrix.map((row) => {
      const newRow = [...row];
      for (let i = 0; i < count; i++) {
        newRow.push("");
      }
      return newRow;
    });
    setMatrix(newMatrix);
  };

  const removeRow = (matrix, setMatrix, count = 1) => {
    const newMatrix = matrix.slice(0, -count);
    setMatrix(newMatrix.length ? newMatrix : [[""]]);
  };

  const removeColumn = (matrix, setMatrix, count = 1) => {
    const newMatrix = matrix.map((row) => row.slice(0, -count));
    setMatrix(newMatrix[0].length ? newMatrix : [[""]]);
  };

  return {
    matrixA,
    matrixB,
    result,
    setMatrixA,
    setMatrixB,
    handleChange,
    handleAddition,
    handleSubtraction,
    handleMultiplication,
    addRow,
    addColumn,
    removeRow,
    removeColumn,
  };
};

export default useMatrixOperations;
