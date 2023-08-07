import Header from "@/src/components/header/Header";
import Footer from "@/src/components/footer/Footer";
import FormContainer from "./FormContainer";
import ResultContainer from "./ResultContainer";

const MainPage = ({
  settingInput1,
  handleSubmit1,
  arrInput1,
  settingInput2,
  handleSubmit2,
  arrInput2,
  funcLogic,
  results,
  operation,
}) => {
  return (
    <main className="flex flex-col items-center justify-between min-h-screen gap-3 min-w-screen">
      <Header title="MATRIX ADDITION" />
      <section className="flex flex-col items-center justify-center w-auto h-auto">
        <section className="flex flex-col w-full gap-3 mb-2 sm:flex-row">
          <FormContainer
            tittle={"MATRIX A"}
            settingInput={settingInput1}
            handleSubmit={handleSubmit1}
            arrInput={arrInput1}
          />
          <FormContainer
            tittle={"MATRIX B"}
            settingInput={settingInput2}
            handleSubmit={handleSubmit2}
            arrInput={arrInput2}
          />
        </section>
        <ResultContainer
          funcLogic={funcLogic}
          results={results}
          operation={operation}
        />
      </section>
      <Footer />
    </main>
  );
};

export default MainPage;
