"use client";
import CardMatrix from "@/src/components/fragments/CardMatrix";
import ResultButton from "@/src/components/elements/ResultButton";
import ResultContainer from "@/src/components/fragments/ResultContainer";
import PreviewButton from "@/src/components/elements/PreviewButton";
import PreviewMode from "@/src/components/layouts/PreviewMode";

import {
  useSettingOrdo,
  useCreateOrdo,
  useSetMatrix,
  useSubtraction,
  useToggle,
} from "@/src/hooks/index";

const MatrixReduction = () => {
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
    col1,
  );
  const { matrix: matrixB, handleSetMatrix: handleSetMatrix2 } = useSetMatrix(
    row2,
    col2,
  );
  // REDUCTION FUNCTION
  const { subResult, subFunc } = useSubtraction();
  //TOGGLE
  const { Toggle: subToggle, toggled: subToggled } = useToggle();

  return (
    <div className="mx-auto flex flex-col gap-3 px-4 lg:flex-row">
      <section className="flex h-auto w-auto flex-col items-center justify-center ">
        <div className="flex w-full flex-col gap-3 sm:flex-row">
          <CardMatrix>
            <CardMatrix.Header>MATRIX A</CardMatrix.Header>
            <CardMatrix.SettingOrdo
              handleSettingOrdo={(e) =>
                handleSettingOrdo1(e, "Matrix A's dimensions have been created")
              }
              row={row1}
              col={col1}
              title={`Matrix A's dimensions have been created`}
            />
            <CardMatrix.SetMatrix
              handleSetMatrix={(e) => handleSetMatrix1(e, "Matrix A submitted")}
            >
              {ordoElements1}
            </CardMatrix.SetMatrix>
          </CardMatrix>
          <CardMatrix>
            <CardMatrix.Header>MATRIX B</CardMatrix.Header>
            <CardMatrix.SettingOrdo
              handleSettingOrdo={(e) =>
                handleSettingOrdo2(e, "Matrix B's dimensions have been created")
              }
              row={row2}
              col={col2}
              title={`Matrix B's dimensions have been created.`}
            />
            <CardMatrix.SetMatrix
              handleSetMatrix={(e) => handleSetMatrix2(e, "Matrix B submitted")}
            >
              {ordoElements2}
            </CardMatrix.SetMatrix>
          </CardMatrix>
        </div>
        <ResultButton funcLogic={() => subFunc(matrixA, matrixB)} />
        <ResultContainer operationIdentity={"A - B ="} results={subResult} />
      </section>
      {!subToggled && <PreviewButton toggleFN={subToggle} />}
      {subToggled && (
        <PreviewMode
          toggleFN={subToggle}
          matrixA={matrixA}
          matrixB={matrixB}
          result={subResult}
          identity="-"
        />
      )}
    </div>
  );
};

export default MatrixReduction;
