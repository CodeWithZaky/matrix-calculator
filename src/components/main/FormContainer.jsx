const FormContainer = ({ tittle, settingInput, handleSubmit, arrInput }) => {
  return (
    <section className="border border-blue-800 rounded bg-slate-200">
      <p className="text-3xl text-center text-white bg-blue-900">{tittle}</p>
      <div className="mb-4">{settingInput}</div>
      <form onSubmit={handleSubmit} className="flex-col">
        {arrInput}
        <button
          type="submit"
          className="w-full bg-slate-600 text-white active:bg-slate-400  px-3 py-0.5 mt-4"
        >
          submit
        </button>
      </form>
    </section>
  );
};

export default FormContainer;
