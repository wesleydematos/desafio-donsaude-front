import { Route, Routes } from "react-router-dom";
import { Login } from "./pages";

export default function RoutesMain() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
    </Routes>
  );
}
