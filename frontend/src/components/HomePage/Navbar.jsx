import { Plus } from "lucide-react"
import { useSelector } from "react-redux";

const Navbar = ({ openProfile }) => {
  const { resources } = useSelector(state => state.user);
  return (
    // Main Navbar
    <div className="h-[10vh] mt-1 lg:mt-4 flex items-center justify-between mx-2">
      {/* first section */}
      <div className="flex w-fit gb p-2 rounded-lg gap-1 items-start justify-center borderShadow">
        {/* first section */}
        <button onClick={openProfile} className="w-14 lg:w-16 borderShadow rounded-sm hoverEffect">
          <img className="w-full myShadow" src="/pages/HomePage/profile.svg" alt="Profile" />
        </button>
        {/* - first section */}
        <div className="flex gap-1 flex-col items-start justify-center">
          <div className="text-md lg:text-lg font-bold text-orange-100 ts gb borderShadow w-fit pl-2 gap-2 rounded-lg flex items-center justify-between">
            <p>VIP <span>0</span></p>
            <Plus className="w-5 h-5 lg:w-6 lg:h-6 inline gbg borderShadow ts rounded-lg hoverEffect" />
          </div>
          <div className="flex items-center justify-center text-xl lg:text-2xl font-bold text-orange-100 gb borderShadow ts rounded-lg px-1">
            <img className="w-5 myShadow" src="/pages/HomePage/power.svg" alt="Power" />
            <span>100000</span>
          </div>
        </div>
      </div>
      {/* - first section */}
      {/* second section */}
      {/* Mobile */}
      <div className="flex flex-col lg:hidden items-end mt-13 justify-center relative mb-12 gb borderShadow rounded-lg p-2 gap-1.5">
        <div className="flex relative">
          <img className="w-7 myShadow absolute -left-2" src="/pages/HomePage/coin.svg" alt="" />
          <div className="text-lg font-bold text-orange-100 ts gb borderShadow w-fit px-2 pl-9 pr-7 rounded-lg">
            {resources?.coins || "--"}
            <button>
              <Plus className="w-5 h-5 lg:w-8 lg:h-8 inline gbg borderShadow ts rounded-lg absolute right-0 top-1 hoverEffect" />
            </button>
          </div>
        </div>
        <div className="flex relative">
          <img className="w-8 myShadow absolute -left-3 mt-0.5" src="/pages/HomePage/gem2.svg" alt="" />
          <div className="text-lg font-bold text-orange-100 ts gb borderShadow w-fit px-2 pl-9 pr-7 rounded-lg">
            {resources?.diamonds || "--"}
            <Plus className="w-5 h-5 lg:w-8 lg:h-8 inline gbg borderShadow ts rounded-lg absolute right-0 top-1 hoverEffect" />
          </div>
        </div>
      </div>
      {/* Desktop */}
      <div className="hidden lg:flex items-center mt-0 justify-center relative mb-12 gb borderShadow rounded-lg p-2 gap-4">
        <div className="flex relative">
          <img className="w-7 myShadow absolute -left-2" src="/pages/HomePage/coin.svg" alt="" />
          <div className="text-lg font-bold text-orange-100 ts gb borderShadow w-fit px-2 pl-9 pr-7 rounded-lg">
            {resources?.coins || "--"}
            <button>
              <Plus className="inline gbg borderShadow ts rounded-lg absolute right-0 top-0.5 hoverEffect" />
            </button>
          </div>
        </div>
        <div className="flex relative">
          <img className="w-8 myShadow absolute -left-3 mt-0.5" src="/pages/HomePage/gem2.svg" alt="" />
          <div className="text-lg font-bold text-orange-100 ts gb borderShadow w-fit px-2 pl-9 pr-7 rounded-lg">
            {resources?.diamonds || "--"}
            <Plus className="inline gbg borderShadow ts rounded-lg absolute right-0 top-0.5 hoverEffect" />
          </div>
        </div>
      </div>
      {/* - second section */}
    </div>
    //- Main Navbar
  )
}

export default Navbar