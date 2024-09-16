import { useNavigate } from "react-router-dom";

function Direction() {
  const navigate = useNavigate(); // Hook to navigate programmatically

  const handleHomeNavigation = () => {
    navigate("/"); // Redirect to the home page
  };

  return (
    <div className="relative">
      {/* X Button */}
      <button
        onClick={handleHomeNavigation}
        className="absolute top-4 right-4 bg-purple-600 text-white font-bold py-2 px-4 rounded hover:bg-purple-700"
      >
        X
      </button>

      <div className="lg:px-24 lg:py-24 bg-white md:py-20 md:px-44 px-4 py-24 items-center flex justify-center flex-col-reverse lg:flex-row md:gap-28 gap-16">
        <div className="xl:pt-24 w-full xl:w-1/2 relative pb-12 lg:pb-0">
          <div className="relative">
            <div className="absolute">
              <div>
                <h1 className="my-2 text-gray-800 font-bold text-2xl">
                  We are pleased to inform you that we have been acquired by
                  another company, and we no longer own the product.
                </h1>
                <p className="my-2 text-gray-800">
                  We apologize for any inconvenience. To access the product,
                  please visit the new website:{" "}
                  <a
                    href="https://renameai.app/"
                    className="text-purple-600 hover:underline"
                  >
                    renameai.app
                  </a>
                  . You can also check out our YouTube channel for more
                  information:{" "}
                  <a
                    href="https://www.youtube.com/@RenameAI"
                    className="text-purple-600 hover:underline"
                  >
                    RenameAI YouTube Channel
                  </a>
                  .
                </p>

                <div className="container flex">
                <button
                  onClick={() =>
                    window.location.href = "https://renameai.app/"
                  }
                  className="sm:w-full lg:w-auto my-2 m-5 border rounded md p-2 text-center bg-purple-600 text-white hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-700 focus:ring-opacity-50"
                >
                  Visit the New RenameAI
                </button>
                <button
                  onClick={() =>
                    window.location.href = "https://www.youtube.com/@RenameAI"
                  }
                  className="sm:w-full lg:w-auto my-2 border rounded md p-2 text-center bg-purple-600 text-white hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-700 focus:ring-opacity-50"
                >
                  Check the YouTube Channel
                </button>
              </div>
              </div>
            </div>
            <div>
              <img src="https://i.ibb.co/G9DC8S0/404-2.png" alt="404 Image" />
            </div>
          </div>
        </div>
        <div className="hidden lg:block">
  <img
    className=""
    src="https://i.ibb.co/ck1SGFJ/Group.png"
    alt="Background Image"
  />
</div>

      </div>
    </div>
  );
}

export default Direction;
