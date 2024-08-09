import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

function SinglePhone() {
  let { id } = useParams();
  
  const [mobileData, setMobileData] = useState({});
  // console.log(id);
  let headers = {
    id: id,
  };
   
  const handelClick = ()=>{console.log(mobileData)}

  useEffect(() => {
    axios
      .get("http://localhost:8000/mobile/findSingle", { headers: headers })
      .then((response) => {
        // setLoading(false)
        setMobileData(response.data);
      })

      .catch((e) => {
        console.log(e);
      });
  }, []);

  // console.log(mobileData)

  return (
    <div className="h-screen flex flex-col justify-between">
      <Navbar />

      <div className="flex items-center justify-evenly gap-2 w-[100%] max-lg:flex-col">
        <img
          src={mobileData.thumbnail}
          alt=""
          className="w-[40%] max-lg:w-[65%]"
        />
        <div className="flex flex-col gap-2 justify-evenly w-[30%]">
          <div>
            <p className=" font-bold text-[6vh]">{mobileData.phoneName}</p>
            <p className=" font-bold text-[5vh]">₹{mobileData.price}</p>
          </div>
          <div className="flex items-center  justify-evenly gap-2 h-[100%]">
            <button className="w-[50%] bg-orange-500 h-[90%] py-2 text-white">
              Buy
            </button>
            <button onClick={handelClick} className="w-[50%] bg-yellow-400 py-2 h-[90%] text-white">
              Add to Cart
              
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default SinglePhone;
