"use client";
import React, { useState, useEffect } from "react";
const MatrixReduction = () => {
  const [result1, setResult1] = useState([]);
  const [result2, setResult2] = useState([]);
  const [results, setResults] = useState([]);

  const reductionFuch = (a, b) => {
    // Cek apakah ukuran kedua matriks sama
    if (a.length !== b.length || a[0].length !== b[0].length) {
      return alert("pada operasi penambahan dan pengurangan ordo harus sama");
    }
    // Buat matriks kosong untuk menyimpan hasil penjumlahan
    const result = [];
    // Lakukan penjumlahan elemen per elemen dari kedua matriks
    for (let i = 0; i < a.length; i++) {
      const row = [];
      for (let j = 0; j < a[0].length; j++) {
        if (isNaN(a[i][j]) || isNaN(b[i][j])) {
          return alert("Input harus berupa angka");
        }
        row.push(parseInt(a[i][j]) - parseInt(b[i][j]));
      }
      result.push(row);
    }
    setResults(result);
  };

  //////////////////////////////////////////////////////////////////
  const row1 = 2;
  const col1 = 2;
  const arrRow1 = [];
  const arrInput1 = [];

  for (let i = 0; i < col1; i++) {
    arrRow1.push(
      <input
        key={i}
        defaultValue={0}
        className="border border-black w-[100px] h-[100px]"
        required
      />
    );
  }
  for (let i = 0; i < row1; i++) {
    arrInput1.push(
      <div key={i} className="flex">
        {arrRow1}
      </div>
    );
  }

  const handleSubmit1 = (e) => {
    e.preventDefault();
    const inputResult1 = [];
    const ordo1 = arrInput1.length * arrRow1.length;
    for (let i = 0; i < ordo1; i++) {
      if (e.target[i].value === "") {
        alert("masukan tidak boleh kosong");
      }
      if (isNaN(e.target[i].value)) {
        alert("masukan harus angka");
      }
      inputResult1.push(e.target[i].value);
    }
    const arr2dInputResults1 = [];
    while (inputResult1.length)
      arr2dInputResults1.push(inputResult1.splice(0, row1));
    setResult1(arr2dInputResults1);
  };
  ////////////////////////////////////////////////////////////////////
  const row2 = 2;
  const col2 = 2;
  const arrRow2 = [];
  const arrInput2 = [];

  for (let i = 0; i < col2; i++) {
    arrRow2.push(
      <input
        defaultValue={0}
        key={i}
        className="border border-black w-[100px] h-[100px]"
      />
    );
  }
  for (let i = 0; i < row2; i++) {
    arrInput2.push(
      <div key={i} className="flex">
        {arrRow2}
      </div>
    );
  }

  const handleSubmit2 = (e) => {
    e.preventDefault();
    const inputResult2 = [];
    const ordo2 = arrInput2.length * arrRow2.length;
    for (let i = 0; i < ordo2; i++) {
      if (e.target[i].value === "") {
        alert("masukan tidak boleh kosong");
      }
      if (isNaN(e.target[i].value)) {
        alert("masukan harus angka");
      }
      inputResult2.push(e.target[i].value);
    }
    const arr2dInputResults2 = [];
    while (inputResult2.length)
      arr2dInputResults2.push(inputResult2.splice(0, row2));
    setResult2(arr2dInputResults2);
  };

  return (
    <main className="w-full h-auto flex justify-center items-center">
      <form onSubmit={handleSubmit1} className="flex-col mx-2">
        {arrInput1}
        <button type="submit">submit</button>
      </form>
      <div className="px-3 pb-2 text-4xl bg-slate-600 border border-slate-700 rounded-full flex justify-center items-center text-white">
        -
      </div>
      <form onSubmit={handleSubmit2} className="flex-col">
        {arrInput2}
        <button type="submit">submit 2</button>
      </form>
      <button
        onClick={() => {
          reductionFuch(result1, result2);
        }}
        className="px-3 pb-2 text-4xl bg-slate-600 border border-slate-700 rounded-full flex justify-center items-center text-white"
      >
        =
      </button>
      <div className="flex flex-col">
        {results.map((m, n) => {
          return (
            <div key={n} className="flex">
              {m.map((x, y) => {
                return (
                  <div
                    key={y}
                    className=" w-[100px] h-[100px] border border-red-500"
                  >
                    {x}
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default MatrixReduction;
