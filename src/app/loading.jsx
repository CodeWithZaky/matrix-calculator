"use client";
const loading = () => {
  return (
    <div className="flex flex-row justify-center items-center min-w-screen min-h-screen font-semibold text-5xl text-center">
      <p>Loading</p>
      <span className="loading loading-ball loading-md" />
      <span className="loading loading-ball loading-md" />
      <span className="loading loading-ball loading-md" />
    </div>
  );
};

export default loading;
