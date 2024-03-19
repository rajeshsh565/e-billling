const FormRow = ({ type, name, labelName, isRow = "true", disable}) => {
  return (
    <div className={`${isRow && `row`} mb-3`} style={{ height: "5rem" }}>
      <label htmlFor={name} className="text-black text-capitalize fs-5">
        {labelName || name}
      </label>
      <input
        type={type}
        name={name}
        id={name}
        className="rounded-5 border border-2 text-center"
        style={{
          backgroundColor: "rgba(204,176,176,0.25)",
        }}
        disabled={disable ?? false}
        required
      />
    </div>
  );
};
export default FormRow;
