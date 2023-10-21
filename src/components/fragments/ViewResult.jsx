const ViewResult = (props) => {
  return (
    <Layout>
      <div className="flex flex-col justify-center items-center border-black/50 p-1">
        {props.results.map((m, n) => (
          <div key={n} className="flex justify-center items-center">
            {m.map((x, y) => (
              <div
                key={y}
                className="w-auto min-w-[50px] flex justify-center items-center text-slate-900/50  border-black/10 rounded-md text-lg"
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
    <div className="border-y border-l border-slate-900/50 absolute left-0 w-[10%] h-full" />
    {children}
    <div className="border-y border-r border-slate-900/50 absolute right-0 w-[10%] h-full" />
  </div>
);
