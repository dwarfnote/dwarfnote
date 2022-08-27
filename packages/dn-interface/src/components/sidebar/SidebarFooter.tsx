import styled, { css } from "styled-components";
import { StyledProps } from "../../theme";

const FooterContainer = styled.header(
  ({ theme }: StyledProps) => css`
    height: 3em;
    background-color: ${theme.colors.sidebar.footerBackground};
    box-shadow: ${theme.colors.sidebar.footerShadow};
  `
);
const SidebarFooter = () => {
  return <FooterContainer></FooterContainer>;
};

export default SidebarFooter;
