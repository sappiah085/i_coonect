import Form from "@/components/form/form";
import LayoutForAfterSplash from "@/components/layout/layout";
import Link from "next/link";
import login from "../public/assets/illustrations/login.webp";
export default function Login() {
  return (
    <LayoutForAfterSplash
      on={false}
      link="/sign-up"
      label="Sign Up ?"
      className="text-light_green font-semibold"
    >
      <Form label="Log In" image={login}>
        <form
          className="flex-1 font-Glacial_Indifference max-w-md flex flex-col items-center  basis-72 gap-4 form"
          action="/home"
        >
          <h1 className="text-deep_blue font-Montserrat text-4xl mb-10 font-extrabold hidden lg:flex ">
            Log In
          </h1>
          <div className="flex relative flex-col w-full md:text-lg">
            <input
              className="border-b-[1.5px] peer pt-5 pb-2 focus-within:border-b-black outline-none rounded-none border-b-grey border-transparent invalid:!border-b-red"
              id="email"
              type="email"
              placeholder=" "
            />
            <label
              className="absolute transition-all duration-150 top-[50%] scale-90as translate-x-[-1%] left-0 translate-y-[-110%]  peer-placeholder-shown:translate-y-[-30%] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-x-0"
              htmlFor="email"
            >
              Email or Username or Phone Number{" "}
            </label>
          </div>
          <div className="flex relative flex-col w-full md:text-lg">
            <input
              className="border-b-[1.5px] peer pt-5 pb-2 focus-within:border-b-black outline-none rounded-none border-b-grey border-transparent "
              id="password"
              type="password"
              placeholder=" "
            />
            <label
              className="absolute transition-all duration-150 top-[50%] scale-90as translate-x-[-1%] left-0 translate-y-[-110%]  peer-placeholder-shown:translate-y-[-30%] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-x-0"
              htmlFor="password"
            >
              Password{" "}
            </label>
          </div>

          <div className="w-full flex items-center justify-between">
            <Link className="text-main_blue" href={"/forgot"}>
              Forgot your password ?
            </Link>
            <div className="flex gap-2 items-center">
              <input type="checkbox" id="remember" />
              <label htmlFor="remember">Remember me</label>
            </div>
          </div>
          <button
            className="bg-main_blue border-2 border-white mt-10 w-2/3 uppercase font-semibold text-white text-xl py-2 px-8 rounded-3xl hover:bg-white hover:text-main_blue hover:border-main_blue"
            type="submit"
          >
            LOG IN
          </button>
        </form>
      </Form>
    </LayoutForAfterSplash>
  );
}
