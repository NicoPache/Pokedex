import styled from "styled-components";

export const StyledButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  /* Estilo para el botón primario */
  ${({ variant }) =>
    variant === "primary" &&
    `
      background-color: #007bff;
      color: white;

      &:hover {
        background-color: #0056b3;
      }
    `}

  /* Estilo para el botón secundario */
  ${({ variant }) =>
    variant === "secondary" &&
    `
      background-color: #6c757d;
      color: white;

      &:hover {
        background-color: #5a6268;
      }
    `}
     ${({ disabled }) =>
    disabled &&
    `
      background-color: #d6d6d6;
      color: #a1a1a1;
      cursor: not-allowed;

      &:hover {
        background-color: #d6d6d6; /* Sin cambio al hover */
      }
    `}
`;
