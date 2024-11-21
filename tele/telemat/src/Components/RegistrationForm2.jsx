import React from "react";

const RegistrationForm2 = () => {
  return (
    <div
      className="mt-16 h-[60vh] w-[80vw] sm:h-[60vh] md:h-[70vh] lg:h-[110vh] xl:h-[140vh] bg-cover bg-center"
      style={{
        backgroundImage:
          'url("https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Truck_map_concept.png/800px-Truck_map_concept.png")',
        backgroundBlendMode: "darken",
        backgroundColor: "rgba(0, 0, 0, 0.6)",
      }}
    >
      <form
        className="w-full h-full max-w-4xl bg-opacity-50 p-5 rounded-md space-y-6 flex flex-col justify-between"
      >
        {/* Left Side Fields */}
        <div className="grid grid-cols- md:grid-cols-2 gap-10  ">
          <div>
            <label
              htmlFor="cdlNumber"
              className="block text-white text-lg font-semibold mb-2"
            >
              CDL Number*
            </label>
            <input
              type="text"
              id="cdlNumber"
              placeholder="Commercial Driver's License"
              className="w-full p-3 text-black rounded-md bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label
              htmlFor="mcNumber"
              className="block text-white text-lg font-semibold mb-2"
            >
              MC Number*
            </label>
            <input
              type="text"
              id="mcNumber"
              placeholder="Motor Carrier Number"
              className="w-full p-3 text-black rounded-md bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label
              htmlFor="gstNumber"
              className="block text-white text-lg font-semibold mb-2"
            >
              GST/TIN Number*
            </label>
            <input
              type="text"
              id="gstNumber"
              placeholder="Enter your GST/TIN Number here"
              className="w-full p-3 text-black rounded-md bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label
              htmlFor="panNumber"
              className="block text-white text-lg font-semibold mb-2"
            >
              PAN Number*
            </label>
            <input
              type="text"
              id="panNumber"
              placeholder="Enter your PAN Number here"
              className="w-full p-3 text-black rounded-md bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* File Upload Fields */}
          <div>
            <label
              className="block text-white text-lg font-semibold mb-2"
              htmlFor="vehicleCert"
            >
              Vehicle Registration Certificate*
            </label>
            <div className="border-2 border-dashed border-gray-300 p-14 rounded-lg text-center text-white">
              Drop here to attach or{" "}
              <span className="text-blue-500 cursor-pointer">upload</span>
              <p className="text-sm">Max size: 5GB</p>
            </div>
          </div>
          <div>
            <label
              className="block text-white text-lg font-semibold mb-2"
              htmlFor="insuranceCert"
            >
              Insurance Certificate*
            </label>
            <div className="border-2 border-dashed border-gray-300 p-14 rounded-lg text-center text-white">
              Drop here to attach or{" "}
              <span className="text-blue-500 cursor-pointer">upload</span>
              <p className="text-sm">Max size: 5GB</p>
            </div>
          </div>
          <div>
            <label
              className="block text-white text-lg font-semibold mb-2"
              htmlFor="panCard"
            >
              PAN Card*
            </label>
            <div className="border-2 border-dashed border-gray-300 p-14 rounded-lg text-center text-white">
              Drop here to attach or{" "}
              <span className="text-blue-500 cursor-pointer">upload</span>
              <p className="text-sm">Max size: 5GB</p>
            </div>
          </div>
          <div>
            <label
              className="block text-white text-lg font-semibold mb-2"
              htmlFor="transportLicense"
            >
              Transport Business License*
            </label>
            <div className="border-2 border-dashed border-gray-300 p-14 rounded-lg text-center text-white">
              Drop here to attach or{" "}
              <span className="text-blue-500 cursor-pointer">upload</span>
              <p className="text-sm">Max size: 5GB</p>
            </div>
          </div>
          <div>
            <label
              className="block text-white text-lg font-semibold mb-2"
              htmlFor="Cdl Document"
            >
              CDL Document*
            </label>
            <div className="border-2 border-dashed border-gray-300 p-14 rounded-lg text-center text-white">
              Drop here to attach or{" "}
              <span className="text-blue-500 cursor-pointer">upload</span>
              <p className="text-sm">Max size: 5GB</p>
            </div>
          </div>

          <div>
            <label
              className="block text-white text-lg font-semibold mb-2"
              htmlFor="mcdocument"
            >
              MC Document
            </label>
            <div className="border-2 border-dashed border-gray-300 p-14 rounded-lg text-center text-white">
              Drop here to attach or{" "}
              <span className="text-blue-500 cursor-pointer">upload</span>
              <p className="text-sm">Max size: 5GB</p>
            </div>
          </div>

        </div>

        {/* Submit Button */}
        <div className="text-center mt-6">
          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold text-lg py-3 rounded-md"
          >
            NEXT
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegistrationForm2;
