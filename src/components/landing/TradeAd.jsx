import { BackgroundBeams } from "../ui/background-beams";
import networkImage from "../../assets/image/network.png";

const TradeAd = () => {
  return (
    <div className="w-full relative flex flex-col lg:flex-row items-center justify-center gap-8 py-12 md:py-24 lg:py-36">
      <div className="flex flex-col">
        <p className="text-theme-light font-semibold text-base md:text-lg">
          ETHEREUM HERE
        </p>
        <p className="text-gray-200 text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold py-4 md:py-8">
          Gasless, Taxless, Impactless Trades
        </p>
        <p className="text-gray-400 text-base md:text-lg lg:text-xl text-justify">
          Because AnyDex’s synthetic trades model is trading representations of
          the asset’s quoted value rather than the asset itself, it can bypass
          gas fees. Meanwhile, because the assets are backed by USDT rather than
          asset liquidity positions, there are no third-party market maker or LP
          fees to account for.
        </p>
      </div>
      <img src={networkImage} className="w-full sm:w-2/3 lg:w-1/2 py-8" />
      <BackgroundBeams />
    </div>
  );
};

export default TradeAd;
