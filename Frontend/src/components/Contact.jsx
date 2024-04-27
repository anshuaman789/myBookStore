import React from "react";
import Navbar from "./Navbar";
import { useForm } from "react-hook-form";

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <>
      <div className=" md:py-6">
        <div>
          {" "}
          <Navbar />
        </div>
        <div className="flex h-screen justify-center items-center dark:bg-slate-700">
          <div className="modal-box  dark:bg-slate-900 dark:text-white dark:border">
            <form onSubmit={handleSubmit(onSubmit)} method="dialog">
              <h3 className="font-bold text-lg dark:text-white">Contact Us</h3>
              <div className="px-3 py-1 space-y-2">
                <span className="text-sm">Name</span>
                <br />
                <input
                  className="w-full px-3 py-1 outline-none border rounded-md dark:text-black"
                  type="text"
                  placeholder="Enter your fullname"
                  {...register("name", { required: true })}
                ></input>
                <br />
                {errors.name && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
              </div>
              <div className="px-3 py-1 space-y-2 ">
                <span className="text-sm">Email</span>
                <br />
                <input
                  className="w-full px-3 py-1 outline-none border rounded-md dark:text-black"
                  type="Email"
                  placeholder="Enter your email"
                  {...register("email", { required: true })}
                ></input>
                <br />
                {errors.email && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
              </div>
              <div className="px-3 pt-1 space-y-2 ">
                <span className="text-sm">Message</span>
                <br />
                <textarea
                  className=" w-full h-40 px-3 pt-1 outline-none border rounded-md dark:text-black"
                  type="text"
                  placeholder="Type your message"
                  {...register("message", { required: true })}
                ></textarea>
                <br />
                {errors.message && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
              </div>
              <div className="flex justify-around">
                <button className="bg-pink-500  py-1 px-2 text-white rounded-md hover:bg-pink-700 duration-300 dark:bg-slate-900 dark:border dard:text-white">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
