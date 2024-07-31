const PreviewButton = ({ toggleFN }) => {
  return (
    <div
      onClick={() => toggleFN()}
      className="border-slate-400 hover:bg-slate-100 px-2 border rounded-sm w-fit h-fit text-slate-500 cursor-pointer"
    >
      {"> Preview"}
    </div>
  );
};

export default PreviewButton;
