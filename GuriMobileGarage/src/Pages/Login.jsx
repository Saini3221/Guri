import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link} from "react-router-dom";
import axios from "axios";


function Login() {



  
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
// const navigate = useNavigate();
  function submit(e) {
    e.preventDefault();

    axios
      .post("http://localhost:8000/user/login", { username, password })
      .then((response) => {
        // setUser(true)
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
            onChange={(e) => {
              setUserName(e.target.value);
            }}
            className=" w-[30%] h-12 m-2"
            placeholder="Username"
          />

          <input
            type="password"
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
            Login
          </button>
          <Link
            to="/register"
            className="bg-black px-8 py-2 text-white flex justify-center items-center"
          >
            Register
          </Link>
        </div>
      </form>
      <Footer />
    </div>
  );
}

export default Login;
