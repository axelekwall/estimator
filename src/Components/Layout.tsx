import { Outlet } from "react-router-dom";
import { globalStyles, styled } from "../stitches";

const LayoutWrapper = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "100vw",
});

const Layout = () => {
  globalStyles();
  return (
    <LayoutWrapper>
      <Outlet></Outlet>
    </LayoutWrapper>
  );
};

export default Layout;
