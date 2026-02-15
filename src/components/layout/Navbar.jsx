import { Link } from "react-router-dom";
import { FaBullhorn } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="fixed w-full top-0 z-50 bg-white border-b border-gray-200">
      <div className="flex justify-between items-center px-6 py-4">

        <div className="flex items-center gap-2 text-blue-600 font-bold text-xl">
          <FaBullhorn />
          CommunityCare
        </div>

        <div className="flex items-center gap-4">

          <Link
            to="/auth"
            className="text-gray-700 hover:text-blue-600 transition"
          >
            Login
          </Link>

          <Link
            to="/auth"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            Sign up
          </Link>

        </div>
      </div>
    </nav>
  );
}
