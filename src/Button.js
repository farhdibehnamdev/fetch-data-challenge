export const Button = function (buttonText, reqType) {
  return (
    <div>
      <button className={buttonText === reqType ? "selected" : ""}>
        {buttonText}
      </button>
    </div>
  );
};
