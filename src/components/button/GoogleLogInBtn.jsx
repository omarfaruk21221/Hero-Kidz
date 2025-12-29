import React from "react";

export default function GoogleLogInBtn() {
  const handleGoogle = () => {
    alert("Google register (not implemented)");
  };
  return (
    <>
      {" "}
      <button
        type="button"
        className="flex items-center text-center w-full gap-2 px-6 py-3 rounded-lg border border-gray-200 bg-white font-semibold"
        onClick={handleGoogle}
      >
        <svg
          viewBox="0 0 533.5 544.3"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden
          focusable="false"
          className="w-4 h-4"
        >
          <path
            fill="#4285f4"
            d="M533.5 278.4c0-17.7-1.6-35.3-4.8-52.3H272v98.9h147.1c-6.4 34.6-25.7 63.9-54.8 83.6v69.4h88.5c51.8-47.8 81.7-118.1 81.7-199.6z"
          />
          <path
            fill="#34a853"
            d="M272 544.3c73.6 0 135.4-24.4 180.6-66.4l-88.5-69.4c-24.6 16.5-56 26.3-92.1 26.3-70.8 0-130.9-47.7-152.3-111.7H28.8v70.4C73 481.6 165.6 544.3 272 544.3z"
          />
          <path
            fill="#fbbc04"
            d="M119.7 327.1c-8.3-24.6-8.3-51 0-75.6V181.1H28.8c-41 80.5-41 175.7 0 256.2l90.9-70.2z"
          />
          <path
            fill="#ea4335"
            d="M272 107.7c38.8 0 73.7 13.4 101.3 39.7l75.9-75.9C409 24.6 347.2 0 272 0 165.6 0 73 62.7 28.8 181.1l90.9 70.4C141.1 155.4 201.2 107.7 272 107.7z"
          />
        </svg>
        Sign up with Google
      </button>
    </>
  );
}
