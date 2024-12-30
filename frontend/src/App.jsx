import { BrowserRouter, Routes, Route } from "react-router";
import SignUp from "./components/pages/SignUp";
import SignIn from "./components/pages/SignIn";
import Transfer from "./components/pages/Transfer";
import Dashboard from "./components/pages/Dashboard";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/transfer" element={<Transfer />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
