import { useState } from "react";

const useResult = () => {
  const [results, setResults] = useState([
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ]);

  return [results, setResults];
};

export default useResult;
