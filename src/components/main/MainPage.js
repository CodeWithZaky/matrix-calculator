import React from "react";
import Header from "@/src/components/header/Header";
import OperationTitleResult from "@/src/components/main/OperationTitleResult";
import MappingResult from "@/src/components/main/MappingResult";
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
    <main className="flex flex-col justify-between items-center min-w-screen min-h-screen gap-3 ">
      <Header title="MATRIX ADDITION" />
      <section className="w-auto h-auto flex flex-col justify-center items-center">
        <div className="flex w-full flex-col sm:flex-row gap-3 mb-2">
          <section className="border border-blue-800 bg-slate-200 rounded">
            <p className="text-3xl bg-blue-900 text-white text-center">
              MATRIX A
            </p>
            <div className="mb-4">{settingInput1}</div>
            <form onSubmit={handleSubmit1} className="flex-col">
              {arrInput1}
              <button
                type="submit"
                className="w-full bg-slate-600 text-white active:bg-slate-400 px-3 py-0.5 mt-4"
              >
                submit
              </button>
            </form>
          </section>
          <section className="border border-blue-800 bg-slate-200 rounded">
            <p className="text-3xl bg-blue-900 text-white text-center">
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
        <div className="w-full flex flex-col justify-center items-center bg-slate-200 border border-blue-800 gap-3 rounded">
          <div className="w-full px-5 bg-blue-900/90 text-center">
            <button
              onClick={() => {
                fuchLogic();
              }}
              className="bg-slate-900 my-2 px-4 py-0.5 rounded-lg active:bg-slate-800 text-3xl text-white border border-slate-400"
            >
              RESULT
            </button>
          </div>
          <div className="flex justify-center items-center gap-5 mb-3 px-1">
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
