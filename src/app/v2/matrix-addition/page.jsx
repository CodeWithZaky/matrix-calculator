"use client";
import useMatrixOperations from "@/src/hooks/v2-hooks/useMatrixOperations";
import { useState } from "react";

export default function Home() {
  const {
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
  } = useMatrixOperations();

  const [rowCountA, setRowCountA] = useState(1);
  const [colCountA, setColCountA] = useState(1);
  const [rowCountB, setRowCountB] = useState(1);
  const [colCountB, setColCountB] = useState(1);

  return (
    <div className="container mx-auto flex min-h-screen min-w-full flex-col items-center justify-center bg-slate-900">
      <div className="flex min-h-screen flex-col items-center justify-center py-2 text-slate-100">
        <h1 className="mb-4 text-3xl font-bold">Matrix Operations</h1>
        <div className="mb-8 grid grid-cols-2 gap-8">
          <div>
            <h2 className="mb-2 text-2xl font-semibold">Matrix A</h2>
            {matrixA.map((row, rIdx) => (
              <div key={rIdx} className="mb-2 flex space-x-2">
                {row.map((col, cIdx) => (
                  <input
                    key={cIdx}
                    type="text"
                    value={matrixA[rIdx][cIdx]}
                    onChange={(e) =>
                      handleChange(e, matrixA, setMatrixA, rIdx, cIdx)
                    }
                    className="w-16 rounded border p-2 text-slate-900"
                  />
                ))}
              </div>
            ))}
            <div className="mb-2 flex space-x-2">
              <input
                type="number"
                value={rowCountA}
                onChange={(e) => setRowCountA(parseInt(e.target.value) || 1)}
                className="w-16 rounded border p-2 text-slate-900"
              />
              <button
                onClick={() => addRow(matrixA, setMatrixA, rowCountA)}
                className="rounded bg-blue-500 p-2 text-white"
              >
                Add Row
              </button>
              <button
                onClick={() => removeRow(matrixA, setMatrixA, rowCountA)}
                className="rounded bg-red-500 p-2 text-white"
              >
                Remove Row
              </button>
            </div>
            <div className="mb-2 flex space-x-2">
              <input
                type="number"
                value={colCountA}
                onChange={(e) => setColCountA(parseInt(e.target.value) || 1)}
                className="w-16 rounded border p-2 text-slate-900"
              />
              <button
                onClick={() => addColumn(matrixA, setMatrixA, colCountA)}
                className="rounded bg-blue-500 p-2 text-white"
              >
                Add Column
              </button>
              <button
                onClick={() => removeColumn(matrixA, setMatrixA, colCountA)}
                className="rounded bg-red-500 p-2 text-white"
              >
                Remove Column
              </button>
            </div>
          </div>
          <div>
            <h2 className="mb-2 text-2xl font-semibold">Matrix B</h2>
            {matrixB.map((row, rIdx) => (
              <div key={rIdx} className="mb-2 flex space-x-2">
                {row.map((col, cIdx) => (
                  <input
                    key={cIdx}
                    type="text"
                    value={matrixB[rIdx][cIdx]}
                    onChange={(e) =>
                      handleChange(e, matrixB, setMatrixB, rIdx, cIdx)
                    }
                    className="w-16 rounded border p-2 text-slate-900"
                  />
                ))}
              </div>
            ))}
            <div className="mb-2 flex space-x-2">
              <input
                type="number"
                value={rowCountB}
                onChange={(e) => setRowCountB(parseInt(e.target.value) || 1)}
                className="w-16 rounded border p-2 text-slate-900"
              />
              <button
                onClick={() => addRow(matrixB, setMatrixB, rowCountB)}
                className="rounded bg-blue-500 p-2 text-white"
              >
                Add Row
              </button>
              <button
                onClick={() => removeRow(matrixB, setMatrixB, rowCountB)}
                className="rounded bg-red-500 p-2 text-white"
              >
                Remove Row
              </button>
            </div>
            <div className="mb-2 flex space-x-2">
              <input
                type="number"
                value={colCountB}
                onChange={(e) => setColCountB(parseInt(e.target.value) || 1)}
                className="w-16 rounded border p-2 text-slate-900"
              />
              <button
                onClick={() => addColumn(matrixB, setMatrixB, colCountB)}
                className="rounded bg-blue-500 p-2 text-white"
              >
                Add Column
              </button>
              <button
                onClick={() => removeColumn(matrixB, setMatrixB, colCountB)}
                className="rounded bg-red-500 p-2 text-white"
              >
                Remove Column
              </button>
            </div>
          </div>
        </div>
        <div className="mb-4 flex space-x-4">
          <button
            onClick={handleAddition}
            className="rounded bg-green-500 p-2 text-white"
          >
            Add Matrices
          </button>
          <button
            onClick={handleSubtraction}
            className="rounded bg-yellow-500 p-2 text-white"
          >
            Subtract Matrices
          </button>
          <button
            onClick={handleMultiplication}
            className="rounded bg-red-500 p-2 text-white"
          >
            Multiply Matrices
          </button>
        </div>
        {result && (
          <div>
            <h2 className="mb-2 text-2xl font-semibold">Result</h2>
            {typeof result === "string" ? (
              <p>{result}</p>
            ) : (
              result.map((row, rIdx) => (
                <div key={rIdx} className="mb-2 flex space-x-2">
                  {row.map((col, cIdx) => (
                    <span
                      key={cIdx}
                      className="w-16 rounded border bg-gray-100 p-2"
                    >
                      {col}
                    </span>
                  ))}
                </div>
              ))
            )}
          </div>
        )}
      </div>
    </div>
  );
}
