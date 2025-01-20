import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import PageNotFound from "../PageNotFound";
import AppLayout from "../Applayouts/AppLayout";
import Home from "../../main/project/Home";
import AuthLayout from "../Applayouts/AuthLayout";
import Login from "../../auth/Login";
import Register from "../../auth/Register";

export default function Navigation() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<PageNotFound />} />

        <Route path="/" element={<AppLayout />}>
          <Route index element={<Navigate replace to="home" />} />
          <Route path="/home" element={<Home />} />
        </Route>
        <Route element={<AuthLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
