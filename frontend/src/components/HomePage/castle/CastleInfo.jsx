import { X } from "lucide-react"
import { useMemo } from "react"
import { useSelector } from "react-redux";

const CastleInfo = ({ closeCastleInfo }) => {
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
  return (
    <div className="w-full absolute bg-orange-500/20 h-screen inset-0 flex items-center justify-center">
      <div className="min-w-90 max-w-90 m-2 h-[60vh] overflow-y-scroll md:m-0 gb borderShadow rounded-lg flex flex-col items-center gap-1 relative styledScrollbar">
        <div className="flex">
          <p className="text-2xl text-orange-200 ts font-bold">Castle Info</p>
          <X onClick={closeCastleInfo} className="myShadow hoverEffect absolute right-1 top-1" size={30} />
        </div>
        <div className="w-full">
          <table className="w-full text-center">
            <thead className="text-md text-black myShadow font-bold">
              <th>Level</th>
              <th>Power</th>
              <th>Priviliges</th>
            </thead>
            <tbody>
              {castleInfo.map(([level, , , power]) => (
                <tr key={level} className={`${user?.buildings?.castle?.level === level ? "bg-black" : ""} border-b border-orange-300/50`}>
                  <td className="text-orange-500 myShadow font-bold">{level}</td>
                  <td className="text-orange-400 ts font-bold">+{power}</td>
                  <td className="text-xs text-orange-300 ts font-bold">D+{level}%/H+{level}%/De+{level}%/TC+{level * 20}/R+{level * 10}m</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default CastleInfo