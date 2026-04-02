import { useState } from "react"
import Buildings from "../components/HomePage/Buildings"
import Footer from "../components/HomePage/Footer"
import Navbar from "../components/HomePage/Navbar"
import SideBar from "../components/HomePage/SideBar"
import Profile from "../components/HomePage/Profile"
import Vip from "../components/HomePage/Vip"
import CastleInfo from "../components/HomePage/CastleInfo"

const HomePage = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isVipOpen, setIsVipOpen] = useState(false);
  const [isCastleInfoOpen, setIsCastleInfoOpen] = useState(false);

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

  return (
    <div className="relative homePageImage w-screen h-screen">
      <Navbar openProfile={openProfile} openVip={openVip} />
      <SideBar />
      <Buildings openCastleInfo={openCastleInfo} />
      <Footer />
      {isProfileOpen && <Profile closeProfile={closeProfile} />}
      {isVipOpen && <Vip closeVip={closeVip} />}
      {isCastleInfoOpen && <CastleInfo closeCastleInfo={closeCastleInfo} />}
    </div>
  )
}

export default HomePage