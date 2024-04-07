import Image from "next/image";
import logo from "../../../../public/logo.png";
import Link from "next/link";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { ClientFlashComponent } from "@/components/ClientFlash";

export default function Login() {
  async function loginFunction(formData: FormData) {
    "use server";

    cookies().delete("Authorization");

    const rawFormData = {
      email: formData.get("email"),
      password: formData.get("password"),
    };

    const response = await fetch("http://localhost:3000/api/login", {
      method: "POST",
      cache: "no-store",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(rawFormData),
    });

    if (!response.ok) {
      const errorMessage = await response.json();

      if (errorMessage.message) {
        redirect(`/login?error=${errorMessage.message}`);
      } else {
        redirect(`/login?error=${errorMessage.error}`);
      }
    }

    const responseJson = await response.json();

    cookies().set("Authorization", `Bearer ${responseJson.data.accessToken}`);

    return redirect("/");
  }
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
            <div className="my-5 px-32">
              <ClientFlashComponent />
            </div>
            <form
              action={loginFunction}
              className="w-full">
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
