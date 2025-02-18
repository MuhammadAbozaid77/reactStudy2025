import { useQuery } from "@tanstack/react-query";

export default function useGetData() {
  const ddd = [{ name: "vvv" }];
  async function getData() {
    return ddd;
  }

  const { error, isLoading, data } = useQuery({
    queryKey: ["useGetData"],
    queryFn: getData,
    staleTime: 1000 * 10,
  });
  return { error, isLoading, data };
}
