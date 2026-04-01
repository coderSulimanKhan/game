import { useState } from "react"
import Buildings from "../components/HomePage/Buildings"
import Footer from "../components/HomePage/Footer"
import Navbar from "../components/HomePage/Navbar"
import SideBar from "../components/HomePage/SideBar"
import Profile from "../components/HomePage/Profile"

const HomePage = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const openProfile = () => {
    setIsProfileOpen(true);
  };
  const closeProfile = () => {
    setIsProfileOpen(false);
  };

  return (
    <div className="relative homePageImage w-screen h-screen">
      <Navbar openProfile={openProfile} />
      <SideBar />
      <Buildings device={"mobile"} />
      <Footer />
      {isProfileOpen && <Profile closeProfile={closeProfile} />}
    </div>
  )
}

export default HomePage