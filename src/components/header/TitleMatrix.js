import React from "react";

const TitleMatrix = (props) => {
  return (
    <div className="hidden w-1/3 font-bold text-center sm:block sm:text-2xl md:text-3xl lg:text-4xl text-slate-100">
      {props.title}
    </div>
  );
};

export default TitleMatrix;
