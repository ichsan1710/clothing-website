import Image from "next/image";
import logo from "../../../../public/logo.png";
import Link from "next/link";
import { redirect } from "next/navigation";
import { ClientFlashComponent } from "@/components/ClientFlash";

export default function Register() {
  async function registerAction(formData: FormData) {
    "use server";

    const rawFormData = {
      name: formData.get("name"),
      username: formData.get("username"),
      email: formData.get("email"),
      password: formData.get("password"),
    };

    const response = await fetch(`http://localhost:3000/api/register`, {
      method: "post",
      cache: "no-store",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(rawFormData),
    });

    if (!response.ok) {
      const errorMessage = await response.json();
      redirect(`/register?error=${errorMessage.message}`);
    } else {
      redirect("/login");
    }
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
            <h1 className="text-7xl font-bold text-center mb-8">
              JOIN THE COMMUNITY
            </h1>
            <div className="my-5 px-32">
              <ClientFlashComponent />
            </div>
            <form
              action={registerAction}
              className="w-full">
              <div className="relative mb-4">
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  className=" border-b border-black placeholder-gray-400 text-gray-800 py-2 w-full"
                />
              </div>
              <div className="relative mb-4">
                <input
                  type="text"
                  placeholder="Username"
                  name="username"
                  className=" border-b border-black placeholder-gray-400 text-gray-800 py-2 w-full"
                />
              </div>
              <div className="relative mb-4">
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  className=" border-b border-black placeholder-gray-400 text-gray-800 py-2 w-full"
                />
              </div>
              <div className="relative mb-6">
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  className=" border-b border-black placeholder-gray-400 text-gray-800 py-2 w-full"
                />
              </div>
              <button
                type="submit"
                className="bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full">
                CREATE ACCOUNT
              </button>
              <Link
                href="/login"
                className="flex flex-col justify-center items-center mt-4">
                I HAVE AN ACCOUNT
              </Link>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
