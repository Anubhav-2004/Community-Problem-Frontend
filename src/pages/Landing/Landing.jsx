import Navbar from "../../components/layout/Navbar";
import { FaMapMarkedAlt, FaCamera, FaCheckCircle } from "react-icons/fa";

export default function Landing() {
  return (
    <>
      <Navbar />

      {/* HERO */}
      <section className="min-h-screen bg-gray-50 pt-24 flex items-center">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">

          {/* LEFT */}
          <div>
            <h1 className="text-5xl font-semibold leading-tight mb-4">
              Report community issues easily
            </h1>

            <p className="text-gray-600 mb-6 max-w-lg">
              Raise local problems like damaged roads, water leakage,
              broken street lights and cleanliness concerns with proper location.
            </p>

            <div className="flex gap-4 mb-8">
              <a
                href="/report"
                className="bg-blue-600 text-white px-7 py-3 rounded hover:bg-blue-700 transition"
              >
                Raise Issue
              </a>

              <button className="border px-7 py-3 rounded hover:bg-gray-100 transition">
                Learn More
              </button>
            </div>

            <div className="flex gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <FaMapMarkedAlt className="text-blue-600" />
                Location based
              </div>
              <div className="flex items-center gap-2">
                <FaCamera className="text-blue-600" />
                Add photo proof
              </div>
              <div className="flex items-center gap-2">
                <FaCheckCircle className="text-blue-600" />
                Track status
              </div>
            </div>
          </div>

          {/* RIGHT — LIVE ISSUE PREVIEW */}
          <div className="space-y-4">

            <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
              <h4 className="font-medium">Broken street light</h4>
              <p className="text-sm text-gray-500">Sector 12 • Reported</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
              <h4 className="font-medium">Water leakage near road</h4>
              <p className="text-sm text-gray-500">Main Chowk • In progress</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
              <h4 className="font-medium">Garbage not collected</h4>
              <p className="text-sm text-gray-500">Block B • Resolved</p>
            </div>

          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-3xl font-semibold text-center mb-12">
            Why people use this platform
          </h2>

          <div className="grid md:grid-cols-3 gap-10">

            <div className="border rounded-xl p-8 hover:shadow-lg transition text-center">
              <FaCamera className="text-3xl text-blue-600 mx-auto mb-4" />
              <h3 className="font-medium mb-2">Easy reporting</h3>
              <p className="text-gray-600 text-sm">
                Upload issue with image and description.
              </p>
            </div>

            <div className="border rounded-xl p-8 hover:shadow-lg transition text-center">
              <FaMapMarkedAlt className="text-3xl text-blue-600 mx-auto mb-4" />
              <h3 className="font-medium mb-2">Accurate location</h3>
              <p className="text-gray-600 text-sm">
                Problems linked to exact area.
              </p>
            </div>

            <div className="border rounded-xl p-8 hover:shadow-lg transition text-center">
              <FaCheckCircle className="text-3xl text-blue-600 mx-auto mb-4" />
              <h3 className="font-medium mb-2">Status updates</h3>
              <p className="text-gray-600 text-sm">
                Track progress transparently.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-600 text-white text-center">
        <h2 className="text-3xl font-semibold mb-4">
          Start improving your community today
        </h2>

        <a
          href="/report"
          className="bg-white text-blue-600 px-8 py-3 rounded font-medium"
        >
          Create Issue
        </a>
      </section>
    </>
  );
}
