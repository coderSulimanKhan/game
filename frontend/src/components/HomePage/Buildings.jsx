import { useState } from "react";

const Buildings = ({ device }) => {
  const [isOpenCastleMoreOptions, setIsOpenCastleMoreOptions] = useState(true);
  const [isOpenTrainMoreOptions, setIsOpenTrainMoreOptions] = useState(false);
  const [isOpenTechMoreOptions, setIsOpenTechMoreOptions] = useState(false);

  const toggleCastleMoreOptions = () => {
    setIsOpenCastleMoreOptions(!isOpenCastleMoreOptions);
  }

  const toggleTrainMoreOptions = () => {
    setIsOpenTrainMoreOptions(!isOpenTrainMoreOptions);
  }

  const toggleTechMoreOptions = () => {
    setIsOpenTechMoreOptions(!isOpenTechMoreOptions);
  }

  const openCastleMoreOptions = () => {
    setIsOpenCastleMoreOptions(true);
  }

  const closeCastleMoreOptions = () => {
    setIsOpenCastleMoreOptions(false);
  }

  const openTrainMoreOptions = () => {
    setIsOpenTrainMoreOptions(true);
  }

  const closeTrainMoreOptions = () => {
    setIsOpenTrainMoreOptions(false);
  }

  const openTechMoreOptions = () => {
    setIsOpenTechMoreOptions(true);
  }

  const closeTechMoreOptions = () => {
    setIsOpenTechMoreOptions(false);
  }

  return device === "desktop" ? (
    <div className="hidden xl:flex w-full items-center justify-center flex-col relative">
      {/* first section */}
      <div className="flex w-full px-20 items-center justify-between relative mb-100">
        {/* <div className="">
          <img src="/buildings/hunt.svg" alt="Hunt" className="w-1/9" />
        </div> */}

        <div onClick={toggleTrainMoreOptions} className="flex flex-col items-center gap-0.5 relative">
          <img src="/buildings/training.svg" alt="Training" className="w-24 mt-65 myShadow" />
          <p className="font-bold text-orange-100 text-xl ts gb borderShadow rounded-full px-2">Train <span className="gbg px-2 rounded-full borderShadow text-lg">3</span></p>
          {
            isOpenTrainMoreOptions && (
              <div className="absolute top-98 font-bold text-orange-100 ts text-md flex gap-4 gbg borderShadow rounded-lg px-2 py-1">
                <div className="gb px-2 borderShadow rounded-lg hoverEffect">Info</div>
                <div className="gb px-2 borderShadow rounded-lg hoverEffect">Updgrade</div>
                <div className="gb px-2 borderShadow rounded-lg hoverEffect">Train</div>
              </div>
            )
          }
        </div>
        <div onClick={toggleCastleMoreOptions} className="flex flex-col items-center gap-1">
          <img src="/buildings/castle.svg" alt="Castle" className="w-50 myShadow" />
          <p className="font-bold text-orange-100 text-2xl ts gb borderShadow rounded-full px-2">Castle <span className="gbg px-2 rounded-full borderShadow">1</span></p>
          {
            isOpenCastleMoreOptions && (
              <div className="absolute top-90 font-bold text-orange-100 ts text-md flex gap-4 gbg borderShadow rounded-lg px-2 py-1">
                <div className="gb px-2 borderShadow rounded-lg hoverEffect">Info</div>
                <div className="gb px-2 borderShadow rounded-lg hoverEffect">Updgrade</div>
                <div className="gb px-2 borderShadow rounded-lg hoverEffect">PowerUps</div>
              </div>
            )
          }
        </div>
        <div onClick={toggleTechMoreOptions} className="flex flex-col items-center gap-0.5">
          <img src="/buildings/tech.svg" alt="Tech" className="w-20 mt-55 myShadow2" />
          <p className="font-bold text-orange-100 text-xl ts gb borderShadow rounded-full px-2">Tech <span className="gbg px-2 rounded-full borderShadow text-lg">2</span></p>
          {
            isOpenTechMoreOptions && (
              <div className="absolute top-98 font-bold text-orange-100 ts text-md flex gap-4 gbg borderShadow rounded-lg px-2 py-1">
                <div className="gb px-2 borderShadow rounded-lg hoverEffect">Info</div>
                <div className="gb px-2 borderShadow rounded-lg hoverEffect">Updgrade</div>
                <div className="gb px-2 borderShadow rounded-lg hoverEffect">Tech</div>
              </div>
            )
          }
        </div>
      </div>
      {/* - first section */}
    </div>) :
    // Mobile
    <div className="xl:hidden border-4 h-[73vh] pt-120 flex items-center justify-center flex-col relative">
      {/* first section */}
      <div className="flex w-full gap-4 px-2 border md:gap-30 items-center justify-center relative mb-100">
        {/* <div className="">
          <img src="/buildings/hunt.svg" alt="Hunt" className="w-1/9" />
        </div> */}

        <div onClick={toggleTrainMoreOptions} className="flex flex-col items-center gap-0.5 relative">
          <img src="/buildings/training.svg" alt="Training" className="w-20 mt-65 myShadow" />
          <p className="font-bold w-24 text-orange-100 text-xl ts gb borderShadow rounded-full px-2">Train <span className="gbg px-2 rounded-full borderShadow text-lg">3</span></p>
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
          <p className="font-bold w-32 text-orange-100 text-2xl ts gb borderShadow rounded-full px-2">Castle <span className="gbg px-2 rounded-full borderShadow">1</span></p>
          {
            isOpenCastleMoreOptions && (
              <div className="absolute top-45 font-bold text-orange-100 ts text-md flex flex-col gap-2 gbg borderShadow rounded-lg p-2">
                <div className="gb px-2 borderShadow rounded-lg hoverEffect text-center">Info</div>
                <div className="gb px-2 borderShadow rounded-lg hoverEffect">Updgrade</div>
                <div className="gb px-2 borderShadow rounded-lg hoverEffect text-center">PowerUps</div>
              </div>
            )
          }
        </div>
        <div onClick={toggleTechMoreOptions} className="flex flex-col items-center gap-0.5">
          <img src="/buildings/tech.svg" alt="Tech" className="w-18 mt-55 myShadow2" />
          <p className="font-bold w-24 text-orange-100 text-xl ts gb borderShadow rounded-full px-2">Tech <span className="gbg px-2 rounded-full borderShadow text-lg">2</span></p>
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