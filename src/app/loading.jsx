"use client";
const loading = () => {
  return (
    <div className="min-w-screen flex min-h-screen flex-row items-center justify-center text-center text-5xl font-semibold">
      <p>Loading</p>
      <span className="loading loading-ball loading-md" />
      <span className="loading loading-ball loading-md" />
      <span className="loading loading-ball loading-md" />
    </div>
  );
};

export default loading;
