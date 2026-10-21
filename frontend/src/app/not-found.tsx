
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center p-6 text-center">
      <h1 className="text-7xl font-bold text-blue-500">404</h1>

      <h2 className="mt-4 text-2xl font-bold">
        Page Not Found
      </h2>

      <p className="mt-2 text-gray-500">
        Sorry, the page you are looking for does not exist.
      </p>

      <Link
        href="/"
        className="mt-6 rounded-lg bg-blue-500 px-6 py-3 text-white"
      >
        Back to Home
      </Link>
    </div>
  );
}
