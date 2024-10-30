import "./PlayerButtons.css";

const PlayerButtons = ({
  handleAvailableSelectedSections,
  selectedPlayers,
  availableActive,
  selectedActive,
}) => {
  // const handleSelectedPlayerBtn = () => {
  //   setBtnSelected(!activeButton);
  //   setBtnAvailable(!activeButton);
  // };

  return (
    <>
      <div className="flex items-center justify-between pt-20">
        <h1 className="text-3xl font-bold">
          {availableActive
            ? "Available Players"
            : `Selected Players   (${selectedPlayers.length}/6)`}
        </h1>
        <div>
          <button
            className={`px-8 py-4 rounded-l-xl border-l border-t border-b font-bold ${
              availableActive ? "bg-active" : "bg-white"
            }`}
            id="availableBtn"
            onClick={() => {
              handleAvailableSelectedSections();
            }}
          >
            Available
          </button>
          <button
            className={`px-8 py-4 rounded-r-xl border-r border-b border-t font-bold ${
              selectedActive ? "bg-active" : "bg-white"
            }`}
            id="selectedBtn"
            onClick={() => {
              handleAvailableSelectedSections();
            }}
          >
            Selected
          </button>
        </div>
      </div>
    </>
  );
};

export default PlayerButtons;
