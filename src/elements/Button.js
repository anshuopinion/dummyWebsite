import { Button as B } from "@material-ui/core";
import styled from "styled-components";

export const Button = styled(B)`
  background-color: ${(props) => props.theme.color.main};
`;

