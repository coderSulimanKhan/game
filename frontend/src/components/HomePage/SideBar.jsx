const SideBar = ({ openTroops }) => {
  return (
    <div className="flex items-center z-10 justify-between mt-10 w-full absolute right-0 left-0 top-16 lg:top-20">
      <div className="flex flex-col items-center justify-center">
        <div className="hoverEffect w-fit rounded-lg py-2 flex flex-col items-center justify-center gap-1">
          <img src="/pages/HomePage/troops.svg" alt="Troops" className="h-6 myShadow" />
          <p className="text-sm font-bold text-orange-200 ts bg-orange-400/80 px-1 rounded-full">Events</p>
        </div>
        <div className="hoverEffect z-20 w-fit rounded-lg px-4 py-1 flex flex-col items-center justify-center gap-1">
          <img src="/pages/HomePage/chest.svg" alt="Chest" className="h-6 myShadow" />
          <p className="text-sm font-bold text-orange-200 ts bg-orange-400/80 px-1 rounded-full">Competetion</p>
        </div>
      </div>
      <div className="lg:absolute z-10 lg:right-0 lg:mb-10 flex flex-col items-center justify-center">
        <div onClick={openTroops} className="hoverEffect w-fit rounded-lg px-4 py-1 flex flex-col items-center justify-center gap-1">
          <img src="/pages/HomePage/troops.svg" alt="Troops" className="h-6 myShadow" />
          <p className="text-sm font-bold text-orange-200 ts bg-orange-400/80 px-1 rounded-full">Troops</p>
        </div>
        <div className="hoverEffect z-10 w-fit rounded-lg px-4 py-1 flex flex-col items-center justify-center gap-1">
          <img src="/pages/HomePage/chest.svg" alt="Chest" className="h-6 myShadow" />
          <p className="text-sm font-bold text-orange-200 ts bg-orange-400/80 px-1 rounded-full">Chests</p>
        </div>
      </div>
    </div>
  )
}

export default SideBar