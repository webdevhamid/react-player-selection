import { IoTrashBin } from "react-icons/io5";
import { PropTypes } from "prop-types";

const SelectedPlayer = ({ selectedPlayer, handleRemoveSelectedPlayer }) => {
  const { id, player_name, player_img, player_features } = selectedPlayer;
  return (
    <div className="flex items-center justify-between p-5 border rounded-xl">
      <div className="flex gap-4">
        <img src={player_img} className="w-[60px] object-cover rounded-lg" />
        <div className="">
          <h2 className="text-xl font-semibold">{player_name}</h2>
          <div className="text-lg text-gray-500 font-medium flex items-center gap-4">
            {player_features.map((feature, i) => (
              <span key={i}>{feature}</span>
            ))}
          </div>
        </div>
      </div>
      <div>
        <IoTrashBin
          className="text-3xl text-red-500 cursor-pointer hover:text-black transition"
          onClick={() => {
            handleRemoveSelectedPlayer(id);
          }}
        />
      </div>
    </div>
  );
};
SelectedPlayer.propTypes = {
  selectedPlayer: PropTypes.object.isRequired,
  handleRemoveSelectedPlayer: PropTypes.func.isRequired,
};

export default SelectedPlayer;
