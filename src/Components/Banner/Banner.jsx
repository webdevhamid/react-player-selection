import bannerImage from "../../assets/banner-main.png";
import gradientBg from "../../assets/bg-shadow.png";
import "./Banner.css";
import { PropTypes } from "prop-types";

const Banner = ({ handleFreeCoinCredit, claimFreeCredit }) => {
  return (
    <div
      className="flex place-items-center flex-col bg-cover bg-center bg-black bg-no-repeat py-24 rounded-3xl gap-5 text-center"
      style={{ backgroundImage: `url(${gradientBg})` }}
    >
      <img src={bannerImage} alt="banner-image" className="w-64" />
      <h1 className="text-5xl text-white font-bold">
        Assemble Your Ultimate Dream 11 Cricket Team
      </h1>
      <p className="text-3xl text-[#ced4da] opacity-70">Beyond Boundaries Beyond Limits</p>
      <button
        className="bg-transparent border-2 px-2 py-5 rounded-2xl border-[#e7fe29]"
        onClick={() => {
          handleFreeCoinCredit();
          claimFreeCredit();
        }}
      >
        <span className="text-black font-bold text-lg px-5 py-4 bg-primary rounded-xl hover:opacity-80 transition">
          Claim Free Credit
        </span>
      </button>
    </div>
  );
};

Banner.propTypes = {
  handleFreeCoinCredit: PropTypes.func.isRequired,
  claimFreeCredit: PropTypes.func.isRequired,
};

export default Banner;
