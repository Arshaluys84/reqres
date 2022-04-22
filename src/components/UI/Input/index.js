import "./index.css";

export const Input = ({ type, id, name, placeholder, value, onChange }) => {
  return (
    <input
      className="input"
      type={type}
      id={id}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};
