import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
      let email = sessionStorage.getItem("email");
      if (!email || email === "") {
      navigate("/login");
    }
  }, []);
  let email = sessionStorage.getItem("email");
  return (
    <>
    <nav className="d-flex bg-gray-400 p-4 px-28">
      <Link to='/login'>  <button className="p-2 justify-end bg-red-600 rounded-xl ">Logout</button> </Link> 
    </nav>
 <h1 className="text-2xl text-center m-5">Welcome {email}</h1>
    </>
   
  );
};

export default Home;
