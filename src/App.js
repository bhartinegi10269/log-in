import React from "react";
function App() {
  return (
    <>
    <div class="flex justify-center mt-5">
      <div class="flex justify-between items-center bg-gray-200">
        <div class="bg-gray-100 p-5 flex shadow-lg max-w-4xl">
          <div class="md:w-1/2 px-5">
            <p1 class="text-2xl font-bold ">Welcome back!</p1>
            <p class="text-sm mt-2">
              Enter to get unlimited access to data & information.
            </p>
            <form class="mt-6">
              <div>
                <label class="block text-gray-700">
                  Email<span class="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  placeholder="Enter your mail address"
                  class="w-full px-4 py-3 rounded-lg mt-2 border border-gray-300"
                ></input>
                <label class="block text-gray-700 mt-3">
                  Password<span class="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  placeholder="Enter password"
                  class="w-full px-4 py-3 rounded-lg mt-2 border border-gray-300"
                ></input>
                <div class="flex justify-between mt-2 ">
                  <label>
                    <input type="checkbox"/> Remember me
                  </label>
                  <span class="psw text-blue-600 text-sm">
                    Forgot your password?
                  </span>
                </div>
                <button
                  type="submit"
                  class="w-full block bg-blue-600 text-white font-semibold rounded-lg px-3 py-3 mt-6"
                >
                  Log In
                </button>
                <div class="mt-4 grid grid-cols-3 items-center text-gray-500">
                  <hr class="border-gray-500" />
                  <p class="text-center text-sm mt-2">Or,Login with</p>
                  <hr class="border-gray-500" />
                </div>
                <button class="bg-white border border-gray-300 py-2 w-full rounded-lg mt-4 flex justify-center items-center text-sm ">
                  <span class="ml-4">Sign up with google</span>
                </button>
                <div class="text-sm flex justify-center items-center mt-5">
                  <p>
                    Don't have an account?{" "}
                    <a class="text-blue-500">Register here</a>
                  </p>
                </div>
              </div>
            </form>
          </div>
          <div></div>
          <div class="w-1/2 md:block hidden">
            <img src="https://images.pexels.com/photos/673857/pexels-photo-673857.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
          </div>
        </div>
      </div>
      </div>
    </>
  );
}
export default App;
