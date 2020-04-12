import styled from "styled-components";
import { color } from "../../constants/styled-theme";

export const Button = styled.button`
  cursor: pointer;
  opacity: ${(p) => (p.disabled ? 0.4 : 1)};
  pointer-events: ${(p) => (p.disabled ? "none" : "initial")};
  background: ${(p) => (p.background ? p.background : color("blue50"))};
  color: ${(p) => (p.color ? p.color : color("gray10"))};
  border: ${(p) => p.white && `solid ${color("gray75")} 1px`};
  padding: 10px 15px;
  border-radius: 3px;
  :hover {
    transition: 0.3s;
    opacity: 90%;
  }
`;
