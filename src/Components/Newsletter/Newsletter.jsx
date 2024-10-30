import bgImage from "../../assets/bg-shadow.png";
import "./Newsletter.css";

const Newsletter = () => {
  const buttonStyles = {
    backgroundColor: "rgb(242,147,180)",
    background: "linear-gradient(124deg, rgba(242,147,180,1) 28%, rgba(252,210,94,1) 65%)",
    boxShadow: "inset 4px 4px 20px 0px rgba(19, 19, 19, 0.3)",
  };
  return (
    <div
      className="py-20 px-30 text-center bg-center bg-no-repeat bg-cover rounded-3xl bg-white border"
      id="newsletter"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="w-2/3 mx-auto flex flex-col gap-5">
        <h1 className="text-4xl font-bold">Subscribe to our Newsletter</h1>
        <p className="font-medium text-gray-500 text-lg">
          Get the latest updates and news right in your inbox!
        </p>
        <div className="flex items-center gap-3 justify-center h-[56px]">
          <input
            type="text"
            placeholder="Enter your email"
            className="py-3 px-8 w-2/3 rounded-xl text-lg text-gray-500 border outline-none h-full"
          />
          <button
            className="px-5 py-4 rounded-xl h-full font-bold bg-center bg-cover bg-no-repeat w-fit"
            style={buttonStyles}
          >
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
