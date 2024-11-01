import { useEffect, useState } from "react";
import Player from "../Player/Player";
import { PropTypes } from "prop-types";
import { SyncLoader } from "react-spinners";

const Players = ({ handlePlayerPurchase }) => {
  const [players, setPlayers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("players.json")
      .then((res) => res.json())
      .then((data) => {
        setPlayers(data);
        setLoading(false);
      });
  }, []);

  // console.log(handleAvailablePlayerBtn);

  // console.log(players);
  return (
    <>
      <div className="text-center mt-3">{loading && <SyncLoader color="#000" />}</div>
      <div className="grid gap-6 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 py-10 mb-32">
        {players.map((player, i) => (
          <Player player={player} key={i} handlePlayerPurchase={handlePlayerPurchase} />
        ))}
      </div>
    </>
  );
};

Players.propTypes = {
  handlePlayerPurchase: PropTypes.func.isRequired,
};

export default Players;
