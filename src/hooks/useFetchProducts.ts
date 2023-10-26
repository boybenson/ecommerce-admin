import { Product } from "@/generated/graphql";
import { Query, QueryGetProductsArgs } from "@/gql/graphql";
import { GET_PRODUCTS } from "@/graphql/queries/queries";
import { useQuery } from "@apollo/client";

const useFetchProducts = () => {
  const { data, loading } = useQuery<Query, QueryGetProductsArgs>(
    GET_PRODUCTS,
    {
      fetchPolicy: "network-only",
    }
  );

  return {
    products: data?.getProducts ?? [],
    loading,
  };
};

export default useFetchProducts;
