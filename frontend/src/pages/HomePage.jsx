import Buildings from "../components/HomePage/Buildings"
import Footer from "../components/HomePage/Footer"
import Navbar from "../components/HomePage/Navbar"

const HomePage = () => {
  return (
    <div className="relative homePageImage w-screen h-screen">
      <Navbar />
      <Buildings device={"mobile"} />
      <Footer />
    </div>
  )
}

export default HomePage