import "./App.css";
import PlayerButtons from "./Components/PlayerButtons/PlayerButtons";
import Banner from "./Components/Banner/Banner";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import Newsletter from "./Components/Newsletter/Newsletter";
import Players from "./Components/Players/Players";
import SelectedPlayers from "./Components/SelectedPlayers/SelectedPlayers";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [coinBalance, setCoinBalance] = useState(0);
  const [selectedPlayers, setSelectedPlayers] = useState([]);
  const maxSelectedPlayers = 6;

  const [availableActive, setAvailableActive] = useState(true);
  const [selectedActive, setSelectedActive] = useState(false);

  const handleAvailableSelectedSections = () => {
    setAvailableActive(!availableActive);
    setSelectedActive(!selectedActive);
  };

  const purchaseSuccessful = () => toast.success("Player successfully purchased!");
  const purchaseFailed = () => toast.error("You don't have sufficient balance!");
  const playersFull = () => toast.warning("Cannot add more than 6 players!");
  const claimFreeCredit = () => toast.success("Congratulations! You've got free credit");
  const removePlayerToast = () => toast.success("Player successfully removed!");
  const preventDuplicatePurchase = () => toast.warning("Player already purchased!");

  const handleFreeCoinCredit = () => {
    setCoinBalance(coinBalance + 1000000);
  };

  const handlePlayerPurchase = (player) => {
    const { price } = player;
    const playerPrice = parseInt(price.replace("$", ""));

    if (coinBalance >= playerPrice) {
      const duplicatePlayer = selectedPlayers?.find((prevPlayer) => prevPlayer.id === player.id);

      // Check if duplicate player exists
      if (duplicatePlayer) return preventDuplicatePurchase();

      if (selectedPlayers.length === maxSelectedPlayers) {
        playersFull();
        return;
      }

      // Update the coin balance
      setCoinBalance(coinBalance - playerPrice);

      // Add the new purchased/selected player to the selectedPlayers variable
      const newSelectedPlayer = [...selectedPlayers, player];

      // Update the selectedPlayer with setSelectedPlayers function
      setSelectedPlayers(newSelectedPlayer);

      // Show successful toast message
      purchaseSuccessful();
    } else {
      return purchaseFailed();
    }
  };

  const handleRemoveSelectedPlayer = (playerId) => {
    const remainingSelectedPlayers = selectedPlayers.filter(
      (selectedPlayer) => selectedPlayer.id !== playerId
    );
    setSelectedPlayers(remainingSelectedPlayers);
    removePlayerToast();
  };

  return (
    <>
      <ToastContainer theme="dark" position="top-center" />

      <header className="container mx-auto">
        <Navbar coinBalance={coinBalance} />
        <Banner handleFreeCoinCredit={handleFreeCoinCredit} claimFreeCredit={claimFreeCredit} />
      </header>
      <main className="container mx-auto">
        <PlayerButtons
          handleAvailableSelectedSections={handleAvailableSelectedSections}
          selectedPlayers={selectedPlayers}
          availableActive={availableActive}
          selectedActive={selectedActive}
        />
        {availableActive ? (
          <Players handlePlayerPurchase={handlePlayerPurchase} />
        ) : (
          <SelectedPlayers
            selectedPlayers={selectedPlayers}
            handleRemoveSelectedPlayer={handleRemoveSelectedPlayer}
            handleAvailableSelectedSections={handleAvailableSelectedSections}
          />
        )}
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}

export default App;
