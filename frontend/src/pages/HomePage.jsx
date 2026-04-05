import { useState } from "react"
import Buildings from "../components/HomePage/Buildings"
import Footer from "../components/HomePage/Footer"
import Navbar from "../components/HomePage/Navbar"
import SideBar from "../components/HomePage/SideBar"
import Profile from "../components/HomePage/Profile"
import Vip from "../components/HomePage/Vip"
import CastleInfo from "../components/HomePage/castle/CastleInfo"
import UpgradeCastle from "../components/HomePage/castle/UpgradeCastle"
import TrainInfo from "../components/HomePage/train/TrainInfo"
import UpgradeTrain from "../components/HomePage/train/UpgradeTrain"
import TechInfo from "../components/HomePage/tech/TechInfo"
import UpgradeTech from "../components/HomePage/tech/UpgradeTech"
import Train from "../components/HomePage/train/Train"
import Troops from "../components/HomePage/Troops"

const HomePage = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isVipOpen, setIsVipOpen] = useState(false);
  const [isCastleInfoOpen, setIsCastleInfoOpen] = useState(false);
  const [isCastleUpgradeOpen, setIsCastleUpgradeOpen] = useState(false);
  const [isTrainInfoOpen, setIsTrainInfoOpen] = useState(false);
  const [isTrainUpgradeOpen, setIsTrainUpgradeOpen] = useState(false);
  const [isTechInfoOpen, setIsTechInfoOpen] = useState(false);
  const [isTechUpgradeOpen, setIsTechUpgradeOpen] = useState(false);
  const [isTrainOpen, setIsTrainOpen] = useState(false);
  const [isTroopsOpen, setIsTroopsOpen] = useState(false);

  const openProfile = () => {
    setIsProfileOpen(true);
  };
  const closeProfile = () => {
    setIsProfileOpen(false);
  };

  const openVip = () => {
    setIsVipOpen(true);
  };
  const closeVip = () => {
    setIsVipOpen(false);
  };

  const openCastleInfo = () => {
    console.log("info is clicked");
    setIsCastleInfoOpen(true);
  };
  const closeCastleInfo = () => {
    setIsCastleInfoOpen(false);
  };
  const openCasteleUpdrade = () => {
    setIsCastleUpgradeOpen(true);
  };
  const closeCastleUpgrade = () => {
    setIsCastleUpgradeOpen(false);
  };

  const openTrainInfo = () => {
    setIsTrainInfoOpen(true);
  };
  const closeTrainInfo = () => {
    setIsTrainInfoOpen(false);
  };
  const openTrainUpgrade = () => {
    setIsTrainUpgradeOpen(true);
  };
  const closeTrainUpgrade = () => {
    setIsTrainUpgradeOpen(false);
  };

  const openTechInfo = () => {
    setIsTechInfoOpen(true);
  };
  const closeTechInfo = () => {
    setIsTechInfoOpen(false);
  };
  const openTechUpgrade = () => {
    setIsTechUpgradeOpen(true);
  };
  const closeTechUpgrade = () => {
    setIsTechUpgradeOpen(false);
  };

  const openTrain = () => {
    setIsTrainOpen(true);
  };
  const closeTrain = () => {
    setIsTrainOpen(false);
  };

  const openTroops = () => {
    setIsTroopsOpen(true);
  };
  const closeTroops = () => {
    setIsTroopsOpen(false);
  };

  return (
    <div className="relative homePageImage w-screen h-screen">
      <Navbar openProfile={openProfile} openVip={openVip} />
      <SideBar openTroops={openTroops} />
      <Buildings openCastleInfo={openCastleInfo} openCasteleUpdrade={openCasteleUpdrade} openTrainInfo={openTrainInfo} openTrainUpgrade={openTrainUpgrade} openTechInfo={openTechInfo} openTechUpgrade={openTechUpgrade} openTrain={openTrain} />
      <Footer />
      {isProfileOpen && <Profile closeProfile={closeProfile} />}
      {isVipOpen && <Vip closeVip={closeVip} />}
      {isCastleInfoOpen && <CastleInfo closeCastleInfo={closeCastleInfo} />}
      {isCastleUpgradeOpen && <UpgradeCastle closeCastleUpgrade={closeCastleUpgrade} />}
      {isTrainInfoOpen && <TrainInfo closeTrainInfo={closeTrainInfo} />}
      {isTrainUpgradeOpen && <UpgradeTrain closeTrainUpgrade={closeTrainUpgrade} />}
      {isTechInfoOpen && <TechInfo closeTechInfo={closeTechInfo} />}
      {isTechUpgradeOpen && <UpgradeTech closeTechUpgrade={closeTechUpgrade} />}
      {isTrainOpen && <Train closeTrain={closeTrain} />}
      {isTroopsOpen && <Troops closeTroops={closeTroops} />}
    </div>
  )
}

export default HomePage