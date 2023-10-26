import { fb } from "@/firebase";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { useState } from "react";
import useCreateProduct from "./useCreateProduct";
import { ProductCreateContent } from "@/generated/graphql";

const storage = getStorage(fb);

const metadata = {
  contentType: "image/jpeg",
};

const useUploadImages = () => {
  const { handleCreateProduct, loading } = useCreateProduct();
  const [progress, setProgress] = useState(0);

  const uploadImage = ({
    file,
    payload,
  }: {
    file: any;
    payload: ProductCreateContent;
  }) => {
    const storageRef = ref(storage, "images/" + file[0].name);
    const uploadTask = uploadBytesResumable(storageRef, file[0], metadata);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgress(progress);
        switch (snapshot.state) {
          case "paused":
            break;
          case "running":
            break;
        }
      },
      (error) => {
        switch (error.code) {
          case "storage/unauthorized":
            break;
          case "storage/canceled":
            break;
          case "storage/unknown":
            break;
        }
      },
      async () => {
        const photo = await getDownloadURL(uploadTask.snapshot.ref);

        handleCreateProduct({ photo, variables: payload });
      }
    );
  };

  const handleUploadImages = async ({
    file,
    payload,
  }: {
    file: any;
    payload: ProductCreateContent;
  }) => {
    await uploadImage({ file, payload });
  };

  return {
    progress,
    handleUploadImages,
    loading,
  };
};

export default useUploadImages;
