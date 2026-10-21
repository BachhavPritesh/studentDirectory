import Link from "next/link";


export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-6 text-center gap-2">
      <h1 className="text-3xl font-bold text-blue-500">
        About Us
      </h1>

      <p className="mt-4 max-w-md text-gray-600">
        Welcome to our Student Management App.
        This app helps you view students, explore departments,
        and learn more about student profiles.
      </p>

      <Link href="/" className=" w-40 h-10 flex justify-center items-center rounded-xl bg-blue-600/60 text-white " >Go to HomePage</Link>
    </div>
  );
}

