import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Container, Loader } from "./SharedLayout.styled";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";

export const SharedLayout = () => {
  return (
    <>
      <Container>
        <Header />
        <Suspense fallback={<Loader>Loading page...</Loader>}>
          <Outlet />
        </Suspense>
      </Container>
      <Footer />
    </>
  );
};
