import { fb } from "@/firebase";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { useState } from "react";

const storage = getStorage(fb);

const metadata = {
  contentType: "image/jpeg",
};

const useUploadImages = () => {
  const [uploadStatus, setUploadStatus] = useState<string>("in_progress");
  const [imageUrls, setImageUrls] = useState<string[]>([]);
  const [progress, setProgress] = useState(0);

  const uploadImage = (file: File) => {
    const storageRef = ref(storage, "images/" + file.name);
    const uploadTask = uploadBytesResumable(storageRef, file, metadata);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        setProgress(progress);
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
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
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log("File available at", downloadURL);
          setImageUrls([...imageUrls, downloadURL]);
        });
      }
    );
  };

  const handleUploadImages = async (files: File[]) => {
    for (let i = 0; i < files.length; i++) {
      uploadImage(files[i]);
    }
    setUploadStatus("done");
  };

  return {
    imageUrls,
    progress,
    handleUploadImages,
    uploadStatus,
  };
};

export default useUploadImages;
