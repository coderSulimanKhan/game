import { X } from "lucide-react";
import { useMemo } from "react";
import { useSelector } from "react-redux";

const TrainInfo = ({ closeTrainInfo }) => {
  const { user } = useSelector(state => state.user);
  const trainInfo = useMemo(() => {
    return [
      [1, 50, "c", 25],
      [2, 100, "c", 50],
      [3, 150, "c", 250],
      [4, 200, "c", 500],
      [5, 250, "c", 800],
      [6, 300, "c", 1500],
      [7, 350, "c", 2500],
      [8, 400, "c", 5000],
      [9, 450, "c", 6000],
      [10, 500, "c", 10000],
      [11, 50, "d", 15000],
      [12, 100, "d", 18000],
      [13, 150, "d", 25000],
      [14, 200, "d", 30000],
      [15, 250, "d", 35000],
      [16, 300, "d", 40000],
      [17, 350, "d", 45000],
      [18, 400, "d", 50000],
      [19, 450, "d", 60000],
      [20, 500, "d", 75000],
      [21, 50000, "c", 850000],
      [22, 100000, "c", 950000],
      [23, 150000, "c", 100000],
      [24, 200000, "c", 110000],
      [25, 250000, "c", 130000],
      [26, 300000, "c", 150000],
      [27, 350000, "c", 180000],
      [28, 400000, "c", 200000],
      [29, 450000, "c", 300000],
      [30, 500000, "c", 330000],
      [31, 1000, "d", 400000],
      [32, 1100, "d", 450000],
      [33, 1200, "d", 500000],
      [34, 1300, "d", 560000],
      [35, 1400, "d", 610000],
      [36, 1500, "d", 700000],
      [37, 1600, "d", 770000],
      [38, 1700, "d", 800000],
      [39, 1800, "d", 900000],
      [40, 1900, "d", 1000000],
      [41, 600000, "c", 1100000],
      [42, 1200000, "c", 1200000],
      [43, 1500000, "c", 1300000],
      [44, 1800000, "c", 1400000],
      [45, 2000000, "c", 1500000],
      [46, 2300000, "c", 1600000],
      [47, 2500000, "c", 1700000],
      [48, 2800000, "c", 1800000],
      [49, 3000000, "c", 1900000],
      [50, 3300000, "c", 2000000],
    ];
  }, []);
  return (
    <div className="w-full absolute bg-orange-500/20 h-screen inset-0 flex items-center justify-center">
      <div className="min-w-90 max-w-90 m-2 h-[60vh] overflow-y-scroll overflow-x-hidden md:m-0 gb borderShadow rounded-lg flex flex-col items-center gap-1 relative styledScrollbar">
        <div className="flex">
          <p className="text-2xl text-orange-200 ts font-bold">Train Info</p>
          <X onClick={closeTrainInfo} className="myShadow hoverEffect absolute right-1 top-1" size={30} />
        </div>
        <div className="w-full">
          <table className="w-full text-center">
            <thead className="text-md text-black myShadow font-bold">
              <th>Level</th>
              <th>Power</th>
              <th>Priviliges</th>
            </thead>
            <tbody>
              {trainInfo.map(([level, , , power]) => (
                <tr key={level} className={`${user?.buildings?.train?.level === level ? "bg-black" : ""} border-b border-orange-300/50`}>
                  <td className="text-orange-500 myShadow font-bold">{level}</td>
                  <td className="text-orange-400 ts font-bold">+{power}</td>
                  <td className="text-xs text-orange-300 ts font-bold">TC+{level * 100} / T Level {Math.ceil((level / 10))}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default TrainInfo