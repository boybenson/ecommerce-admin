import { MutationCreateProductArgs, ProductCreateContent } from "@/gql/graphql";
import { CREATE_PRODUCT } from "@/graphql/mutations/mutations";
import { GET_PRODUCTS } from "@/graphql/queries/queries";
import { useMutation } from "@apollo/client";

const useCreateProduct = () => {
  const [execute, { loading }] = useMutation<MutationCreateProductArgs>(
    CREATE_PRODUCT,
    {
      refetchQueries: [GET_PRODUCTS],
    }
  );

  const handleCreateProduct = ({
    photo,
    variables,
  }: {
    photo: string;
    variables: ProductCreateContent;
  }) => {
    console.log("photo", photo);
    console.log("variables here", variables);
    execute({
      variables: {
        content: {
          ...variables,
          price: Number(variables.price),
          qtyInStock: Number(variables.qtyInStock),
          photo,
        },
      },
      onCompleted: () => {},
      onError: (error) => {},
    });
  };
  return {
    handleCreateProduct,
    loading,
  };
};

export default useCreateProduct;
