import "./index.css";

export function Backdrop({ onCancel }) {
  return <div className="backdrop" onClick={onCancel} />;
}
