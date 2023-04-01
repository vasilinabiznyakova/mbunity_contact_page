import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Container } from "./SharedLayout.styled";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";


export const SharedLayout = () => {
  return (
    <>
      <Container>
        <Header />
        <Suspense fallback={<div>Loading page...</div>}>
          <Outlet />
        </Suspense>
      </Container>
      <Footer />
    </>
  );
};
