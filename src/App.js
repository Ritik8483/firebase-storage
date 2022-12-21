import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import { getDownloadURL, listAll, ref, uploadBytes } from "firebase/storage";
import { storage } from "./firebaseConfig";

function App() {
  const [imageUpload, setImageUpload] = useState();
  const [imagesList, setImagesList] = useState([]);

  const uploadImage = () => {
    if (imageUpload === null) return;
    const imageRef = ref(storage, `images/${imageUpload.name}`);
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      // alert("Image Uploaded")          //second Step
      getDownloadURL(snapshot.ref).then((url) => {
        setImagesList((prev) => 
          [...prev, url]
        );
      });
    });
  };
  const imageListRef = ref(storage, "images/");

  useEffect(() => {
    //First Step
    listAll(imageListRef).then((response) => {
      console.log("response", response);
      response?.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setImagesList((prev) => [...prev, url]);
          console.log("url", url);
        });
      });
    });
  }, []);
  return (
    <div className="App">
      <input onChange={(e) => setImageUpload(e.target.files[0])} type="file" />
      <button onClick={uploadImage}>Upload Image</button>
      {imagesList?.map((image, index) => (
        <img key={index} src={image} height="40" width="40" />
      ))}
    </div>
  );
}

export default App;
