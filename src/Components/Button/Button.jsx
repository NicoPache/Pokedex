import React, { Children } from "react";
import PropTypes from "prop-types";
import { StyledButton } from "./Button.styles";
const Button = ({ children, onClick, variant, disabled }) => {
  return (
    <StyledButton
      onClick={disabled ? null : onClick}
      disabled={disabled}
      variant={variant}
    >
      {children}
    </StyledButton>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  variant: PropTypes.oneOf(["primary", "secondary"]),
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  onClick: () => {},
  variant: "primary",
  disabled: false,
};

export default Button;
