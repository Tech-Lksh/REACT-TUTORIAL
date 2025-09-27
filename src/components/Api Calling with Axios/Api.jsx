import React from "react";

const Api = (props) => {
    
  return (
    <div className="p-10">
      <div className="bg-gray-50 text-black flex items-center w-full px-7 py-6 roun mb-2">
        <img className="rounded-full h-44 w-44" src={props.img} alt="" />
        <div className="ml-10">
            <h3 className="text-black font-bold"><span className="text-red-900 font-semibold">Id : </span> {props.id}</h3>
        <h1 className="text-black font-bold"><span className="text-red-900 font-semibold">Name : </span>  {props.name}</h1>
        </div>
      </div>
    </div>
  );
};

export default Api;
