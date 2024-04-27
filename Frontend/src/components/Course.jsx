import React from "react";
import list from "../../public/list.json";
import Cards from "./Cards";
import { Link } from "react-router-dom";

function Course() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 dark:bg-slate-900 dark:text-white">
        <div className=" pt-28 items-center justify-center text-center dark:bg-slate-900">
          <h1 className=" text-2xl md:text-4xl ">
            {" "}
            We're delighted to have you{" "}
            <span className="text-pink-500">Here !!! :)</span>
          </h1>
          <p className="mt-12">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero
            cumque incidunt reprehenderit doloribus deleniti consequatur
            doloremque, quam laudantium vitae minima odio cupiditate sapiente
            sed cum odit ut tenetur tempore fugiat.
          </p>
          <Link to="/">
            <button className="bg-pink-500 mt-8 py-2 px-4 text-white rounded-md hover:bg-pink-700 duration-300">
              Back
            </button>
          </Link>
        </div>
        <div className="mt-6 md:mt-12 grid grid-cols-1 md:grid-cols-3">
          {list.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Course;
