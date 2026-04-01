const SideBar = () => {
  return (
    <div className="flex flex-col items-end mt-10">
      <div className="hoverEffect w-fit rounded-lg px-4 py-1 flex flex-col items-center justify-center gap-1">
        <img src="/pages/HomePage/troops.svg" alt="Troops" className="h-6 myShadow" />
        <p className="text-sm font-bold text-orange-100 ts">Troops</p>
      </div>
      <div className="hoverEffect w-fit rounded-lg px-4 py-1 flex flex-col items-center justify-center gap-1">
        <img src="/pages/HomePage/chest.svg" alt="Chest" className="h-6 myShadow" />
        <p className="text-sm font-bold text-orange-100 ts">Chests</p>
      </div>
    </div>
  )
}

export default SideBar