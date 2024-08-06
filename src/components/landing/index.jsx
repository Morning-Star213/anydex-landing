import { motion } from "framer-motion";

import Intro from "./Intro";
import Price from "./Price";
import TradeAd from "./TradeAd";
import Revenue from "./Revenue";
import Roadmap from "./Roadmap";
import Tokenomics from "./Tokenomics";
import FAQ from "./FAQ";

const index = () => {
  return (
    <div className="bg-background 2xl:px-72 xl:px-48 lg:px-36 md:px-24 sm:px-16 px-8 w-full">
      <motion.div
        initial={{ opacity: 0.0, y: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative w-full"
      >
        <Intro />
        <Price />
        <TradeAd />
        <Revenue />
        <Roadmap />
        <Tokenomics />
        <FAQ />
      </motion.div>
    </div>
    // <div className="flex flex-col bg-purple-dark 2xl:px-64 xl:px-48 lg:px-24 md:px-12 sm:px-8">

    // </div>
  );
};

export default index;
