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
                className=" w-[100px] h-[100px] flex justify-center items-center border border-red-600 rounded-xl text-2xl font-bold text-red-600"
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