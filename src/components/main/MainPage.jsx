import React from "react";
import Header from "@/src/components/header/Header";
import OperationTitleResult from "@/src/components/main/OperationTitleResult";
import MappingResult from "@/src/components/main/MappingResult";
import Footer from "@/src/components/footer/Footer";
import CardMatrix from "./CardMatrix";

const MainPage = ({
  settingInput1,
  handleSubmit1,
  arrInput1,
  settingInput2,
  handleSubmit2,
  arrInput2,
  funcLogic,
  results,
}) => {
  return (
    <main className="flex flex-col items-center justify-between min-h-screen gap-3 min-w-screen">
      <Header title="MATRIX ADDITION" />
      <section className="flex flex-col items-center justify-center w-auto h-auto">
        <div className="flex flex-col w-full gap-3 sm:flex-row">
          <CardMatrix
            title={"MATRIX A"}
            settingInput={settingInput1}
            handleSubmit={handleSubmit1}
            arrInput={arrInput1}
          />
          <CardMatrix
            title={"MATRIX B"}
            settingInput={settingInput2}
            handleSubmit={handleSubmit2}
            arrInput={arrInput2}
          />
        </div>
        <div
          onClick={() => {
            funcLogic();
          }}
          className="bg-blue-900 px-4 py-0.5 rounded-md active:bg-slate-800 text-3xl text-white border border-blue-700 w-full text-center my-2"
        >
          RESULT
        </div>
        <div className="flex items-center justify-center w-full border border-blue-800 rounded bg-slate-200 ">
          {/* <div className="w-full px-5 text-center bg-blue-900/90">
            <button
              className="my-2 px-4 py-0.5 text-3xl text-white "
            >
              {"A + B"}
            </button>
          </div> */}
          <div className="flex items-center justify-center gap-5 px-1 my-3">
            <OperationTitleResult title="A + B =" />
            <MappingResult results={results} />
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default MainPage;
