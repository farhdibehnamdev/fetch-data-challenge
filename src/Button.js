export const Button = function ({ buttonText, reqType, setReqType }) {
  return (
    <button
      onClick={(e) => setReqType(buttonText)}
      type="button"
      className={buttonText === reqType ? "selected" : null}
    >
      {buttonText}
    </button>
  );
};
