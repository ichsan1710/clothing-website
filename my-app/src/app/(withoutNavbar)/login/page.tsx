import Image from "next/image";
import logo from "../../../../public/logo.png";
import Link from "next/link";

export default function Login() {
  return (
    <>
      <div className="flex mx-auto h-screen w-full">
        <div className="flex-1 w-full flex flex-col justify-center items-center">
          <Link href="/">
            <Image
              alt="logo"
              src={logo}
            />
          </Link>
        </div>
        <div className="flex-1 w-full">
          <div className="mx-12 flex flex-col justify-center items-center h-full">
            <h1 className="text-7xl font-bold text-center mb-8">Login</h1>
            <form className="w-full">
              <div className="relative mb-4">
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  className=" border-b border-black placeholder-gray-400 text-gray-800 py-6 w-full"
                />
              </div>
              <div className="relative mb-6">
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  className=" border-b border-black placeholder-gray-400 text-gray-800 py-6 w-full"
                />
              </div>
              <button
                type="submit"
                className="bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full">
                SIGN IN
              </button>
              <Link
                href="/register"
                className="flex flex-col justify-center items-center mt-4">
                CREATE ACCOUNT
              </Link>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
