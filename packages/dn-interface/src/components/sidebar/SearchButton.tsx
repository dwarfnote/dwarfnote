import styled, { css } from "styled-components";
import { Theme } from "../../theme";
import { SearchIcon } from "../icons";
import { SidebarItemIcon, SidebarItemLabel } from "./sidebar.styles";

const Container = styled.button(
  ({ theme }: { theme: Theme }) => css`
    padding: 0.375em 0.75em;
    border: 1px solid ${theme.colors.sidebar.primaryBorder};
    width: 100%;
    text-align: left;
    display: flex;
    align-items: center;
    gap: 0.5em;
    border-radius: 0.375rem;
    color: ${theme.colors.sidebar.secondaryText};
    margin: 1em 0;
    &:hover {
      color: ${theme.colors.sidebar.primaryText};
      background-color: ${theme.colors.sidebar.secondaryBackground};
    }
  `
);

const Kbd = styled.kbd(
  ({ theme }: { theme: Theme }) => css`
    font-size: 0.875em;
    border: 1px solid ${theme.colors.sidebar.secondaryBorder};
    padding: 0.125em 0.25em;
    border-radius: 0.25em;
    color: ${theme.colors.sidebar.secondaryText};
  `
);

const SearchButton = () => {
  return (
    <Container>
      <SidebarItemIcon>
        <SearchIcon />
      </SidebarItemIcon>
      <SidebarItemLabel>Search...</SidebarItemLabel>
      <Kbd>/</Kbd>
    </Container>
  );
};

export default SearchButton;
