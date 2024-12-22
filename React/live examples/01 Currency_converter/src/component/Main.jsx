import React from "react";

const Main = () => {
  return (
    <main className="bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <section className="text-center mb-12">
          <h1 className="text-4xl font-bold text-orange-700 mb-4">
            Welcome to MyBrand
          </h1>
          <p className="text-lg text-gray-600">
            Discover a world of professional services, beautiful designs, and
            endless possibilities.
          </p>
        </section>

        {/* Image Section */}
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12">
          <div>
            <img
              src="https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg"
              alt="Sample 1"
              className="w-full h-48 object-cover rounded-lg shadow-md"
            />
            <h2 className="text-xl font-semibold text-orange-700 mt-4">
              Professional Workspaces
            </h2>
            <p className="text-gray-600">
              Create and explore productive environments for your business.
            </p>
          </div>
          <div>
            <img
              src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg"
              alt="Sample 2"
              className="w-full h-48 object-cover rounded-lg shadow-md"
            />
            <h2 className="text-xl font-semibold text-orange-700 mt-4">
              Innovative Solutions
            </h2>
            <p className="text-gray-600">
              Cutting-edge ideas to transform your vision into reality.
            </p>
          </div>
          <div>
            <img
              src="https://images.pexels.com/photos/3184399/pexels-photo-3184399.jpeg"
              alt="Sample 3"
              className="w-full h-48 object-cover rounded-lg shadow-md"
            />
            <h2 className="text-xl font-semibold text-orange-700 mt-4">
              Empowering Creativity
            </h2>
            <p className="text-gray-600">
              Unleash your potential with designs that inspire.
            </p>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <h2 className="text-3xl font-bold text-orange-700 mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-gray-600 mb-6">
            Join us and take the first step toward success.
          </p>
          <button className="bg-orange-600 text-white py-2 px-6 rounded-lg shadow-md hover:bg-orange-700 transition duration-200">
            Contact Us
          </button>
        </section>
      </div>
    </main>
  );
};

export default Main;
