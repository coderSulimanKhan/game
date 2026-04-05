import { X } from "lucide-react"
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { sellTroops } from "../../store/user.store.js";

const Troops = ({ closeTroops }) => {
  const { user } = useSelector(state => state?.user);
  const [isSellMenuOpen, setIsSellMenuOpen] = useState(false);
  const [troopsPrice, setTroopsPrice] = useState(0);
  const [inputValue, setInputValue] = useState(100);
  const [inputMaxValue, setInputMaxValue] = useState(0);
  const [troopsLevel, setTroopsLevel] = useState(0);
  const openSellMenu = (level, quantity) => {
    setInputMaxValue(quantity);
    setTroopsLevel(level);
    setTroopsPrice(inputValue * user?.troops[`level${level}`]?.price);
    setIsSellMenuOpen(true);
  };
  const closeSellMenu = () => {
    setIsSellMenuOpen(false);
  };
  const handleChangeInputValue = e => {
    setInputValue(e?.target?.value);
    setTroopsPrice(e?.target?.value * user?.troops[`level${troopsLevel}`]?.price);
  };
  const dispatch = useDispatch();
  const handleSellTroops = () => {
    dispatch(sellTroops({ level: troopsLevel, quantity: inputValue }));
    setIsSellMenuOpen(false);
  };
  return (
    <div className="w-full absolute bg-orange-500/20 h-screen inset-0 flex items-center justify-center z-30">
      <div className="min-w-90 max-w-90 m-2 md:m-0 gb borderShadow rounded-lg flex flex-col items-center gap-2 relative">
        <div className="">
          <p className="text-orange-200 ts font-bold text-lg">Troops</p>
          <X onClick={closeTroops} className="myShadow hoverEffect absolute top-1 right-1" size={30} />
        </div>
        <p className="text-lg font-bold ts text-orange-300">{user?.troops?.level1?.quantity + user?.troops?.level2?.quantity + user?.troops?.level3?.quantity + user?.troops?.level4?.quantity + user?.troops?.level5?.quantity} <span className="">/</span> {user?.troops?.troopsCapacity}</p>
        <div className="grid grid-cols-2 p-1 gap-2 overflow-y-scroll max-h-[60vh] styledScrollbar relative">
          {
            user?.troops?.level1?.quantity > 0 && (
              <div className="flex flex-col borderShadow">
                <p className="text-orange-200 ts bg-black text-sm font-bold w-fit rounded-full px-1 myShadow mt-1 ml-1">Level 1</p>
                <img src="/pages/HomePage/train/char-1.svg" alt="Level 1" className="myShadow" />
                <div className="flex items-center justify-between">
                  <button onClick={() => openSellMenu(1, user?.troops?.level1?.quantity)} className="text-sm font-bold ts bg-black text-red-600 rounded-full px-2 borderShadow ml-1 mb-1 hoverEffect">Sell</button>
                  <p className="text-end mr-1 text-orange-200 ts font-bold">{user?.troops?.level1?.quantity}</p>
                </div>
              </div>
            )
          }
          {
            user?.troops?.level2?.quantity > 0 && (
              <div className="flex flex-col borderShadow">
                <p className="text-orange-200 ts bg-black text-sm font-bold w-fit rounded-full px-2 myShadow mt-1 ml-1">Level 2</p>
                <img src="/pages/HomePage/train/char-2.svg" alt="Level 2" className="myShadow" />
                <div className="flex items-center justify-between">
                  <button onClick={() => openSellMenu(2, user?.troops?.level2?.quantity)} className="text-sm font-bold ts bg-black text-red-600 rounded-full px-2 borderShadow ml-1 mb-1 hoverEffect">Sell</button>
                  <p className="text-end mr-1 text-orange-200 ts font-bold">{user?.troops?.level2?.quantity}</p>
                </div>
              </div>
            )
          }
          {
            user?.troops?.level3?.quantity > 0 && (
              <div className="flex flex-col borderShadow">
                <p className="text-orange-200 ts bg-black text-sm font-bold w-fit rounded-full px-2 myShadow mt-1 ml-1">Level 3</p>
                <img src="/pages/HomePage/train/char-3.svg" alt="Level 3" className="myShadow" />
                <div className="flex items-center justify-between">
                  <button onClick={() => openSellMenu(3, user?.troops?.level3?.quantity)} className="text-sm font-bold ts bg-black text-red-600 rounded-full px-2 borderShadow ml-1 mb-1 hoverEffect">Sell</button>
                  <p className="text-end mr-1 text-orange-200 ts font-bold">{user?.troops?.level3?.quantity}</p>
                </div>
              </div>
            )
          }
          {
            user?.troops?.level4?.quantity > 0 && (
              <div className="flex flex-col borderShadow">
                <p className="text-orange-200 ts bg-black text-sm font-bold w-fit rounded-full px-2 myShadow mt-1 ml-1">Level 4</p>
                <img src="/pages/HomePage/train/char-4.svg" alt="Level 4" className="myShadow" />
                <div className="flex items-center justify-between">
                  <button onClick={() => openSellMenu(4, user?.troops?.level4?.quantity)} className="text-sm font-bold ts bg-black text-red-600 rounded-full px-2 borderShadow ml-1 mb-1 hoverEffect">Sell</button>
                  <p className="text-end mr-1 text-orange-200 ts font-bold">{user?.troops?.level4?.quantity}</p>
                </div>
              </div>
            )
          }
          {
            user?.troops?.level5?.quantity > 0 && (
              <div className="flex flex-col borderShadow">
                <p className="text-orange-200 ts bg-black text-sm font-bold w-fit rounded-full px-2 myShadow mt-1 ml-1">Level 5</p>
                <img src="/pages/HomePage/train/char-5.svg" alt="Level 5" className="myShadow" />
                <div className="flex items-center justify-between">
                  <button onClick={() => openSellMenu(5, user?.troops?.level5?.quantity)} className="text-sm font-bold ts bg-black text-red-600 rounded-full px-2 borderShadow ml-1 mb-1 hoverEffect">Sell</button>
                  <p className="text-end mr-1 text-orange-200 ts font-bold">{user?.troops?.level5?.quantity}</p>
                </div>
              </div>
            )
          }
          {
            isSellMenuOpen && (
              <div className="fixed bg-orange-500/20 inset-0 flex items-center justify-center z-30">
                <div className="w-2/10 m-2 md:m-0 gb borderShadow rounded-lg flex flex-col items-center gap-2 relative">
                  <p className="ts text-orange-200 font-bold text-lg">Sell</p>
                  <X onClick={closeSellMenu} className="myShadow hoverEffect absolute top-1 right-1" size={30} />
                  <div className="w-full flex flex-col items-center gap-2">
                    <div className="w-full flex items-center justify-center gap-2 px-4">
                      <input type="number" min={1} max={inputMaxValue} value={inputValue} onChange={handleChangeInputValue} className="w-20 borderShadow rounded p-1 outline-none font-bold ts text-orange-200" />
                      <input type="range" min={1} max={inputMaxValue} value={inputValue} onChange={handleChangeInputValue} className="w-full rangeStyle" />
                    </div>
                    <div className="flex items-center justify-center">
                      <p className="text-orange-200 ts font-bold">{troopsPrice / 2}</p>
                      <img src="/pages/HomePage/coin.svg" alt="Coin" className="myShadow w-5 mb-0.5" />
                    </div>
                    <button onClick={handleSellTroops} className="text-md font-bold ts bg-black text-red-600 rounded-full px-4 py-0.5 mb-1 borderShadow hoverEffect">Sell</button>
                  </div>
                </div>
              </div>
            )
          }
        </div>
      </div>
    </div>
  )
}

export default Troops