const PreviewButton = ({ toggleFN }) => {
  return (
    <div
      onClick={() => toggleFN()}
      className="w-fit h-fit text-slate-500 border rounded-sm border-slate-400 px-2 hover:bg-slate-100 cursor-pointer"
    >
      {"> Preview"}
    </div>
  );
};

export default PreviewButton;
