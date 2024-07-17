import { IoMdAlert } from "react-icons/io";
import { FaHandPointRight } from "react-icons/fa";
export default function Errorr() {
  const reloadd = () => {
    window.location.reload();
  };
  return (
    <>
      <div className=" text-center bg-[#1F2041] h-screen w-screen text-white flex flex-col space-y-10 items-center">
        <h1 className="pt-5 text-2xl">No results found... </h1>
        <section
          className="flex flex-col p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50
        dark:bg-gray-800 dark:text-blue-400 w-[25rem] "
          role="alert"
        >
          <div className="flex space-x-3 justify-center">
            <IoMdAlert className="mt-1" />
            <p className="font-medium">
              Ensure that these requirements are met:
            </p>
          </div>

          <div>
            <ul className="mt-4 flex flex-col text-start space-y-1 ">
              <li className="flex space-x-2">
                <FaHandPointRight className="mt-1" />
                <span> The city name entered is an actual City, State.</span>
              </li>
              <li className="flex space-x-2">
                <FaHandPointRight className="mt-1" />
                <span> The name is entered correctly.</span>
              </li>
              <li className="flex space-x-2">
                <FaHandPointRight className="mt-1" />
                <span> Check for any grammatical mistakes.</span>
              </li>
            </ul>
          </div>

          <div className="flex justify-center ">
            <button
              onClick={reloadd}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-16 rounded mt-5 "
            >
              Home
            </button>
          </div>
        </section>
      </div>
    </>
  );
}
