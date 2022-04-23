import "./index.css";

export const Button = ({ children, onClick, btn }) => {
  return (
    <button className={`button ${btn}`} onClick={onClick}>
      {children}
    </button>
  );
};
