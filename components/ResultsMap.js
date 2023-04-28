import React from 'react'

const ResultsAdd = (props) => {
  return (
    <div className="flex flex-col items-start">
    {props.results.map((m, n) => {
      return (
        <div key={n} className="flex">
          {m.map((x, y) => {
            return (
              <div
                key={y}
                className=" w-[50px] flex justify-center items-center border border-black rounded-lg text-xl font-semibold bg-white"
              >
                {x}
              </div>
            );
          })}
        </div>
      );
    })}
  </div>
  )
}

export default ResultsAdd