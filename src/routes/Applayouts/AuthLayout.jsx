import { Outlet } from "react-router";

export default function AuthLayout() {
  return (
    <div className="h-[100vh]  p-[50px]">
      <Outlet />
    </div>
  );
}
