import React from "react";

const TitleMatrix = (props) => {
  return (
    <div className="w-1/3 hidden sm:block sm:text-3xl md:text-4xl lg:text-5xl font-bold font-mono text-center text-slate-100">
      {props.title}
    </div>
  );
};

export default TitleMatrix;
