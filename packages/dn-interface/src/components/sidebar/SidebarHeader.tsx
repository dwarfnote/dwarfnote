import styled, { css } from "styled-components";
import { StyledProps } from "../../theme";
import { SettingsIcon } from "../icons";

const HeaderContainer = styled.header(
  ({ theme }: StyledProps) => css`
    height: 3em;
    background-color: ${theme.colors.sidebar.headerBackground};
    box-shadow: ${theme.colors.sidebar.headerShadow};
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 0 0.5em;
  `
);

const IconButton = styled.button(
  ({ theme }: StyledProps) => css`
    width: 2.5rem;
    height: 2.5rem;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0.375rem;
    color: ${theme.colors.sidebar.secondaryText};
    &:hover {
      color: ${theme.colors.sidebar.primaryText};
      background-color: ${theme.colors.sidebar.secondaryBackground};
    }
  `
);

const SidebarHeader = () => {
  return (
    <HeaderContainer>
      <IconButton>
        <SettingsIcon />
      </IconButton>
    </HeaderContainer>
  );
};

export default SidebarHeader;
