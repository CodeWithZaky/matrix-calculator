import { useState } from "react";

const useToggle = () => {
  const [toggled, setToggled] = useState(false);

  const Toggle = () => setToggled((value) => !value);

  return { toggled, Toggle };
};

export default useToggle;
