import React from "react";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <>
      <div className="h-screen flex items-center justify-center bg-white dark:bg-darkgray">
        <div className="text-center max-w-lg mx-auto flex flex-col justify-center items-center">
          <img
            src={
              "https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-1932.jpg"
            }
            alt="error"
            className="mb-4 w-[200px]"
          />
          <h1 className="text-4xl mb-6">Opps!!!</h1>
          <h6 className="text-xl">
            This page you are looking for could not be found.
          </h6>
          <Link
            to="/"
            className="w-fit mt-12 mx-auto bg-blue-600 text-white px-8 py-3 rounded"
          >
            Go Back to Home
          </Link>
        </div>
      </div>
    </>
  );
};

export default Main;
