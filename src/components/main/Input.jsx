const Input = ({ key, defaultValue }) => {
  return (
    <input
      key={key}
      defaultValue={defaultValue}
      className="border border-black w-[50px] rounded-lg text-center text-xl font-semibold bg-slate-50"
    />
  );
};

export default Input;
