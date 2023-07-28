import React from "react";
import PropTypes from "prop-types";

const Buttons = ({ color, text, onClick }) => {
  return (
    <div>
      <button onClick={onClick} style={{ backgroundColor: color }} className="btn">
        {text}
      </button>
    </div>
  );
};

Buttons.defaultProps = {
  color: "steelblue",
};

Buttons.propTypes = {
  color: PropTypes.string,
  text: PropTypes.string,
};
export default Buttons;
