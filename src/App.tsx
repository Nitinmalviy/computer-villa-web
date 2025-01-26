import { Routes, Route, Outlet } from "react-router";
import Layout from "./layout";
import Landing from "./pages/landing";
import CCTV from "./pages/products/cctv";
import Desktop from "./pages/products/desktop";
import Laptop from "./pages/products/laptop";
import Refurbished from "./pages/products/refurbished";
import Shop from "./pages/shop";
import Login from "./pages/auth/signup";
import AboutPage from "./pages/about";
import ContactPage from "./pages/contact";
import NotFound from "./NotFound";
import { UserProvider } from "./context/userProvider";

function App() {
  return (
    <UserProvider>
      {" "}
      {/* Wrap the entire Routes inside UserProvider */}
      <Routes>
        {/* Landing Page Route */}
        <Route
          path="/"
          element={
            <Layout>
              <Landing />
            </Layout>
          }
        />

        {/* Products Route */}
        <Route
          path="/products"
          element={
            <Layout>
              <Outlet />
            </Layout>
          }
        >
          <Route index element={<Laptop />} />
          <Route path="cctv" element={<CCTV />} />
          <Route path="desktop" element={<Desktop />} />
          <Route path="laptop" element={<Laptop />} />
          <Route path="refurbished" element={<Refurbished />} />
        </Route>

        {/* Shop Route */}
        <Route
          path="/shop"
          element={
            <Layout>
              <Shop />
            </Layout>
          }
        />

        {/* About Page Route */}
        <Route
          path="/about"
          element={
            <Layout>
              <AboutPage />
            </Layout>
          }
        />

        {/* Contact Page Route */}
        <Route
          path="/contact"
          element={
            <Layout>
              <ContactPage />
            </Layout>
          }
        />

        {/* Login Route */}
        <Route
          path="/auth/login"
          element={
            <Layout>
              <Login />
            </Layout>
          }
        />

        {/* Catch-all Route for Not Found */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </UserProvider>
  );
}

export default App;
