"use client";
const loading = () => {
  return (
    <div className="flex items-center justify-center min-h-screen min-w-screen">
      <div className="text-5xl font-semibold text-center">
        loading <span className="loading loading-ball loading-xs" />
        <span className="loading loading-ball loading-sm" />
        <span className="loading loading-ball loading-md" />
        <span className="loading loading-ball loading-lg" />
      </div>
    </div>
  );
};

export default loading;
