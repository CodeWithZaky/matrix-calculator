"use client";
import React, { useState, useEffect } from "react";
import { AiFillSetting } from "react-icons/ai";
const MatrixMultiplication = () => {
  const [result1, setResult1] = useState([]);
  const [result2, setResult2] = useState([]);
  const [results, setResults] = useState([]);
  const [rowInput1, setRowInput1] = useState([2]);
  const [colInput1, setColInput1] = useState([2]);
  const [rowInput2, setRowInput2] = useState([2]);
  const [colInput2, setColInput2] = useState([2]);
  const [toggle1, setToggle1] = useState(false);
  const [toggle2, setToggle2] = useState(false);

  //////////////////////////////MATRIX A////////////////////////////////////
  //////////////////////////////MATRIX A////////////////////////////////////
  //////////////////////////////MATRIX A////////////////////////////////////
  //SETTING INPUT
  const toggleButton1 = () => {
    setToggle1(!toggle1);
  };
  const handleSubmitOrdo1 = (e) => {
    e.preventDefault();
    for (let i = 0; i < 2; i++) {
      if (e.target[i].value === "") {
        return alert("masukan harus di isi minimal 1");
      }
      if (e.target[i].value < 1) {
        return alert("masukan harus di isi minimal 1");
      }
      if (isNaN(e.target[i].value)) {
        return alert("masukan berupa angka");
      }
    }
    setRowInput1(e.target[0].value);
    setColInput1(e.target[1].value);
  };

  const settingInput1 = (
    <form onSubmit={handleSubmitOrdo1} className="flex flex-col">
      <div>row</div>
      <input
        type="number"
        placeholder="number"
        className="border border-black"
      />
      <div>colomn</div>
      <input
        type="number"
        placeholder="number"
        className="border border-black"
      />
      <button type="submit">ok</button>
    </form>
  );
  const row1 = rowInput1;
  const col1 = colInput1;
  const arrRow1 = [];
  const arrInput1 = [];
  //ORDO INPUT
  for (let i = 0; i < col1; i++) {
    arrRow1.push(
      <input
        key={i}
        defaultValue={0}
        className="border border-black w-[100px] h-[100px]"
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
  ///////////////////////////////MATRIX B/////////////////////////////////////
  ///////////////////////////////MATRIX B/////////////////////////////////////
  ///////////////////////////////MATRIX B/////////////////////////////////////
  //SETTING INPUT
  const toggleButton2 = () => {
    setToggle2(!toggle2);
  };
  const handleSubmitOrdo2 = (e) => {
    e.preventDefault();
    for (let i = 0; i < 2; i++) {
      if (e.target[i].value === "") {
        return alert("masukan harus di isi minimal 1");
      }
      if (e.target[i].value < 1) {
        return alert("masukan harus di isi minimal 1");
      }
      if (isNaN(e.target[i].value)) {
        return alert("masukan berupa angka");
      }
    }
    setRowInput2(e.target[0].value);
    setColInput2(e.target[1].value);
  };

  const settingInput2 = (
    <form onSubmit={handleSubmitOrdo2} className="flex flex-col">
      <div>row</div>
      <input
        type="number"
        placeholder="number"
        className="border border-black"
      />
      <div>colomn</div>
      <input
        type="number"
        placeholder="number"
        className="border border-black"
      />
      <button type="submit">ok</button>
    </form>
  );
  //
  const row2 = rowInput2;
  const col2 = colInput2;
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
  //MULTIPLICATION FUNCTION
  const multiplicationFuch = (a, b) => {
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

    let result = [];

    // Validasi dimensi matriks
    if (a[0].length !== b.length) {
      alert("Dimensi matriks tidak sesuai");
      return null;
    }

    for (let i = 0; i < a.length; i++) {
      result[i] = [];
      for (let j = 0; j < b[0].length; j++) {
        let sum = 0;
        for (let k = 0; k < a[0].length; k++) {
          sum += a[i][k] * b[k][j];
        }
        result[i][j] = sum;
      }
    }
    setResults(result);
  };

  return (
    <main className="min-w-full min-h-screen flex justify-center items-center">
      {toggle1 ? settingInput1 : ""}
      <form onSubmit={handleSubmit1} className="flex-col mx-2">
        <AiFillSetting onClick={toggleButton1} />
        {arrInput1}
        <button type="submit">submit</button>
      </form>
      <div className="px-3 pb-2 text-4xl bg-slate-600 border border-slate-700 rounded-full flex justify-center items-center text-white">
        x
      </div>
      {toggle2 ? settingInput2 : ""}
      <form onSubmit={handleSubmit2} className="flex-col">
        <AiFillSetting onClick={toggleButton2} />
        {arrInput2}
        <button type="submit">submit 2</button>
      </form>
      <button
        onClick={() => {
          multiplicationFuch(result1, result2);
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

export default MatrixMultiplication;
