import { Link } from "@tanstack/react-location";
import styled, { css } from "styled-components";
import { StyledProps } from "../../theme";

export const SidebarWrapper = styled.aside(
  ({ theme }: StyledProps) => css`
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    background-color: ${theme.colors.sidebar.primaryBackground};
  `
);

export const SidebarBody = styled.div`
  flex: 1;
  overflow-y: auto;
  width: 100%;
  height: 100%;
  padding: 0 0.5rem;
`;

export const SidebarSection = styled.section`
  margin: 1em 0;
`;

export const SidebarSectionHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25em;
  padding: 0.25em 0;
`;

export const SidebarSectionHeaderTitle = styled.p`
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  text-transform: uppercase;
  color: ${({ theme }: StyledProps) => theme.colors.sidebar.secondaryText};
  padding-left: 0.875em;
`;

export const SidebarSectionHeaderButton = styled.button(
  ({ theme }: StyledProps) => css`
    font-size: 1.5em;
    line-height: 1em;
    width: 1.75rem;
    height: 1.75rem;
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

export const SidebarList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1px;
`;

export const SidebarItemLink = styled(Link)(
  ({ theme }: StyledProps) => css`
    display: flex;
    align-items: center;
    gap: 0.5em;
    padding: 0.375em 0.75em;
    border-radius: 0.375em;
    color: ${theme.colors.sidebar.primaryText};
    &:hover {
      background-color: ${theme.colors.sidebar.secondaryBackground};
    }
    &.active {
      background-color: ${theme.colors.sidebar.activeBackground};
      color: ${theme.colors.sidebar.activeText};
    }
  `
);

export const SidebarItemLabel = styled.p`
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const SidebarItemIcon = styled.p`
  font-size: 1.5em;
  width: 1.5rem;
  height: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 1em;
`;

export const SidebarItemBadge = styled.p`
  font-size: 0.875em;
  opacity: 0.75;
`;
