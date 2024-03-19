const FormTextArea = ({ name, rows, cols, isNotRow }) => {
  return (
    <div className="row mb-5" style={{ height: "5rem" }}>
      <label htmlFor={name} className="text-black text-capitalize fs-5">
        {name}
      </label>
      <textarea
        rows={rows}
        cols={cols}
        name={name}
        id={name}
        required
        className="rounded-5 border border-2 text-center"
        style={{
          backgroundColor: "rgba(204,176,176,0.25)",
        }}
      />
    </div>
  );
};
export default FormTextArea;
