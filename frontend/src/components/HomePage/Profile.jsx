import { useDispatch, useSelector } from "react-redux"
import { getRank, logout } from "../../store/user.store.js";
import { LogOut, X } from "lucide-react";

const Profile = ({ closeProfile }) => {
  const { user } = useSelector(state => state.user);
  const dispatch = useDispatch();
  dispatch(getRank(user?._id));
  const { rank } = useSelector(state => state.user);
  const logoutUser = () => {
    dispatch(logout());
  }
  return (
    <div className="w-full absolute bg-orange-500/20 h-screen inset-0 flex items-center justify-center">
      <div className="min-w-90 max-w-90 m-2 md:m-0 gb borderShadow rounded-lg flex flex-col items-center gap-10">
        <div className="w-full relative">
          <div className="absolute right-2 top-2">
            <X onClick={closeProfile} className="myShadow hoverEffect" size={30} />
          </div>
          <img className="w-50 mx-auto relative top-5" src={user?.image} alt={user?.name} />
          <div className="absolute top-20 left-14 bg-black rounded-full borderShadow">
            {
              rank === 1 ?
                <img src="/pages/HomePage/ranks/profile/1.svg" alt={rank} className="w-20" />
                : rank === 2 ?
                  <img src="/pages/HomePage/ranks/profile/2.svg" alt={rank} className="w-20" />
                  : rank === 3 ?
                    <img src="/pages/HomePage/ranks/profile/3.svg" alt={rank} className="w-20" />
                    : rank <= 10 ?
                      <div className="flex relative">
                        <img src="/pages/HomePage/ranks/profile/4-10.svg" alt={rank} className="w-20" />
                        <p className="text-xl font-bold absolute left-8.5 top-5 ts text-white">{rank}</p>
                      </div>
                      : <p className="text-3xl font-bold ts text-orange-200 px-2">{rank}</p>
            }
          </div>
          <div className="">
            {
              user?.vipPoints / 1000 >= 1 &&
              <div className="absolute top-23 right-16 rounded-full myShadow">
                <img src="/pages/HomePage/vip-level.svg" className="w-14" alt="VIP" />
                <p className="absolute text-3xl font-bold text-orange-100 top-2 left-5">{user?.vipPoints / 1000}</p>
              </div>
            }
          </div>
          <div className="absolute top-50 text-center w-full bg-black borderShadow rounded-full flex items-center justify-center">
            <img src={"/pages/HomePage/power.svg"} className="w-6" alt="Power" />
            <p className="text-3xl font-bold ts text-orange-200">{user?.power}</p>
          </div>
        </div>
        <div className="w-full px-3">
          <div className="text-3xl font-bold ts text-orange-200 text-center w-full">{user?.name || "--"}</div>
          <div className="borderShadow rounded-lg h-20 flex items-center justify-center gap-3">
            {
              user?.achievements?.length > 0 ?
                user?.achievements?.map(ach => (
                  <img src={ach?.name} alt={ach?.name} className="w-16 myShadow" />
                ))
                : <p className="text-lg font-bold text-orange-300 ts">No achievements yet</p>
            }
          </div>
          <div className="flex items-center justify-between">
            <button onClick={logoutUser} className="flex items-center justify-center p-2 rbg rounded-lg my-2 borderShadow hoverEffect font-bold text-orange-400 ts">
              <LogOut />
            </button>
            <p className="text-lg md:text-lg font-bold text-orange-300 ts">
              {/* logout lucide react icons */}
              ID: <span className="selectable">{user?._id}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile