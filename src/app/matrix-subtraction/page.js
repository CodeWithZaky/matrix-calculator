"use client";
import { useState } from "react";
import MainPage from "@/src/components/main/MainPage";
import useSubtraction from "@/src/hooks/useSubtraction";

const MatrixReduction = () => {
  const [matrixA, setMatrixA] = useState([
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ]);
  const [matrixB, setMatrixB] = useState([
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ]);

  const [rowInput1, setRowInput1] = useState([3]);
  const [colInput1, setColInput1] = useState([3]);
  const [rowInput2, setRowInput2] = useState([3]);
  const [colInput2, setColInput2] = useState([3]);

  //------------------------------------------------------------------------//
  //--------------------------------MATRIX A--------------------------------//
  //------------------------------------------------------------------------//

  //handle submit value setting ordo form input 1
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

  //setting ordo input form 1
  const settingInput1 = (
    <form
      onSubmit={handleSubmitOrdo1}
      className="flex justify-start gap-4 px-2 py-1"
    >
      <div className="flex gap-3 border rounded border-slate-400">
        <section className="flex flex-col ml-0.5 my-0.5">
          <div>row</div>
          <input
            type="number"
            min={0}
            defaultValue={rowInput1}
            className="border w-[60px] border-slate-700 rounded text-center"
          />
        </section>
        <section className="flex flex-col my-0.5">
          <div>colomn</div>
          <input
            type="number"
            min={0}
            defaultValue={colInput1}
            className="border w-[60px] border-slate-700 rounded text-center"
          />
        </section>
        <button type="submit" className="px-2 text-white bg-slate-700">
          save
        </button>
      </div>
    </form>
  );

  //pembuat wadah matrix dari value ordo input 1
  const row1 = rowInput1;
  const col1 = colInput1;
  const arrRow1 = [];
  const arrInput1 = [];

  for (let i = 0; i < col1; i++) {
    arrRow1.push(
      <input
        key={i}
        defaultValue={0}
        className="border border-black w-[50px] rounded-lg text-center text-xl font-semibold"
      />
    );
  }
  for (let i = 0; i < row1; i++) {
    arrInput1.push(
      <div key={i} className="flex px-1">
        {arrRow1}
      </div>
    );
  }

  //handle submit value matrix input 1
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
      arr2dInputResults1.push(inputResult1.splice(0, col1));
    setMatrixA(arr2dInputResults1);
  };

  //------------------------------------------------------------------------//
  //--------------------------------MATRIX B--------------------------------//
  //------------------------------------------------------------------------//

  //handle submit value setting ordo form input 2
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

  //setting ordo input form 2
  const settingInput2 = (
    <form
      onSubmit={handleSubmitOrdo2}
      className="flex justify-start gap-4 px-2 py-1"
    >
      <div className="flex gap-3 border rounded border-slate-400">
        <section className="flex flex-col ml-0.5 my-0.5">
          <div>row</div>
          <input
            type="number"
            min={0}
            defaultValue={rowInput2}
            className="border w-[60px] border-slate-700 rounded text-center"
          />
        </section>
        <section className="flex flex-col my-0.5">
          <div>colomn</div>
          <input
            type="number"
            min={0}
            defaultValue={colInput2}
            className="border w-[60px] border-slate-700 rounded text-center"
          />
        </section>
        <button type="submit" className="px-2 text-white bg-slate-700">
          save
        </button>
      </div>
    </form>
  );
  //pembuat wadah matrix dari value ordo input 2
  const row2 = rowInput2;
  const col2 = colInput2;
  const arrRow2 = [];
  const arrInput2 = [];

  for (let i = 0; i < col2; i++) {
    arrRow2.push(
      <input
        defaultValue={0}
        key={i}
        className="border border-black w-[50px] rounded-lg text-center text-xl font-semibold"
      />
    );
  }
  for (let i = 0; i < row2; i++) {
    arrInput2.push(
      <div key={i} className="flex px-1">
        {arrRow2}
      </div>
    );
  }
  //handle submit value matrix input 2
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
      arr2dInputResults2.push(inputResult2.splice(0, col2));
    setMatrixB(arr2dInputResults2);
  };

  //------------------------------------------------------------------------//
  //---------------------------REDUCTION FUNCTION---------------------------//
  //------------------------------------------------------------------------//
  const { results, subFuch } = useSubtraction();

  return (
    <MainPage
      settingInput1={settingInput1}
      handleSubmit1={handleSubmit1}
      arrInput1={arrInput1}
      settingInput2={settingInput2}
      handleSubmit2={handleSubmit2}
      arrInput2={arrInput2}
      fuchLogic={() => subFuch(matrixA, matrixB)}
      results={results}
    />
  );
};

export default MatrixReduction;
