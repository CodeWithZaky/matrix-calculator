const PreviewButton = ({ toggleFN }) => {
  return (
    <div
      onClick={() => toggleFN()}
      className="h-fit w-fit cursor-pointer rounded-sm border border-slate-400 px-2 text-slate-500 hover:bg-slate-100"
    >
      {"> Preview"}
    </div>
  );
};

export default PreviewButton;
