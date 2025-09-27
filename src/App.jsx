// import React, { useEffect, useState } from "react";
import Navbar from "./pages/React Router DOM/Navbar";
import Hooks from "./components/Hooks/Hooks";
import Cards from "./components/Props Or Props Drilling/Cards";
import TwoWayBinding from "./components/Two Way Binding/TwoWayBinding";
import FormHandling from "./components/Form Handling/FormHandling";
import Footer from "./components/Footer/Footer";
// import axios from "axios";
import Api from "./components/Api Calling with Axios/Api";
import { Route, Routes } from "react-router-dom";
import About from "./pages/React Router DOM/About";
import Home from "./pages/React Router DOM/Home";
import Contact from "./pages/React Router DOM/Contact";
import Product from "./pages/React Router DOM/Product";

const App = () => {
  // const [data, setData] = useState([]);
  // const getData = async () => {
  //   const response = await axios.get("https://picsum.photos/v2/list");

  //   setData(response.data);
  //   console.log(data);
  // };

  // useEffect(() => {
  //   getData()
  // }, [])
  

  // const users = [
  //   {
  //     name: "Rahul Sharma",
  //     city: "Bangalore",
  //     age: 24,
  //     profession: "Software Engineer",
  //     profilePhoto: "https://randomuser.me/api/portraits/men/11.jpg",
  //   },
  //   {
  //     name: "Ananya Verma",
  //     city: "Delhi",
  //     age: 22,
  //     profession: "UI/UX Designer",
  //     profilePhoto: "https://randomuser.me/api/portraits/women/21.jpg",
  //   },
  //   {
  //     name: "Arjun Patel",
  //     city: "Ahmedabad",
  //     age: 27,
  //     profession: "Data Scientist",
  //     profilePhoto: "https://randomuser.me/api/portraits/men/31.jpg",
  //   },
  //   {
  //     name: "Sneha Reddy",
  //     city: "Hyderabad",
  //     age: 23,
  //     profession: "Frontend Developer",
  //     profilePhoto: "https://randomuser.me/api/portraits/women/41.jpg",
  //   },
  //   {
  //     name: "Vikram Singh",
  //     city: "Mumbai",
  //     age: 29,
  //     profession: "Backend Developer",
  //     profilePhoto: "https://randomuser.me/api/portraits/men/51.jpg",
  //   },
  // ];

  return (
    <div className="p-10">
      <Navbar />

      <Routes >
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product" element={<Product />} />
        <Route path="/hooks" element={<Hooks />} />
        <Route path="/cards" element={<Cards />} />
        <Route path="/twowaybinding" element={<TwoWayBinding />} />
        <Route path="/foemhandling" element={<FormHandling />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/api" element={<Api />} />
      </Routes>

      {/* Api Calling with Axios */}
      {/* <div className="p-5 mt-5 bg-emerald-600 text-black">
        <button onClick={getData} className="text-white bg-blue-600 font-semibold py-3 px-9 rounded-full active:scale-90">
        Get Data
      </button>
        {data.map((props, index) => {
          return <Api key={index} name={props.author} img={props.download_url} id={props.id}/>;
        })}
      </div> */}

      {/* Promises */}
      {/* <div className="p-10">
        {users.map((props, index) => {
            return <Cards key={index} name={props.name} age={props.age} city={props.city} profession={props.profession} profilePhoto={props.profilePhoto}  />
        })}
      </div> */}
      {/* <Navbar /> */}
      {/* <Hooks /> */}
      {/* <FormHandling /> */}
      {/* <TwoWayBinding /> */}
      {/* <Footer /> */}
    </div>
  );
};

export default App;
