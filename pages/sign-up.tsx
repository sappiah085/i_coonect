import Form from "@/components/form/form";
import LayoutForAfterSplash from "@/components/layout/layout";
import Link from "next/link";
import signUp from "../public/assets/illustrations/signup.webp";
export default function SignUp() {
  return (
    <LayoutForAfterSplash
      on={false}
      label="Log In"
      link="/login"
      className="text-main_blue font-semibold"
    >
      <Form label="Sign Up" image={signUp}>
        <form
          className="flex-1 font-Glacial_Indifference max-w-md flex flex-col basis-72  items-center gap-4 form "
          action="/setup" //TODO:manually send data and route
        >
          <h1 className="text-deep_blue font-Montserrat text-4xl mb-10 font-extrabold hidden lg:flex ">
            Sign Up
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
              What’s your email ?
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
              Create a password
            </label>
          </div>

          <div className="flex relative flex-col w-full md:text-lg">
            <input
              className="border-b-[1.5px] peer pt-5 pb-2 focus-within:border-b-black outline-none rounded-none border-b-grey border-transparent "
              id="confirm_password"
              type="password"
              placeholder=" "
            />
            <label
              className="absolute transition-all duration-150 top-[50%] scale-90as translate-x-[-1%] left-0 translate-y-[-110%]  peer-placeholder-shown:translate-y-[-30%] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-x-0"
              htmlFor="confirm_password"
            >
              Confirm password
            </label>
          </div>
          <div className="flex relative flex-col w-full md:text-lg">
            <input
              className="border-b-[1.5px] peer pt-5 pb-2 focus-within:border-b-black outline-none rounded-none border-b-grey border-transparent focus-within:invalid:border-b-red"
              id="username"
              type="text"
              placeholder=" "
            />
            <label
              className="absolute transition-all duration-150 top-[50%] scale-90as translate-x-[-1%] left-0 translate-y-[-110%]  peer-placeholder-shown:translate-y-[-30%] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-x-0"
              htmlFor="username"
            >
              What shall we call you ?
            </label>
          </div>
          <div className="flex relative flex-col w-full md:text-lg">
            <input
              className="border-b-[1.5px] peer pt-5 pb-2 focus-within:border-b-black outline-none rounded-none border-b-grey border-transparent invalid:border-b-red"
              id="number"
              type="text"
              placeholder=" "
            />
            <label
              className="absolute transition-all duration-150 top-[50%] scale-90as translate-x-[-1%] left-0 translate-y-[-110%]  peer-placeholder-shown:translate-y-[-30%] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-x-0"
              htmlFor="number"
            >
              What is your phone number ?
            </label>
          </div>
          <div className="w-full flex flex-col">
            <label className="text-deep_grey" htmlFor="birthday">
              What’s your date of birth ?{" "}
            </label>
            <div className="flex items-center justify-between w-full">
              <div className="flex relative flex-col w-full md:text-lg">
                <input
                  className="border-b-[1.5px] peer pt-5 pb-2 focus-within:border-b-black outline-none rounded-none border-b-grey border-transparent invalid:!border-b-red"
                  id="month"
                  type="number"
                  max={12}
                  min={1}
                  placeholder=" "
                />
                <label
                  className="absolute transition-all duration-150 top-[50%] scale-90as translate-x-[-1%] left-0 translate-y-[-110%]  peer-placeholder-shown:translate-y-[-30%] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-x-0"
                  htmlFor="month"
                >
                  Month
                </label>
              </div>
              <div className="flex relative flex-col w-full md:text-lg">
                <input
                  className="border-b-[1.5px] peer pt-5 pb-2 focus-within:border-b-black outline-none rounded-none border-b-grey border-transparent invalid:!border-b-red"
                  id="day"
                  type="number"
                  max={31} //TODO:
                  min={1}
                  placeholder=" "
                />
                <label
                  className="absolute transition-all duration-150 top-[50%] scale-90as translate-x-[-1%] left-0 translate-y-[-110%]  peer-placeholder-shown:translate-y-[-30%] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-x-0"
                  htmlFor="day"
                >
                  Day
                </label>
              </div>
              <div className="flex relative flex-col w-full md:text-lg">
                <input
                  className="border-b-[1.5px] peer pt-5 pb-2 focus-within:border-b-black outline-none rounded-none border-b-grey border-transparent invalid:!border-b-red"
                  id="year"
                  type="number"
                  maxLength={4}
                  minLength={4}
                  placeholder=" "
                />
                <label
                  className="absolute transition-all duration-150 top-[50%] scale-90as translate-x-[-1%] left-0 translate-y-[-110%]  peer-placeholder-shown:translate-y-[-30%] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-x-0"
                  htmlFor="year"
                >
                  Year
                </label>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col">
            <label className="text-deep_grey" htmlFor="birthday">
              What’s your gender?
            </label>
            <div className="flex items-center gap-4  w-full">
              <div className="flex relative flex-col  md:text-lg">
                <input
                  className="hidden peer"
                  id="male"
                  type="radio"
                  name="gender"
                />
                <label
                  className="peer-checked:border-b-black  border-b-2 border-b-white"
                  htmlFor="male"
                >
                  Male
                </label>
              </div>
              <div className="flex relative flex-col md:text-lg">
                <input
                  className="hidden peer"
                  id="female"
                  type="radio"
                  name="gender"
                />
                <label
                  className="peer-checked:border-b-black  border-b-2 border-b-white"
                  htmlFor="female"
                >
                  Female
                </label>
              </div>
            </div>
          </div>
          <div className="w-full flex items-center flex-col gap-4 mt-6">
            <p className="text-center">
              By clicking on Sign up, you agree to Connects’s <br />
              <Link className="text-light_green" href={"/forgot"}>
                Terms and Conditions of Use
              </Link>
            </p>

            <p className="text-center">
              To learn more about how Connect’s, uses, shares and protects your
              personal data please read Connect’s
              <br />
              <Link className="text-light_green" href={"/forgot"}>
                Privacy Policy
              </Link>
            </p>
          </div>
          <button
            className="bg-light_green border-2 border-white mt-10 w-2/3 uppercase font-semibold text-white text-xl py-2 px-8 rounded-3xl hover:bg-white hover:text-light_green hover:border-light_green"
            type="submit"
          >
            Sign Up
          </button>
        </form>
      </Form>
    </LayoutForAfterSplash>
  );
}
