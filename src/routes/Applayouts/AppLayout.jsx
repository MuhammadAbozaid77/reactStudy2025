import { Outlet } from "react-router";

export default function AppLayout() {
  return (
    <div className="p-[50px]">
      <Outlet />
    </div>
  );
}
