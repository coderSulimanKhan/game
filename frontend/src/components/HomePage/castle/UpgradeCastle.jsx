import { Check, X } from "lucide-react"
import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux"
import { upgradeCastle } from "../../../store/user.store.js";

const UpgradeCastle = ({ closeCastleUpgrade }) => {
  const { user } = useSelector(state => state.user);
  const castleInfo = useMemo(() => {
    return [
      [1, 100, "c", 50],
      [2, 200, "c", 100],
      [3, 300, "c", 500],
      [4, 400, "c", 1000],
      [5, 500, "c", 1500],
      [6, 600, "c", 3000],
      [7, 700, "c", 5000],
      [8, 800, "c", 10000],
      [9, 900, "c", 12000],
      [10, 1000, "c", 20000],
      [11, 100, "d", 30000],
      [12, 200, "d", 35000],
      [13, 300, "d", 50000],
      [14, 400, "d", 60000],
      [15, 500, "d", 70000],
      [16, 600, "d", 80000],
      [17, 700, "d", 90000],
      [18, 800, "d", 100000],
      [19, 900, "d", 120000],
      [20, 1000, "d", 150000],
      [21, 100000, "c", 170000],
      [22, 200000, "c", 190000],
      [23, 300000, "c", 200000],
      [24, 400000, "c", 220000],
      [25, 500000, "c", 230000],
      [26, 600000, "c", 250000],
      [27, 700000, "c", 280000],
      [28, 800000, "c", 300000],
      [29, 900000, "c", 330000],
      [30, 1000000, "c", 350000],
      [31, 2000, "d", 400000],
      [32, 2200, "d", 450000],
      [33, 2400, "d", 500000],
      [34, 2600, "d", 560000],
      [35, 2800, "d", 610000],
      [36, 3000, "d", 700000],
      [37, 3200, "d", 770000],
      [38, 3400, "d", 800000],
      [39, 3600, "d", 900000],
      [40, 3800, "d", 1000000],
      [41, 200000, "c", 1100000],
      [42, 250000, "c", 1200000],
      [43, 300000, "c", 1300000],
      [44, 350000, "c", 1400000],
      [45, 400000, "c", 1500000],
      [46, 450000, "c", 1600000],
      [47, 500000, "c", 1700000],
      [48, 550000, "c", 1800000],
      [49, 600000, "c", 1900000],
      [50, 650000, "c", 2000000],
    ];
  }, []);
  const dispatch = useDispatch();
  const handleUpgradeCastle = () => {
    console.log("upgrade");
    dispatch(upgradeCastle());
  };
  return (
    <div className="w-full absolute bg-orange-500/20 h-screen inset-0 flex items-center justify-center">
      <div className="min-w-90 max-w-90 m-2 md:m-0 gb borderShadow rounded-lg flex flex-col items-center gap-2 p-1 relative">
        {
          user?.buildings?.castle?.level < 50 ? (
            <>
              <p className="text-2xl font-bold text-orange-200 ts ">Level <span className="bg-red-700/70 px-1.5 rounded-full borderShadow">{user?.buildings?.castle?.level + 1}</span></p>
              <X onClick={closeCastleUpgrade} className="myShadow hoverEffect text-end absolute top-1 right-1 hoverEfect" size={30} />
              <div className="borderShadow px-3 py-1 rounded-lg bg-black">
                <p className="text-lg font-bold text-red-500 ts">Required Resources</p>
                <div className="flex justify-between items-center gap-2 text-orange-200 font-bold">
                  <div className="flex">
                    <span className="bg-orange-800/60 px-1 rounded-full">{castleInfo[user?.buildings?.castle?.level][1]}</span>
                    <img className="w-6" src={`/pages/HomePage/${castleInfo[user?.buildings?.castle?.level][2] === "c" ? "coin" : "gem2"}.svg`} alt="" />
                  </div>
                  <div className="">
                    {
                      castleInfo[user?.buildings?.castle?.level][2] === "c" && user?.resources?.coins >= castleInfo[user?.buildings?.castle?.level][1] ?
                        <Check className="text-green-600" /> :
                        castleInfo[user?.buildings?.castle?.level][2] === "d" && user?.resources?.diamonds >= castleInfo[user?.buildings?.castle?.level][1] ?
                          <Check className="text-green-600" /> :
                          <X className="text-red-600" />
                    }
                  </div>
                </div>
              </div>
              <button onClick={handleUpgradeCastle} className="gbg borderShadow rounded-lg p-1 hoverEffect font-bold text-orange-200 ts">Upgrade</button>
            </>
          ) :
            <div className="">
              <p className="text-4xl font-bold text-orange-200 ts">Maxed</p>
              <X onClick={closeCastleUpgrade} className="myShadow hoverEffect text-end absolute top-1 right-1 hoverEfect" size={30} />
            </div>
        }
      </div>
    </div>
  )
}

export default UpgradeCastle