const ViewResult = (props) => {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center border-black/50 p-1">
        {props.results.map((m, n) => (
          <div key={n} className="flex items-center justify-center">
            {m.map((x, y) => (
              <div
                key={y}
                className="flex w-auto min-w-[50px] items-center justify-center rounded-md  border-black/10 text-lg text-slate-900/50"
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
    <div className="absolute left-0 h-full w-[10%] border-y border-l border-slate-900/50" />
    {children}
    <div className="absolute right-0 h-full w-[10%] border-y border-r border-slate-900/50" />
  </div>
);
