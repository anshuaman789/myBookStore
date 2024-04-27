import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div>
      <div className="flex h-screen justify-center items-center dark:bg-slate-700">
        <div className="modal-box dark:bg-slate-900 dark:text-white dark:border">
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <Link
              to="/"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 dark:bg-slate-900 dark:border-white"
            >
              ✕
            </Link>

            <h3 className="font-bold text-lg dark:text-white">Login</h3>
            <div className="px-3 py-2 space-y-2 ">
              <span>Email</span>
              <br />
              <input
                className="w-80 px-3 py-1 outline-none border rounded-md dark:text-black"
                type="Email"
                placeholder="Enter your email"
                {...register("email", { required: true })}
              />
              <br />
              {errors.email && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
            </div>
            <div className="px-3 py-6 space-y-2 ">
              <span>Password</span>
              <br />
              <input
                className="w-80 px-3 py-1 outline-none border rounded-md dark:text-black"
                type="Password"
                placeholder="Enter your password"
                {...register("password", { required: true })}
              />
              <br />
              {errors.password && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
            </div>
            <div className="flex justify-around">
              <button className="bg-pink-500  py-1 px-2 text-white rounded-md hover:bg-pink-700 duration-300">
                Login
              </button>
              <p>
                Not registered?
                <Link
                  to="/signup"
                  className="underline text-blue-500 cursor-pointer"
                >
                  signup
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
