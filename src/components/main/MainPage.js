import React from "react";
import Header from "@/src/components/header/Header";
import OperationTitleResult from "@/src/components/main/OperationTitleResult";
import MappingResult from "@/src/features/MappingResult";
import Footer from "@/src/components/footer/Footer";

const MainPage = ({
  settingInput1,
  handleSubmit1,
  arrInput1,
  settingInput2,
  handleSubmit2,
  arrInput2,
  fuchLogic,
  results,
}) => {
  return (
    <main className="flex flex-col items-center justify-between min-h-screen gap-3 min-w-screen">
      <Header title="MATRIX ADDITION" />
      <section className="flex flex-col items-center justify-center w-auto h-auto">
        <div className="flex flex-col w-full gap-3 mb-2 sm:flex-row">
          <section className="border border-blue-800 rounded bg-slate-200">
            <p className="text-3xl text-center text-white bg-blue-900">
              MATRIX A
            </p>
            <div className="mb-4">{settingInput1}</div>
            <form onSubmit={handleSubmit1} className="flex-col">
              {arrInput1}
              <button
                type="submit"
                className="w-full px-3 bg-slate-600 text-white active:bg-slate-400 py-0.5 mt-4"
              >
                submit
              </button>
            </form>
          </section>
          <section className="border border-blue-800 rounded bg-slate-200">
            <p className="text-3xl text-center text-white bg-blue-900">
              MATRIX B
            </p>
            <div className="mb-4">{settingInput2}</div>
            <form onSubmit={handleSubmit2} className="flex-col">
              {arrInput2}
              <button
                type="submit"
                className="w-full bg-slate-600 text-white active:bg-slate-400  px-3 py-0.5 mt-4"
              >
                submit
              </button>
            </form>
          </section>
        </div>
        <div className="flex flex-col items-center justify-center w-full gap-3 border border-blue-800 rounded bg-slate-200 ">
          <div className="w-full px-5 text-center bg-blue-900/90">
            <button
              onClick={() => {
                fuchLogic();
              }}
              className="bg-slate-900 my-2 px-4 py-0.5 rounded-lg active:bg-slate-800 text-3xl text-white border border-slate-400"
            >
              RESULT
            </button>
          </div>
          <div className="flex items-center justify-center gap-5 px-1 mb-3">
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
