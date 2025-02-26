import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import PageNotFound from "../PageNotFound";
import AppLayout from "../Applayouts/AppLayout";
import Home from "../../main/project/Home";
import AuthLayout from "../Applayouts/AuthLayout";
import Login from "../../auth/Login";
import Register from "../../auth/Register";
import FilterData from "../../main/admin/FilterData";
import AdminLayout from "../Applayouts/AdminLayout";
import SearchData from "../../main/admin/SearchData";
import FilterDataBySearchParams from "../../main/admin/filterData/FilterDataBySearchParams";
import QrCodeScanner from "../../main/admin/qrCodeScanner/QrCodeScanner";

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
        <Route element={<AdminLayout />}>
          <Route path="qrCodeScanner" element={<QrCodeScanner />} />
          <Route path="filterdata" element={<FilterData />} />
          <Route path="searchdata" element={<SearchData />} />
          <Route
            path="FilterDataBySearchParams"
            element={<FilterDataBySearchParams />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
