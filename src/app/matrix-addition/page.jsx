"use client";
import MainPage from "@/src/components/main/MainPage";
import SettingInput from "@/src/components/main/SettingInput";
import {
  useSettingOrdo,
  useCreateOrdo,
  useMatrixForm,
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
  const arrInput1 = useCreateOrdo(row1, col1);
  const arrInput2 = useCreateOrdo(row2, col2);

  // set matrix
  const { matrix: matrixA, handleSubmit: handleSubmit1 } = useMatrixForm(
    row1,
    col1
  );
  const { matrix: matrixB, handleSubmit: handleSubmit2 } = useMatrixForm(
    row2,
    col2
  );

  // ADDITIONAL FUNCTION
  const { results, addFunc } = useAddition();

  return (
    <MainPage
      title="MATRIX ADDITION"
      settingInput1={
        <SettingInput
          handleSubmitOrdo={handleSettingOrdo1}
          rowInput={row1}
          colInput={col1}
        />
      }
      handleSubmit1={handleSubmit1}
      arrInput1={arrInput1}
      settingInput2={
        <SettingInput
          handleSubmitOrdo={handleSettingOrdo2}
          rowInput={row2}
          colInput={col2}
        />
      }
      handleSubmit2={handleSubmit2}
      arrInput2={arrInput2}
      funcLogic={() => addFunc(matrixA, matrixB)}
      results={results}
      operation={"A + B ="}
    />
  );
};

export default MatrixAddition;
