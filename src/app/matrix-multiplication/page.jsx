"use client";
import { useState } from "react";
import Swal from "sweetalert2";
import MainPage from "@/components/main/MainPage";
import SettingInput from "@/components/main/SettingInput";
import Input from "@/components/main/Input";
import useMultiplication from "@/hooks/useMultiplication";

const MatrixMultiplication = () => {
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

  const [row1, setRow1] = useState(3);
  const [col1, setCol1] = useState(3);
  const [row2, setRow2] = useState(3);
  const [col2, setCol2] = useState(3);

  //==========================================================================//
  //=================================MATRIX A=================================//
  //==========================================================================//

  //handle submit value setting ordo form input 1
  const handleSubmitOrdo1 = (e) => {
    e.preventDefault();
    for (let i = 0; i < 2; i++) {
      if (e.target[i].value === "") {
        Swal.fire({
          icon: "error",
          title: "input cannot be empty!",
        });
        return;
      }
      if (e.target[i].value < 1) {
        Swal.fire({
          icon: "error",
          title: "Entries must be filled in, at least 1",
        });
        return;
      }
      if (isNaN(e.target[i].value)) {
        Swal.fire({
          icon: "error",
          title: "input must be a number",
        });
        return;
      }
    }
    setRow1(e.target[0].value);
    setCol1(e.target[1].value);
  };
  //setting ordo input form 1
  const settingInput1 = (
    <SettingInput
      handleSubmitOrdo={handleSubmitOrdo1}
      rowInput={row1}
      colInput={col1}
    />
  );
  //pembuat wadah matrix dari value ordo input 1
  const arrRow1 = [];
  for (let i = 0; i < col1; i++) {
    arrRow1.push(<Input key={i} defaultValue={0} />);
  }

  const arrInput1 = [];
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
        Swal.fire({
          icon: "error",
          title: "input cannot be empty!",
        });
        return;
      }
      if (isNaN(e.target[i].value)) {
        Swal.fire({
          icon: "error",
          title: "input must be a number",
        });
        return;
      }
      inputResult1.push(e.target[i].value);
    }
    const arr2DInputResults1 = [];
    while (inputResult1.length)
      arr2DInputResults1.push(inputResult1.splice(0, col1));
    setMatrixA(arr2DInputResults1);
  };

  //==========================================================================//
  //=================================MATRIX B=================================//
  //==========================================================================//

  //handle submit value setting ordo form input 2
  const handleSubmitOrdo2 = (e) => {
    e.preventDefault();
    for (let i = 0; i < 2; i++) {
      if (e.target[i].value === "") {
        Swal.fire({
          icon: "error",
          title: "input cannot be empty!",
        });
        return;
      }
      if (e.target[i].value < 1) {
        Swal.fire({
          icon: "error",
          title: "Entries must be filled in, at least 1",
        });
        return;
      }
      if (isNaN(e.target[i].value)) {
        Swal.fire({
          icon: "error",
          title: "input must be a number",
        });
        return;
      }
    }
    setRow2(e.target[0].value);
    setCol2(e.target[1].value);
  };
  //setting ordo input form 2
  const settingInput2 = (
    <SettingInput
      handleSubmitOrdo={handleSubmitOrdo2}
      rowInput={row2}
      colInput={col2}
    />
  );
  //pembuat wadah matrix dari value ordo input 2
  const arrRow2 = [];
  for (let i = 0; i < col2; i++) {
    arrRow2.push(<Input defaultValue={0} key={i} />);
  }

  const arrInput2 = [];
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
        Swal.fire({
          icon: "error",
          title: "input cannot be empty!",
        });
        return;
      }
      if (isNaN(e.target[i].value)) {
        Swal.fire({
          icon: "error",
          title: "input must be a number",
        });
        return;
      }
      inputResult2.push(e.target[i].value);
    }
    const arr2DInputResults2 = [];
    while (inputResult2.length)
      arr2DInputResults2.push(inputResult2.splice(0, col2));
    setMatrixB(arr2DInputResults2);
  };

  // MULTIPLICATION FUNCTION
  const { results, mulFunc } = useMultiplication();

  return (
    <MainPage
      title="MATRIX MULTIPLICATION"
      settingInput1={settingInput1}
      handleSubmit1={handleSubmit1}
      arrInput1={arrInput1}
      settingInput2={settingInput2}
      handleSubmit2={handleSubmit2}
      arrInput2={arrInput2}
      funcLogic={() => mulFunc(matrixA, matrixB)}
      results={results}
      operation={"A x B ="}
    />
  );
};

export default MatrixMultiplication;
