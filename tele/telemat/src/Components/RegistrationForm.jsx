import React from "react";

const RegisterForm = () => {
    return (
        <div
            className="mt-16 h-[60vh] w-[80vw] sm:h-[60vh] md:h-[70vh] lg:h-[110vh] xl:h-[110vh] bg-cover bg-center"
            style={{
                backgroundImage:
                    'url("https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Truck_map_concept.png/800px-Truck_map_concept.png")', // Replace with the background image URL
                backgroundBlendMode: "darken",
                backgroundColor: "rgba(0, 0, 0, 0.6)", // Slight dark overlay for better visibility of text
            }}
        >
            <form className="w-full max-w-md bg-transparent p-6 rounded-md space-y-8">
                {/* Name Input */}
                <div className="space-y-2">
                    <label
                        htmlFor="Name"
                        className="block text-white text-lg font-semibold mb-2 text-left"
                    >
                        Name
                    </label>
                    <input
                        type="text"
                        id="Name"
                        placeholder="Enter your Name here"
                        className="w-full p-3 text-black rounded-md bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                {/* Email Address Input */}
                <div className="space-y-2">
                    <label
                        htmlFor="Email Address"
                        className="block text-white text-lg font-semibold mb-2 text-left"
                    >
                        Email Address
                    </label>
                    <input
                        type="email"
                        id="Email Address"
                        placeholder="Enter your Email Address here"
                        className="w-full p-3 text-black rounded-md bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                {/* Phone No Input */}
                <div className="space-y-2">
                    <label
                        htmlFor="Phone No"
                        className="block text-white text-lg font-semibold mb-2 text-left"
                    >
                        Phone No
                    </label>
                    <input
                        type="text"
                        id="Phone No"
                        placeholder="Enter your Phone No here"
                        className="w-full p-3 text-black rounded-md bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                {/* Company Name Input */}
                <div className="space-y-2">
                    <label
                        htmlFor="companyName"
                        className="block text-white text-lg font-semibold mb-2 text-left"
                    >
                        Company Name
                    </label>
                    <input
                        type="text"
                        id="companyName"
                        placeholder="Enter your Company Name here"
                        className="w-full p-3 text-black rounded-md bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                {/* Create Password Input */}
                <div className="space-y-2">
                    <label
                        htmlFor="password"
                        className="block text-white text-lg font-semibold mb-2 text-left"
                    >
                        Create Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        placeholder="Enter your Password here"
                        className="w-full p-3 text-black rounded-md bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                {/* Confirm Password Input */}
                <div className="space-y-2">
                    <label
                        htmlFor="confirmPassword"
                        className="block text-white text-lg font-semibold mb-2 text-left"
                    >
                        Confirm Password
                    </label>
                    <input
                        type="password"
                        id="confirmPassword"
                        placeholder="Re-enter your Password"
                        className="w-full p-3 text-black rounded-md bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                {/* Submit Button */}
                <div className="flex justify-center mt-6">
                    <button
                        type="submit"
                        className="bg-orange-500 hover:bg-orange-600 text-white font-bold text-lg py-3 rounded-md w-full max-w-xs"
                    >
                        SUBMIT
                    </button>
                </div>
            </form>
        </div>
    );
};

export default RegisterForm;
