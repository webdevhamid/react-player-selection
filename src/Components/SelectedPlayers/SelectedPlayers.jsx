import SelectedPlayer from "../SelectedPlayer/SelectedPlayer";
import { PropTypes } from "prop-types";

const SelectedPlayers = ({
  selectedPlayers,
  handleRemoveSelectedPlayer,
  handleAvailableSelectedSections,
}) => {
  console.log(selectedPlayers);
  return (
    <div className="py-10">
      <div className="grid grid-cols-1 gap-4 mt-8">
        {selectedPlayers.map((selectedPlayer, i) => (
          <SelectedPlayer
            selectedPlayer={selectedPlayer}
            key={i}
            handleRemoveSelectedPlayer={handleRemoveSelectedPlayer}
          />
        ))}
      </div>
      <button
        className="px-8 py-4 rounded-xl border bg-primary font-bold mt-5 hover:bg-black hover:text-white transition"
        onClick={() => handleAvailableSelectedSections()}
      >
        Add More Player
      </button>
    </div>
  );
};

SelectedPlayers.propTypes = {
  selectedPlayers: PropTypes.array.isRequired,
  handleRemoveSelectedPlayer: PropTypes.func.isRequired,
  handleAvailableSelectedSections: PropTypes.func.isRequired,
};

export default SelectedPlayers;
