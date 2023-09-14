"use client";
const loading = () => {
  return (
    <div className="flex flex-row items-center justify-center min-h-screen text-5xl font-semibold text-center min-w-screen">
      <p>Loading</p>
      <span className="loading loading-ball loading-md" />
      <span className="loading loading-ball loading-md" />
      <span className="loading loading-ball loading-md" />
    </div>
  );
};

export default loading;
