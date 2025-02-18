import { useQuery } from "@tanstack/react-query";
import { products } from "../utils/data/db";

export default function useGetProducts(CategoryId) {
  function getProducts() {
    if (!CategoryId) return [];

    const filterProductDependOnCategory = products?.filter((el, index) => {
      return el?.categoryId == CategoryId;
    });
    return filterProductDependOnCategory;
  }

  const { isLoading, error, data, isStale, refetch } = useQuery({
    queryKey: ["products", { CategoryId }],
    queryFn: getProducts,
    enabled: !!CategoryId, // Only run if CategoryId is truthy
    staleTime: 1000 * 5,
    // isStale
    // refetch
  });
  return { isLoading, error, data };
}
