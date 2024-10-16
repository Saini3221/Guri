import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Register() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  function submit(e) {
    e.preventDefault();

    axios
      .post("http://localhost:8000/user/createuser", {
        username,
        password,
        email,
      })
      .then((response) => {
        navigate("/login")
        console.log(response.data);
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
            value={username}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
            className=" w-[30%] h-12 m-2"
            placeholder="Username"
          />
          <input
            type="text"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className=" w-[30%] h-12 m-2"
            placeholder="Email."
          />

          <input
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            className=" w-[30%] h-12 m-2"
            placeholder="Password"
          />
        </div>
        <div className="flex justify-center items-center gap-2">
          <button
            type="submit"
            onClick={submit}
            className="bg-black px-8 py-2 text-white flex justify-center items-center"
          >
            Register
          </button>
          <Link
            to="/login"
            className="bg-black px-8 py-2 text-white flex justify-center items-center"
          >
            Login
          </Link>
        </div>
      </form>
      <Footer />
    </div>
  );
}

export default Register;
