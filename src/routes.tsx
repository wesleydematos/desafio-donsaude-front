import { Route, Routes } from "react-router-dom";
import {
  Colaborators,
  EditColaborator,
  Login,
  NewColaborator,
  NotFound,
} from "./pages";
import { AuthRoutes } from "./pages/AuthRoutes";

export default function RoutesMain() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route element={<AuthRoutes />}>
        <Route element={<Colaborators />} path="/colaborators" />
        <Route element={<NewColaborator />} path="/colaborators/new" />
        <Route element={<EditColaborator />} path="/colaborators/edit/:uuid" />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
