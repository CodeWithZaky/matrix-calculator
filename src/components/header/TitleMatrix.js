import React from "react";

const TitleMatrix = (props) => {
  return (
    <div className="hidden w-1/3 font-mono font-bold text-center sm:block sm:text-3xl md:text-4xl lg:text-5xl text-slate-100">
      {props.title}
    </div>
  );
};

export default TitleMatrix;
