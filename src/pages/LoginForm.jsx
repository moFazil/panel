import { Link, Outlet } from "react-router-dom";

const LoginForm = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="lg:w-[30%] md:w-[50%] sm:w-[70%] w-[90%] shadow-xl rounded-md text-center flex flex-col items-center justify-center p-10">
        <form className="w-full flex flex-col items-center">
          <p className="py-5 my-4 text-2xl font-bold">
            YOUR ACCOUNT FOR <br /> EVERYTHING
          </p>

          <input
            type="email"
            placeholder="Email Address"
            className="my-2 px-3 py-2 w-full rounded-md border-slate-300 border-[1px]"
          />
          <input
            type="password"
            placeholder="Password"
            className=" my-2 px-3 py-2 w-full rounded-md border-slate-300 border-[1px]"
          />

          <button
            type="submit"
            className="mb-5 mt-2 px-3 py-2 w-full font-semibold bg-black text-white rounded-md border-[2px] border-black"
          >
            SIGN IN
          </button>
{/* 
          <p className="font-normal text-sm text-gray-400 py-2">
            Not a Member?{" "}
            <Link to={"/joinus"}>
              <span className="underline decoration-1 text-black cursor-pointer">
                Join Us
              </span>
            </Link>
            .
          </p> */}
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
