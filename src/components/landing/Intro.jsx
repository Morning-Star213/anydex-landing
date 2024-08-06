import { Vortex } from "../ui/vortex";

import icon1 from "../../assets/image/icon1.png";
import GradientButton from "../common/button/GradientButton";
import "./index.css";

const Intro = () => {
  return (
    <div className="w-full mx-auto rounded-md overflow-hidden">
      <Vortex
        backgroundColor="#000212"
        className="flex items-center flex-col justify-center px-2 md:px-10 w-full h-full"
      >
        <div className="w-full h-screen flex flex-col justify-center items-center font-bold">
          <div className="text-gray-200 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-center">
            A&nbsp;
            <span className="gradient">New Era</span>
            &nbsp;Of Crypto Exchange
          </div>
          <div className="text-sm sm:text-lg lg:text-xl xl:text-2xl text-gray-400 text-center pt-6 lg:pt-8">
            AnyDex is the first DEX that connects the worlds of DeFi, RWA, and
            TradFi for gas, tax, and decentralized trading.
          </div>
          <GradientButton
            content="Get Started"
            size="auto"
            className={"mt-8"}
          />
        </div>
      </Vortex>
    </div>
  );
};

export default Intro;
