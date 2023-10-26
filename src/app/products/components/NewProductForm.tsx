"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import useUploadImages from "@/hooks/useUploadImages";
import { ProductCreateContent } from "@/gql/graphql";

const NewProductForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProductCreateContent>();

  const { handleUploadImages, loading } = useUploadImages();

  const onSubmit: SubmitHandler<ProductCreateContent> = async (data) => {
    await handleUploadImages({ file: data.photo, payload: data });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="space-y-12 px-4 sm:px-6">
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-2xl font-semibold mt-3 leading-2 text-gray-900">
            New Product
          </h2>
          <div className="mt-3">
            <div className="">
              <label className="block text-sm font-medium leading-6 text-gray-900">
                Product Name
              </label>
              <div className="mt-1">
                <div className="w-full rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    {...register("name", { required: true })}
                    className="block w-full flex-1 border-0 bg-transparent p-3 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  />
                </div>
                {errors.name && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>
            </div>

            <div className="mt-6">
              <label className="block text-sm font-medium leading-6 text-gray-900">
                Product Price (GH₵)
              </label>
              <div className="mt-1">
                <div className="w-full rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    {...register("price", { required: true })}
                    type="number"
                    inputMode="numeric"
                    className="block w-full flex-1 border-0 bg-transparent p-3 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  />
                </div>
                {errors.price && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>
            </div>

            <div className="mt-6">
              <label className="block text-sm font-medium leading-6 text-gray-900">
                Quantity In Stock
              </label>
              <div className="mt-1">
                <div className="w-full rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    {...register("qtyInStock", { required: true })}
                    type="number"
                    inputMode="numeric"
                    className="block w-full flex-1 border-0 bg-transparent p-3 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  />
                </div>
                {errors.qtyInStock && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>
            </div>

            <div className="mt-6">
              <label className="block text-sm font-medium leading-6 text-gray-900">
                Product Description
              </label>
              <div className="mt-1">
                <textarea
                  {...register("description", { required: true })}
                  rows={3}
                  className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  defaultValue={""}
                />
              </div>
              {errors.description && (
                <span className="text-red-500">This field is required</span>
              )}
              <p className="mt-1 text-sm leading-6 text-gray-600">
                Write a few sentences about the product.
              </p>
            </div>

            <div className="mt-10">
              <label
                htmlFor="cover-photo"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Product Image
              </label>
              <div className="mt-1">
                <div className="w-full rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    {...register("photo", { required: true })}
                    type="file"
                    className="block w-full flex-1 border-0 bg-transparent p-3 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  />
                </div>
                {errors.photo && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-3 flex items-center justify-between gap-x-6">
          <button
            disabled={loading}
            type="button"
            className="disabled:bg-gray-100 disabled:border-none disabled:cursor-wait border border-main_pink text-main_pink w-full p-2 rounded-md"
          >
            Cancel
          </button>
          <button
            disabled={loading}
            type="submit"
            className="disabled:bg-gray-100 disabled:border-none bg-main_pink text-white w-full p-2 rounded-md"
          >
            Submit
          </button>
        </div>
      </div>
    </form>
  );
};

export default NewProductForm;
