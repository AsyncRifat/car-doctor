import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="text-center mt-20">
      <h2 className="text-2xl text-red-500 font-semibold">Not Found</h2>
      <p>Could not find requested resource</p>
      <div className="mt-5">
        <Link
          href="/"
          className="border py-1 px-3 hover:rounded-lg transition-all duration-700 hover:bg-gray-800"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}
