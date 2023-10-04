"use client";
import CardMatrix from "@/src/components/fragments/CardMatrix";
import ResultButton from "@/src/components/elements/ResultButton";
import ResultContainer from "@/src/components/fragments/ResultContainer";
import {
  useSettingOrdo,
  useCreateOrdo,
  useSetMatrix,
  useAddition,
} from "@/src/hooks/index";

const MatrixAddition = () => {
  // setting ordo
  const {
    row: row1,
    col: col1,
    handleSettingOrdo: handleSettingOrdo1,
  } = useSettingOrdo();
  const {
    row: row2,
    col: col2,
    handleSettingOrdo: handleSettingOrdo2,
  } = useSettingOrdo();

  // set matrix input element / ordo
  const ordoElements1 = useCreateOrdo(row1, col1);
  const ordoElements2 = useCreateOrdo(row2, col2);

  // set matrix
  const { matrix: matrixA, handleSetMatrix: handleSetMatrix1 } = useSetMatrix(
    row1,
    col1
  );
  const { matrix: matrixB, handleSetMatrix: handleSetMatrix2 } = useSetMatrix(
    row2,
    col2
  );

  // ADDITIONAL FUNCTION
  const { addResult, addFunc } = useAddition();

  return (
    <section className="flex flex-col items-center justify-center w-auto h-auto">
      <div className="flex flex-col w-full gap-3 sm:flex-row">
        <CardMatrix>
          <CardMatrix.Header>MATRIX A</CardMatrix.Header>
          <CardMatrix.SettingOrdo
            handleSettingOrdo={handleSettingOrdo1}
            row={row1}
            col={col1}
          />
          <CardMatrix.SetMatrix handleSetMatrix={handleSetMatrix1} title="A">
            {ordoElements1}
          </CardMatrix.SetMatrix>
        </CardMatrix>
        <CardMatrix>
          <CardMatrix.Header>MATRIX B</CardMatrix.Header>
          <CardMatrix.SettingOrdo
            handleSettingOrdo={handleSettingOrdo2}
            row={row2}
            col={col2}
          />
          <CardMatrix.SetMatrix handleSetMatrix={handleSetMatrix2} title="B">
            {ordoElements2}
          </CardMatrix.SetMatrix>
        </CardMatrix>
      </div>
      <ResultButton
        funcLogic={() => addFunc(matrixA, matrixB)}
        operationIdentity={"A + B"}
      />
      <ResultContainer operationIdentity={"A + B ="} results={addResult} />
    </section>
  );
};

export default MatrixAddition;
