import { X } from "lucide-react"
import { useSelector } from "react-redux"

const Vip = ({ closeVip }) => {
  const { user } = useSelector(state => state.user);
  return (
    <div className="w-full absolute bg-orange-500/20 h-screen inset-0 flex items-center justify-center">
      <div className="min-w-90 max-w-90 m-2 md:m-0 gb borderShadow rounded-lg flex flex-col items-center gap-2">
        <div className="w-full text-center relative">
          <h1 className="text-2xl font-bold text-orange-300 ts">VIP Level</h1>
          <X onClick={closeVip} className="myShadow hoverEffect text-end absolute top-1 right-1 hoverEfect" size={30} />
        </div>
        <div className="flex w-full items-center justify-center gap-1 px-1">
          <div className="w-full relative">
            <meter value={user?.vipPoints % 2000} min={0} max={2000} className="meterStyle myShadow2 w-full h-6"></meter>
            <p className="absolute right-0 top-5 font-bold text-orange-200 ts"><span>{user?.vipPoints % 2000}</span> / <span>{2000}</span></p>
          </div>
          <div className="relative">
            <img src="/pages/HomePage/vip-level.svg" className="w-18 myShadow" alt="VIP" />
            <p className="absolute top-2.5 right-5.5 text-3xl font-bold text-orange-200 ts">{Math.floor(user?.vipPoints / 2000)}</p>
          </div>
        </div>
        <div className="flex flex-col w-9/10 borderShadow rounded-lg px-2 rbg">
          <h1 className="text-3xl font-bold text-orange-200 ts">Priviliges</h1>
          <p className="text-lg font-bold">Troops Capacity <span className="text-orange-200 ts">+{Math.floor((user?.vipPoints / 2000)) * 1000}</span></p>
          <p className="text-lg font-bold">Troops Damage <span className="text-orange-200 ts">+{Math.floor((user?.vipPoints / 2000)) * 10}%</span></p>
          <p className="text-lg font-bold">Troops Health <span className="text-orange-200 ts">+{Math.floor((user?.vipPoints / 2000)) * 5}%</span></p>
          <p className="text-lg font-bold">Radar Radius <span className="text-orange-200 ts">+{Math.floor((user?.vipPoints / 2000)) * 20} meters</span></p>
        </div>
        <div className="w-9/10 flex flex-col gap-1 borderShadow mb-3 p-1 rounded gbg text-lg font-bold text-orange-200 ts">
          <div className="flex items-center justify-between borderShadow gb rounded px-2">
            <p className="">100 Points</p>
            <p className="">200 PKR</p>
            <button className="borderShadow my-2 px-2 rounded gbg hoverEffect">Buy</button>
          </div>
          <div className="flex borderShadow rbg rounded px-2 items-center justify-between">
            <p className="">1000 Points</p>
            <p className="">500 PKR</p>
            <div className="relative">
              <img src="/pages/HomePage/vip-discount.svg" alt="Discount" className="w-11" />
              <p className="absolute top-3 right-2 text-xs font-bold text-orange-200 ts">-50%</p>
            </div>
            <button className="borderShadow my-2 px-2 rounded gbg hoverEffect">Buy</button>
          </div>
          <div className="flex borderShadow rbg rounded px-2 items-center justify-between">
            <p className="">10000 Points</p>
            <p className="">5000 PKR</p>
            <div className="relative">
              <img src="/pages/HomePage/vip-discount.svg" alt="Discount" className="w-11" />
              <p className="absolute top-3 right-2 text-xs font-bold text-orange-200 ts">-50%</p>
            </div>
            <button className="borderShadow my-2 px-2 rounded gbg hoverEffect">Buy</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Vip