import { Outlet } from "react-router-dom";
import NavigationBar from "./NavigationBar";
import Container from "./Container";

export default function Layout() {
  return (
    <>
      <NavigationBar />

      <Container>
        <Outlet />
      </Container>
    </>
  );
}
