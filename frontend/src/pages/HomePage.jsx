import { useState } from "react"
import Buildings from "../components/HomePage/Buildings"
import Footer from "../components/HomePage/Footer"
import Navbar from "../components/HomePage/Navbar"
import SideBar from "../components/HomePage/SideBar"
import Profile from "../components/HomePage/Profile"
import Vip from "../components/HomePage/Vip"

const HomePage = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isVipOpen, setIsVipOpen] = useState(false);

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

  return (
    <div className="relative homePageImage w-screen h-screen">
      <Navbar openProfile={openProfile} openVip={openVip} />
      <SideBar />
      <Buildings device={"mobile"} />
      <Footer />
      {isProfileOpen && <Profile closeProfile={closeProfile} />}
      {isVipOpen && <Vip closeVip={closeVip} />}
    </div>
  )
}

export default HomePage