import { Link, Outlet } from "react-router";
import { useLocation } from "react-router";

export default function AuthLayout() {
  const location = useLocation();
  const Login = location.pathname === "/login";

  return (
    <div className="h-screen flex items-center justify-center bg-[#212121]">
      <div className="relative p-10 w-full max-w-md">
        <div className="relative bg-[#2C2C2C] text-white border border-[#14FFEC] rounded-lg shadow-lg shadow-[#14FFEC]/20 p-7">
          <div className="text-center">
            <p className="mb-3 text-2xl font-semibold leading-5 text-[#14FFEC]">
              {Login ? "Login" : "Register"}
            </p>
          </div>

          <div className="mt-7 flex flex-col gap-3">
            <button className="flex items-center justify-center gap-2 w-full h-10 rounded-md bg-white text-black border border-[#0D7377] hover:border-[#14FFEC] transition">
              <img
                src="https://www.svgrepo.com/show/512317/github-142.svg"
                alt="GitHub logo"
                className="h-5 w-5"
              />
              Continue with GitHub
            </button>

            <button className="flex items-center justify-center gap-2 w-full h-10 rounded-md bg-white text-black border border-[#0D7377] hover:border-[#14FFEC] transition">
              <img
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                alt="Google logo"
                className="h-5 w-5"
              />
              Continue with Google
            </button>
          </div>

          <div className="flex items-center gap-2 py-6 text-sm text-[#E0E0E0]">
            <div className="h-px w-full bg-gray-600"></div> OR
            <div className="h-px w-full bg-gray-600"></div>
          </div>

          <form className="w-full">
            <label htmlFor="email" className="sr-only">
              Email address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="w-full rounded-md bg-[#212121] border border-[#0D7377] px-3 py-2 text-white focus:ring-2 focus:ring-[#14FFEC] focus:outline-none"
              placeholder="Email Address"
            />

            <label htmlFor="password" className="sr-only">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              className="mt-3 w-full rounded-md bg-[#212121] border border-[#0D7377] px-3 py-2 text-white focus:ring-2 focus:ring-[#14FFEC] focus:outline-none"
              placeholder="Password"
            />

            {Login && (
              <p className="mt-2 text-sm text-[#14FFEC] text-right">
                <a href="/forgot-password" className="hover:underline">
                  Forgot password?
                </a>
              </p>
            )}

            <button
              type="submit"
              className="mt-4 w-full bg-[#0D7377] text-[#212121] py-2 rounded-md font-semibold transition hover:bg-[#14FFEC] hover:text-black"
            >
              {Login ? "Continue" : "Register"}
            </button>
          </form>

          <div className="mt-6 text-center text-sm text-[#E0E0E0]">
            {Login ? "Don't have an account? " : "Already have an account? "}
            <Link to={Login ? "/register" : "/login"}>
              <span className="text-[#14FFEC] hover:underline">
                {Login ? "Sign up" : "Login"}
              </span>
            </Link>
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
}
