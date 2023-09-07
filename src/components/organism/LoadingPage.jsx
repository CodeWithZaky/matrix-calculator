const LoadingPage = () => {
  return (
    <section className="flex items-center justify-center w-auto h-auto">
      <div className="text-5xl font-semibold text-center">
        <p>loading</p>
        <span className="loading loading-ball loading-xs" />
        <span className="loading loading-ball loading-sm" />
        <span className="loading loading-ball loading-md" />
        <span className="loading loading-ball loading-lg" />
      </div>
    </section>
  );
};

export default LoadingPage;
