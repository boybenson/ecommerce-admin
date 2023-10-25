"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import { PhotoIcon } from "@heroicons/react/24/solid";
import useUploadImages from "@/hooks/useUploadImages";

type Inputs = {
  name: string;
  price: number;
  description: string;
  images: any;
};

const NewProductForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();
  const { handleUploadImages, imageUrls, uploadStatus } = useUploadImages();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    handleUploadImages(data.images);

    if (uploadStatus === "done") {
      console.log("data ---> ", data);
      console.log("imageurls --->", imageUrls);
    }
    // console.log(data.images[0].name);
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
                Product Images
              </label>
              <div className="mt-1 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                <div className="text-center">
                  <PhotoIcon
                    className="mx-auto h-12 w-12 text-gray-300"
                    aria-hidden="true"
                  />
                  <div className="mt-4 flex text-sm leading-6 text-gray-600">
                    <label
                      htmlFor="images"
                      className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                    >
                      <span>Upload Images</span>
                      <input
                        id="images"
                        type="file"
                        multiple
                        className="sr-only"
                        {...register("images", { required: true })}
                      />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs leading-5 text-gray-600">
                    PNG, JPG, GIF up to 10MB
                  </p>
                </div>
              </div>
              {errors.images && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>
          </div>
        </div>

        <div className="mt-3 flex items-center justify-between gap-x-6">
          <button
            type="button"
            className="border border-main_pink text-main_pink w-full p-2 rounded-md"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-main_pink text-white w-full p-2 rounded-md"
          >
            Submit
          </button>
        </div>
      </div>
    </form>
  );
};

export default NewProductForm;
