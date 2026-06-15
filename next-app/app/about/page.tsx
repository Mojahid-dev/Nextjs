import Link from "next/link";

export default function page() {
  return (
    <div className="p-10">
      <Link href="/" className="border-1 rounded-xl p-3 mt-2 bg-gray-900">
          Home
        </Link>
    </div>
  );
}