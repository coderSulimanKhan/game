import { X } from "lucide-react";
import { useMemo } from "react";
import { useSelector } from "react-redux";

const TechInfo = ({ closeTechInfo }) => {
  const { user } = useSelector(state => state.user);
  const techInfo = useMemo(() => {
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
          <p className="text-2xl text-orange-200 ts font-bold">Tech Info</p>
          <X onClick={closeTechInfo} className="myShadow hoverEffect absolute right-1 top-1" size={30} />
        </div>
        <div className="w-full">
          <table className="w-full text-center">
            <thead className="text-md text-black myShadow font-bold">
              <th>Level</th>
              <th>Power</th>
              <th>Priviliges</th>
            </thead>
            <tbody>
              {techInfo.map(([level, , , power]) => (
                <tr key={level} className={`${user?.buildings?.tech?.level === level ? "bg-black" : ""} border-b border-orange-300/50`}>
                  <td className="text-orange-500 myShadow font-bold">{level}</td>
                  <td className="text-orange-400 ts font-bold">+{power}</td>
                  <td className="text-xs text-orange-300 ts font-bold">
                    {
                      level === 1 && "D Level 1" ||
                      level === 2 && "De Level 1" ||
                      level === 3 && "H Level 1" ||
                      level === 4 && "R Level 1" ||
                      level === 5 && "D Level 2" ||
                      level === 6 && "De Level 2" ||
                      level === 7 && "H Level 2" ||
                      level === 8 && "R Level 2" ||
                      level === 9 && "D Level 3" ||
                      level === 10 && "De Level 3" ||
                      level === 11 && "H Level 3" ||
                      level === 12 && "R Level 3" ||
                      level === 13 && "D Level 4" ||
                      level === 14 && "De Level 4" ||
                      level === 15 && "H Level 4" ||
                      level === 16 && "R Level 4" ||
                      level === 17 && "D Level 5" ||
                      level === 18 && "De Level 5" ||
                      level === 19 && "H Level 5" ||
                      level === 20 && "R Level 5" ||
                      level === 21 && "D Level 6" ||
                      level === 22 && "De Level 6" ||
                      level === 23 && "H Level 6" ||
                      level === 24 && "R Level 6" ||
                      level === 25 && "D Level 7" ||
                      level === 26 && "De Level 7" ||
                      level === 27 && "H Level 7" ||
                      level === 28 && "R Level 7" ||
                      level === 29 && "D Level 8" ||
                      level === 30 && "De Level 8" ||
                      level === 31 && "H Level 8" ||
                      level === 32 && "R Level 8" ||
                      level === 33 && "D Level 9" ||
                      level === 34 && "De Level 9" ||
                      level === 35 && "H Level 9" ||
                      level === 36 && "R Level 9" ||
                      level === 37 && "D Level 10" ||
                      level === 38 && "De Level 10" ||
                      level === 39 && "H Level 10" ||
                      level === 40 && "R Level 10" ||
                      level === 41 && "D Level 11" ||
                      level === 42 && "De Level 11" ||
                      level === 43 && "H Level 11" ||
                      level === 44 && "R Level 11" ||
                      level === 45 && "D Level 12" ||
                      level === 46 && "De Level 12" ||
                      level === 47 && "H Level 12" ||
                      level === 48 && "R Level 12" ||
                      level === 49 && "KING BOSS" ||
                      level === 50 && "QUEEN BOSS"
                    }
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default TechInfo