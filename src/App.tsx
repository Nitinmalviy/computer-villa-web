import { Route, Routes } from "react-router";
import Landing from "./pages/landing";
import Signup from "./pages/auth/signup";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="*" element={<div>Not Found</div>} />
        <Route path="/auth/sing-up" element={<Signup />} />
      </Routes>
    </>
  );
}

export default App;
