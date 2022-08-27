import { Outlet } from "@tanstack/react-location";
import styled, { createGlobalStyle, css } from "styled-components";
import Sidebar from "./components/sidebar/Sidebar";
import { StyledProps } from "./theme";

const Container = styled.div(
  ({ theme }: StyledProps) => css`
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    display: flex;
    background-color: ${theme.colors.app.background};
    color: ${theme.colors.app.color};
  `
);

const AppLayout = () => {
  return (
    <Container>
      <Sidebar />
      <Outlet />
    </Container>
  );
};

export default AppLayout;
