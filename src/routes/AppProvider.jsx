import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Navigation from "./navigations/Navigation";
import ReactQueryProvider from "./ReactQueryProvider";

export default function AppProvider() {
  return (
    <ReactQueryProvider>
      <Navigation />
      <ReactQueryDevtools />
    </ReactQueryProvider>
  );
}
