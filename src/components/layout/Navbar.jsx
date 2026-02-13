import { Link } from "react-router-dom";
import { FaBullhorn } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="bg-white shadow px-6 py-4 flex justify-between items-center fixed w-full top-0 z-50">
      <div className="flex items-center gap-2 text-blue-600 font-bold text-xl">
        <FaBullhorn />
        CommunityCare
      </div>

      <Link
        to="/report"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Raise Issue
      </Link>
    </nav>
  );
}
