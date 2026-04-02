import { useState } from "react";
import { useSelector } from "react-redux";

const Buildings = ({ openCastleInfo, openCasteleUpdrade }) => {
  const { user } = useSelector(state => state.user);
  const [isOpenCastleMoreOptions, setIsOpenCastleMoreOptions] = useState(false);
  const [isOpenTrainMoreOptions, setIsOpenTrainMoreOptions] = useState(false);
  const [isOpenTechMoreOptions, setIsOpenTechMoreOptions] = useState(false);

  const toggleCastleMoreOptions = () => {
    console.log("castle is clicked");
    setIsOpenCastleMoreOptions(!isOpenCastleMoreOptions);
  }

  const toggleTrainMoreOptions = () => {
    setIsOpenTrainMoreOptions(!isOpenTrainMoreOptions);
  }

  const toggleTechMoreOptions = () => {
    setIsOpenTechMoreOptions(!isOpenTechMoreOptions);
  }

  // const openCastleMoreOptions = () => {
  //   setIsOpenCastleMoreOptions(true);
  // }

  // const closeCastleMoreOptions = () => {
  //   setIsOpenCastleMoreOptions(false);
  // }

  // const openTrainMoreOptions = () => {
  //   setIsOpenTrainMoreOptions(true);
  // }

  // const closeTrainMoreOptions = () => {
  //   setIsOpenTrainMoreOptions(false);
  // }

  // const openTechMoreOptions = () => {
  //   setIsOpenTechMoreOptions(true);
  // }

  // const closeTechMoreOptions = () => {
  //   setIsOpenTechMoreOptions(false);
  // }

  return <div className="h-[73vh] pt-30 lg:pt-50 flex items-center justify-center flex-col relative xl:left-25 xl:top-10">
    {/* first section */}
    <div className="flex w-full gap-4 px-2 md:gap-30 items-center justify-center relative mb-115">
      {/* <div className="">
          <img src="/buildings/hunt.svg" alt="Hunt" className="w-1/9" />
        </div> */}

      <div onClick={toggleTrainMoreOptions} className="flex flex-col items-center gap-0.5 relative">
        <img src="/buildings/training.svg" alt="Training" className="w-20 mt-65 myShadow" />
        <p className="font-bold w-23 text-orange-100 text-xl ts gb borderShadow rounded-full text-center">Train <span className="gbg px-2 rounded-full borderShadow text-lg">3</span></p>
        {
          isOpenTrainMoreOptions && (
            <div className="absolute top-75 font-bold text-orange-100 ts text-md flex flex-col gap-2 gbg borderShadow rounded-lg p-2">
              <div className="gb px-2 borderShadow rounded-lg hoverEffect text-center">Info</div>
              <div className="gb px-2 borderShadow rounded-lg hoverEffect">Updgrade</div>
              <div className="gb px-2 borderShadow rounded-lg hoverEffect text-center">Train</div>
            </div>
          )
        }
      </div>
      <div onClick={toggleCastleMoreOptions} className="flex flex-col items-center gap-1 top-10 relative">
        <img src="/buildings/castle.svg" alt="Castle" className="w-50 myShadow" />
        <p className="font-bold w-fit px-1 text-orange-100 text-2xl ts gb borderShadow rounded-full text-center">Castle <span className="gbg px-2 rounded-full borderShadow">{user?.buildings?.castle?.level}</span></p>
        {
          isOpenCastleMoreOptions && (
            <div className="absolute top-45 font-bold text-orange-100 ts text-md flex flex-col gap-2 gbg borderShadow rounded-lg p-2">
              <div onClick={openCastleInfo} className="gb px-2 borderShadow rounded-lg hoverEffect text-center">Info</div>
              <div onClick={openCasteleUpdrade} className="gb px-2 borderShadow rounded-lg hoverEffect">Updgrade</div>
              <div className="gb px-2 borderShadow rounded-lg hoverEffect text-center">PowerUps</div>
            </div>
          )
        }
      </div>
      <div onClick={toggleTechMoreOptions} className="flex flex-col items-center gap-0.5">
        <img src="/buildings/tech.svg" alt="Tech" className="w-18 mt-55 myShadow2" />
        <p className="font-bold w-23 text-orange-100 text-xl ts gb borderShadow rounded-full text-center">Tech <span className="gbg px-2 rounded-full borderShadow text-lg">2</span></p>
        {
          isOpenTechMoreOptions && (
            <div className="absolute top-75 font-bold text-orange-100 ts text-md flex flex-col gap-2 gbg borderShadow rounded-lg p-2">
              <div className="gb px-2 borderShadow rounded-lg hoverEffect text-center">Info</div>
              <div className="gb px-2 borderShadow rounded-lg hoverEffect">Updgrade</div>
              <div className="gb px-2 borderShadow rounded-lg hoverEffect text-center">Tech</div>
            </div>
          )
        }
      </div>
    </div>
    {/* - first section */}
  </div>;
}

export default Buildings