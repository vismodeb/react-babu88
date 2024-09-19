import { Link } from "react-router-dom";

const GameCard = () => {
  return (
    <div className="">
      <div className="relative group overflow-hidden ">
        <img
          className="w-full h-28 sm:h-auto object-cover rounded-[20px] lg:rounded-xl"
          src={"https://luckmedia.link/evo_lightning_storm/thumb.webp"}
          alt=""
        />
        <div className="absolute w-full h-full top-0 left-0 bg-white opacity-0 z-10 transition-opacity duration-300 group-hover:opacity-70 rounded-[20px] lg:rounded-xl"></div>
        <Link className="hidden sm:block">
          <img
            className="filter-none grayscale hover:filter absolute top-1/4 left-1/2 transform -translate-x-1/2 translate-y-16 opacity-0 transition-transform duration-300 group-hover:translate-y-0 group-hover:opacity-100 z-20"
            src={"https://www.babu88.app/static/svg/play_btn.svg"}
            alt=""
          />
        </Link>
      </div>
      <div className="hidden md:block">
        <h2 className="text-lg font-semibold">Lightning Storm</h2>
        <p className="mt-1 text-xs font-semibold">EVOLUTION GAMING</p>
      </div>
    </div>
  );
};

export default GameCard;
