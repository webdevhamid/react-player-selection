import logo from "../../assets/logo-footer.png";

const Footer = () => {
  const buttonStyles = {
    backgroundColor: "rgb(242,147,180)",
    background: "linear-gradient(124deg, rgba(242,147,180,1) 28%, rgba(252,210,94,1) 65%)",
    boxShadow: "inset 4px 4px 20px 0px rgba(19, 19, 19, 0.3)",
  };
  return (
    <footer className="bg-[#06091A] pt-60 text-white text-opacity-65 relative">
      <div className="container mx-auto">
        <div className="mx-auto w-fit">
          <img src={logo} alt="" />
        </div>
        <div className="flex justify-between py-20">
          <div className="p-5 flex-1">
            <h2 className="text-white text-xl mb-5">About Us</h2>
            <p className="text-lg w-2/3">
              We are a passionate team dedicated to providing the best services to our customers.
            </p>
          </div>
          <div className="flex-1">
            <h2 className="text-white text-xl mb-5">Quick Links</h2>
            <ul className="text-lg flex flex-col gap-3">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
          <div className="flex-1">
            <h3 className="text-white text-xl mb-5">Subscribe</h3>
            <p className="text-lg mb-4">Subscribe to our newsletter for the latest updates.</p>
            <div>
              <input
                type="text"
                className="w-8/12 px-5 py-4 rounded-l-xl border-t-2 border-l-2 border-b-2"
                placeholder="Enter your email"
              />
              <button
                className="px-5 py-4 rounded-r-xl font-bold bg-center bg-cover bg-no-repeat w-4/12 border-r-2 border-t-2 border-b-2 text-black"
                style={buttonStyles}
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div className="py-10 text-center border-t border-gray-600">
          <p>@2024 Your Company All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
