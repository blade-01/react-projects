function Btn({ children, outerClass, type, disabled }) {
  return (
    <button type={type} disabled={disabled} className={`btn ${outerClass}`}>
      {children}
    </button>
  );
}

Btn.default = {
  type: "button",
  outerClass: "btn-primary"
};

export default Btn;
