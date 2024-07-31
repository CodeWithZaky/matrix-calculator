const ViewResult = (props) => {
  return (
    <Layout>
      <div className="flex flex-col justify-center items-center p-1 border-black/50">
        {props.results.map((m, n) => (
          <div key={n} className="flex justify-center items-center">
            {m.map((x, y) => (
              <div
                key={y}
                className="flex justify-center items-center border-black/10 rounded-md w-auto min-w-[50px] text-lg text-slate-900/50"
              >
                {x}
              </div>
            ))}
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default ViewResult;

const Layout = ({ children }) => (
  <div className="relative flex">
    <div className="left-0 absolute border-slate-900/50 border-y border-l w-[10%] h-full" />
    {children}
    <div className="right-0 absolute border-slate-900/50 border-y border-r w-[10%] h-full" />
  </div>
);
