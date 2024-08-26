import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import axios from "axios";
import { Link } from "react-router-dom";
import HashLoader from "react-spinners/HashLoader";
import Card from "../components/Card";

function UpdatePhone() {
  const [mobileData, setMobileData] = useState([]);
  const [loding, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:8000/mobile/")
      .then((response) => {
        setLoading(false);
        setMobileData(response.data);
        // console.log(setMobileData)
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  return (
    <div className="h-screen flex flex-col justify-between">
      {loding ? (
        <div className="flex items-center justify-center w-full h-full">
          <HashLoader color="#36d7b7" />
        </div>
      ) : (
        <div className="h-screen flex flex-col justify-between">
          <Navbar />

          <div className="flex flex-col w-[99%] ">
            {mobileData.map((mobile) => (
              <Link to={"/mobile/" + mobile._id}
              key={mobile._id}
              >
                <div>
                  img={mobile.thumbnail}
                  phoneName={mobile.phoneName}
                  brand={mobile.brand}
                  price={"₹" + mobile.price}
                  </div>
              </Link>
            ))}
          </div>

          <Footer />
        </div>
      )}
    </div>
  );
}

export default UpdatePhone;

// {iphone.map((iphone, index) => (

//   <Link to={'/mobile/'+iphone.id } key={iphone.id} className="flex justify-center m-5 shadow-xl">
//     <div className="flex flex-col items-center justify-center ">
//       <img src={iphone.img} alt="card image" className="w-72" />
//       <p>{iphone.name}</p>
//       <p>{iphone.price}</p>

//     </div>
//   </Link>

// ))}
