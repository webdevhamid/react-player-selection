import logo from "../../assets/logo.png";
const Navbar = ({ coinBalance }) => {
  return (
    <div className="flex items-center justify-between py-5">
      <img src={logo} alt="dream-11-logo" />
      <ul className="flex gap-12 text-lg font-normal items-center text-gray-500">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Fixture</a>
        </li>
        <li>
          <a href="#">Teams</a>
        </li>
        <li>
          <a href="#">Schedules</a>
        </li>
        <li>
          <span className="border-2 py-4 px-5 rounded-xl font-semibold text-black">
            ${coinBalance} Coin 🪙
          </span>
        </li>
      </ul>
    </div>
  );
};

import { PropTypes } from "prop-types";
Navbar.propTypes = {
  coinBalance: PropTypes.number.isRequired,
};

export default Navbar;
