const Footer = () => {
  return (
    <>
      {/* Mobile */}
      <div className="w-full absolute gap-2 bottom-10 h-[9vh] flex flex-col md:hidden items-center justify-between px-1">
        <div className="flex gap-2 w-full">
          <div className="gb hoverEffect borderShadow rounded-lg w-full py-1 flex flex-col items-center justify-center gap-1">
            <img src="/pages/HomePage/hero.svg" alt="Hero" className="h-8 myShadow" />
            <p className="text-lg font-bold text-orange-100 ts">Heroes</p>
          </div>
          <div className="gb hoverEffect borderShadow rounded-lg w-full py-1 flex flex-col items-center justify-center gap-1">
            <img src="/pages/HomePage/weapons.svg" alt="Weapons" className="h-8 myShadow" />
            <p className="text-lg font-bold text-orange-100 ts">Weapons</p>
          </div>
          <div className="gb hoverEffect borderShadow rounded-lg w-full py-1 flex flex-col items-center justify-center gap-1">
            <img src="/pages/HomePage/bag.svg" alt="Bag" className="h-8 myShadow" />
            <p className="text-lg font-bold text-orange-100 ts">Bag</p>
          </div>
          {/* <div className="gb hoverEffect borderShadow rounded-lg w-full py-1 flex flex-col items-center justify-center gap-1">
            <img src="/pages/HomePage/chest.svg" alt="Chest" className="h-8 myShadow" />
            <p className="text-lg font-bold text-orange-100 ts">Chests</p>
          </div> */}
          <div className="relative hoverEffect rounded-lg px-4 py-1 flex flex-col items-center justify-center gap-1">
            <img src="/pages/HomePage/world.svg" alt="Wprld" className="absolute bottom-6 myShadow" />
            <p className="text-lg font-bold text-orange-100 ts pt-12">World</p>
          </div>
        </div>
      </div>

      {/* Desktop */}
      <div className="absolute bottom-2 left-2 right-2 h-[14vh] hidden md:flex items-center justify-between px-4">
        <div className="flex gap-2">
          <div className="gb hoverEffect borderShadow rounded-lg px-4 py-1 flex flex-col items-center justify-center gap-1">
            <img src="/pages/HomePage/hero.svg" alt="Hero" className="h-8 myShadow" />
            <p className="text-lg font-bold text-orange-100 ts">Heroes</p>
          </div>
          <div className="gb hoverEffect borderShadow rounded-lg px-4 py-1 flex flex-col items-center justify-center gap-1">
            <img src="/pages/HomePage/weapons.svg" alt="Weapons" className="h-8 myShadow" />
            <p className="text-lg font-bold text-orange-100 ts">Weapons</p>
          </div>
          <div className="gb hoverEffect borderShadow rounded-lg px-4 py-1 flex flex-col items-center justify-center gap-1">
            <img src="/pages/HomePage/bag.svg" alt="Bag" className="h-8 myShadow" />
            <p className="text-lg font-bold text-orange-100 ts">Bag</p>
          </div>
        </div>
        <div className="relative hoverEffect rounded-lg px-4 py-1 flex flex-col items-center justify-center gap-1">
          <img src="/pages/HomePage/world.svg" alt="Wprld" className="absolute bottom-6 myShadow" />
          <p className="text-lg font-bold text-orange-100 ts pt-12">World</p>
        </div>
      </div>
    </>
  )
}

export default Footer