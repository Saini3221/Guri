import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom"; 

function AddPhone() {
  const [phoneName, setPhoneName] = useState("");
  const [price, setPrice] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [brand, setBrand] = useState("");
  const navigate = useNavigate();

  function submit(e) {
    e.preventDefault();
    axios
      .post("http://localhost:8000/mobile/createMobile", {
        phoneName,
        price,
        thumbnail,
        brand
      })
      .then((response) => {
        navigate("/dashboard");
        // console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }
  return (
    <div className="h-screen flex flex-col justify-between">
      <Navbar />
      <form>
        <div className="flex h-full flex-col justify-center items-center ">
          <input
            type="text"
            value={phoneName}
            className=" w-[30%] h-12 m-2"
            placeholder="Name"
            onChange={(e) => {
              setPhoneName(e.target.value);
            }}
          />
          <input
            type="text"
            placeholder="Price"
            value={price}
            className=" w-[30%] h-12 m-2"
            onChange={(e) => {
              setPrice(e.target.value);
            }}
          />
          <input
            type="text"
            placeholder="Thumbnail"
            value={thumbnail}
            className=" w-[30%] h-12 m-2"
            onChange={(e) => {
              setThumbnail(e.target.value);
            }}
          />
          <input
            type="text"
            placeholder="Brand"
            value={brand}
            className=" w-[30%] h-12 m-2"
            onChange={(e) => {
              setBrand(e.target.value);
            }}
          />
        </div>

        <div className="flex items-center justify-center">
          <button
            type="submit"
            onClick={submit}
            className="bg-black px-8 py-2 text-white flex justify-center items-center"
          >
            Add Phone
          </button>
        </div>
      </form>
      <Footer />
    </div>
  );
}

export default AddPhone;
