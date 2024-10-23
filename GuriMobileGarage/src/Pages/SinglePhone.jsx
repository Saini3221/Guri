import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useParams } from "react-router-dom";
import axios from "axios";

function SinglePhone() {
  let { id } = useParams();

  const [mobileData, setMobileData] = useState({});
  // const [quantity, setQuantity] = useState(1); // Initialize quantity to 1
  
  let headers = {
    id: id,
  };

  const handleClick = () => {
    console.log({ ...mobileData});
  };

  useEffect(() => {
    axios
      .get("http://localhost:8000/mobile/findSingle", { headers: headers })
      .then((response) => {
        setMobileData(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [id]);

  // const increaseQuantity = () => {
  //   setQuantity(quantity + 1);
  // };

  // const decreaseQuantity = () => {
  //   if (quantity > 1) {
  //     setQuantity(quantity - 1);
  //   }
  // };

  return (
    <div className="h-screen flex flex-col justify-between">
      <Navbar />

      <div className="flex items-center justify-evenly gap-2 w-[100%] max-[550px]:flex-col text-white">
        <div className="w-[40%] max-[550px]:w-[92%]  h-[100%] p-[5vh] flex justify-center items-center bg-white">
          <img
            src={mobileData.thumbnail}
            alt=""
            className="w-[32vh] max-[500px]:w-[35%]"
          />
        </div>
        <div className="flex w-[50%] max-[550px]:w-[92%] ">
          <div className="flex flex-col gap-2 justify-evenly">
            <div>
              <p className=" font-bold text-[6vh]">{mobileData.phoneName}</p>
              <p className=" font-bold text-3xl text-green-500">₹{mobileData.price}</p>
            </div>

            {/* <div className="flex items-center gap-4">
              <button
                onClick={decreaseQuantity}
                className="bg-red-500 text-white px-3 py-2"
              >
                -
              </button>
              <p className="text-2xl">{quantity}</p>
              <button
                onClick={increaseQuantity}
                className="bg-green-500 text-white px-3 py-2"
              >
                +
              </button>
            </div> */}

            <div className="flex justify-start items-center gap-[2vh] rounded-md w-[100%] px-[2vh]">
              <button className="bg-orange-500 w-[50%] py-[2vh] px-[2vh] text-white">
                Buy
              </button>
              <button
                onClick={handleClick}
                className="bg-yellow-400 py-[2vh] px-[2vh] w-[50%] text-white"
              >
                Add to Cart
              </button>
            </div>
            
            <div className="flex justify-start text-white w-[fit] ">
              <p>
                <span className="font-bold text-[4vh]">Description:- </span> 
                <span>{mobileData.description}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default SinglePhone;
