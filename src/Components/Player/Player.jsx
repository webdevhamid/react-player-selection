import { FaFlag } from "react-icons/fa";
import { FaCircleUser } from "react-icons/fa6";
import { PropTypes } from "prop-types";

const Player = ({ player, handlePlayerPurchase }) => {
  const { country, player_name, player_type, player_img, player_features, price, rating } = player;

  return (
    <div className="p-6 border rounded-2xl text-xl font-medium flex flex-col gap-3">
      <img
        src={player_img}
        alt={player_name}
        className="min-w-full max-h-60 object-cover rounded-2xl"
      />
      <div className="text-2xl flex gap-3 items-center mt-3">
        <FaCircleUser className="text-4xl" />
        {player_name}
      </div>
      <div className="flex items-center justify-between">
        <div className="text-gray-600 text-xl opacity-70 flex items-center gap-3">
          <FaFlag className="text-3xl" /> {country}
        </div>
        <p className="bg-gray-200 px-4 py-2 rounded-lg">{player_type}</p>
      </div>
      {/* Divider  */}
      <div className="border-b-2 my-3"></div>
      <div className="flex items-center justify-between">
        <p>Rating</p>
        <p>{rating}</p>
      </div>
      <div className="flex justify-between items-center">
        {player_features.map((feature, i) => (
          <p key={i} className="md:text-lg">
            {feature}
          </p>
        ))}
      </div>
      <div className="flex justify-between items-center">
        <p>Price: {price}</p>
        <button
          className="md:text-sm lg:text-lg font-normal border-2 px-4 py-2 rounded-lg hover:bg-black hover:text-white transition"
          onClick={() => {
            handlePlayerPurchase(player);
          }}
          // style={{ cursor: "not-allowed" }}
        >
          Choose Player
        </button>
      </div>
    </div>
  );
};

Player.propTypes = {
  player: PropTypes.object.isRequired,
  handlePlayerPurchase: PropTypes.func.isRequired,
};

export default Player;
