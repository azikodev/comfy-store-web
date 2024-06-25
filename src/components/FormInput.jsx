import React from "react";
function FormInput({ label, type, defaultValue, name }) {
  return (
    <div className="form-control">
      <label className="label">
        <span className="label-text capitalize">{label}
        </span>
      </label>
      <input
        type={type}
        defaultValue={defaultValue}
        name={name}
        className="input input-bordered"
      />
    </div>
  );
}
export default FormInput;
