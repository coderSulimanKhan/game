import { Check, X } from "lucide-react"
import { useMemo, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { buyTroops } from "../../../store/user.store.js";

const Train = ({ closeTrain }) => {
  const { user } = useSelector(state => state.user);
  const troopsLevelInfo = useMemo(() => {
    return [
      { level: 1, damage: 100, health: 50, defense: 25, power: 100, price: 100 },
      { level: 2, damage: 200, health: 100, defense: 50, power: 500, price: 500 },
      { level: 3, damage: 300, health: 150, defense: 75, power: 1000, price: 1000 },
      { level: 4, damage: 500, health: 250, defense: 125, power: 5000, price: 5000 },
      { level: 5, damage: 1000, health: 500, defense: 250, power: 10000, price: 10000 },
    ]
  }, []);
  const [inputValue, setInputValue] = useState(100);
  const userLevel = Math.ceil(user?.buildings?.train?.level / 10);
  const troopsPrice = troopsLevelInfo[userLevel - 1]?.price * inputValue;
  const dispatch = useDispatch();
  const handleBuyTroops = () => {
    dispatch(buyTroops({ level: userLevel, quantity: inputValue }));
  };
  return (
    <div className="w-full absolute bg-orange-500/20 h-screen inset-0 flex items-center justify-center">
      <div className="min-w-90 max-w-90 m-2 md:m-0 gb borderShadow rounded-lg flex flex-col items-center gap-1 relative">
        {
          user?.buildings?.train?.level >= 1 ? (
            <>
              <p className="text-2xl font-bold text-orange-200 ts">Level {userLevel}</p>
              <X onClick={closeTrain} className="absolute top-2 right-2 myShadow hoverEffect" size={30} />
              <img src={`/pages/HomePage/train/char-${userLevel}.svg`} alt="Level" />
              <div className="w-full flex flex-col items-center">
                <div className="w-full flex items-center justify-center gap-2 px-4">
                  <input type="number" min={1} max={10000} value={inputValue} onChange={e => setInputValue(e.target.value)} className="w-20 borderShadow rounded p-1 outline-none font-bold ts text-orange-200" />
                  <input type="range" min={1} max={10000} value={inputValue} onChange={e => setInputValue(e.target.value)} className="w-full rangeStyle" />
                </div>
                <div className="flex text-orange-200 ts font-bold bg-black borderShadow rounded px-2 items-center py-0.5 gap-2">
                  <div className="flex">
                    <p className="">{troopsPrice} </p>
                    <img src="/pages/HomePage/coin.svg" alt="Coin" className="w-5 h-5" />
                    {
                      user?.resources.coins >= troopsPrice ?
                        <Check className="text-green-600" /> :
                        <X className="text-red-600" />
                    }
                  </div>
                  <button onClick={handleBuyTroops} className="gbg borderShadow rounded p-1 hoverEffect font-bold ts text-orange-200">Buy</button>
                </div>
              </div>
              <div className="flex flex-col w-full px-5">
                <div className="w-full flex items-center justify-center gap-1">
                  <div className="w-full relative">
                    <p className="text-orange-500 ts text-sm font-bold bg-black rounded-full px-1 borderShadow w-fit">Damage(D)</p>
                    <meter min={0} max={troopsLevelInfo[4]?.damage} value={troopsLevelInfo[Math.ceil(user?.buildings?.train?.level / 10) - 1]?.damage || 0} className="w-full meterStyle h-5 myShadow" />
                    <div className="text-xs font-bold text-orange-200 ts absolute right-0 top-3 bg-black rounded-full px-1 borderShadow">{troopsLevelInfo[Math.ceil(user?.buildings?.train?.level / 10) - 1]?.damage || 0} / {troopsLevelInfo[4]?.damage}</div>
                  </div>
                </div>
                <div className="w-full flex items-center justify-center gap-2">
                  <div className="w-full relative">
                    <p className="text-orange-500 ts text-sm font-bold bg-black rounded-full px-1 borderShadow w-fit">Health(H)</p>
                    <meter min={0} max={troopsLevelInfo[4]?.health} value={troopsLevelInfo[Math.ceil(user?.buildings?.train?.level / 10) - 1]?.health || 0} className="w-full meterStyle h-5 myShadow" />
                    <div className="text-xs font-bold text-orange-200 ts absolute right-0 top-3 bg-black rounded-full px-1 borderShadow">{troopsLevelInfo[Math.ceil(user?.buildings?.train?.level / 10) - 1]?.health || 0} / {troopsLevelInfo[4]?.health}</div>
                  </div>
                </div>
                <div className="w-full flex items-center justify-center gap-2">
                  <div className="w-full relative">
                    <p className="text-orange-500 ts text-sm font-bold bg-black rounded-full px-1 borderShadow w-fit">Defense(De)</p>
                    <meter min={0} max={troopsLevelInfo[4]?.defense} value={troopsLevelInfo[Math.ceil(user?.buildings?.train?.level / 10) - 1]?.defense || 0} className="w-full meterStyle h-5 myShadow" />
                    <div className="text-xs font-bold text-orange-200 ts absolute right-0 top-3 bg-black rounded-full px-1 borderShadow">{troopsLevelInfo[Math.ceil(user?.buildings?.train?.level / 10) - 1]?.defense || 0} / {troopsLevelInfo[4]?.defense}</div>
                  </div>
                </div>
              </div></>
          ) : <div className="p-10">
            <X onClick={closeTrain} className="absolute top-2 right-2 myShadow hoverEffect" size={30} />
            <p className="text-2xl font-bold text-orange-200 ts">Level 1 Train Required</p>
          </div>
        }
      </div>
    </div>
  )
}

export default Train