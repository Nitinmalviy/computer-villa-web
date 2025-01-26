import React from "react";
import { useLocation } from "react-router";
import { Navbar } from "../components/ui/Navbar";
import { Footer } from "../components/ui/footer";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();

  // Define routes where Navbar and Footer should not appear
  const noLayoutRoutes = ["/auth/signup", "/auth/login"];

  // Check if the current route matches any of the noLayoutRoutes
  const shouldShowLayout = !noLayoutRoutes.some((route) =>
    location.pathname.startsWith(route)
  );

  return (
    <>
      {shouldShowLayout && <Navbar />}
      <main>{children}</main>
      {shouldShowLayout && <Footer />}
    </>
  );
};

export default Layout;
