import { useState } from "react";
import "./index.css";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "../ui/canvas-reveal-effect";
import { Meteors } from "../ui/meteors";

const Roadmap = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-2 py-12 md:py-24 lg:py-36">
      <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white relative z-20 gradient pb-4">
        Roadmap
      </h1>
      <div className="w-full h-4 relative">
        <div className="flex justify-center">
          <div className="bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
          <div className="absolute top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
          <div className="absolute top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
          <div className="absolute top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
        </div>
      </div>
      <div className="flex flex-col w-full gap-8 pt-4">
        <div className="w-full flex justify-center lg:justify-start">
          <div className="w-full md:w-2/3 lg:w-1/2 max-w-[700px]">
            <CardContainer className="inter-var">
              <CardBody className="bg-transparent relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] h-auto rounded-xl p-2 lg:p-4 border border-gray-600 w-full shadow-xl bg-gray-900 overflow-hidden flex flex-col justify-end items-start">
                <CardItem
                  translateZ="20"
                  className="text-xl font-bold text-gray-200 dark:text-white border-b border-gray-600 pb-2 w-full flex flex-row items-center"
                >
                  <p className="pr-4 text-lg md:text-xl lg:text-2xl 2xl:text-4xl text-theme">
                    Beta Phase
                  </p>
                  <p className="text-base md:text-base lg:text-xl 2xl:text-3xl">
                    On Launch
                  </p>
                </CardItem>
                <CardItem translateZ="40" className="pt-2">
                  <p className="text-gray-400 text-sm md:text-base lg:text-lg 2xl:text-2xl font-normal text-justify">
                    Trades will only be available as paper trades. This period
                    should last between 2 weeks and no more than a month. Every
                    functionality will be closely looked at & updated as we go
                    through this phase.
                  </p>
                  <Meteors number={20} />
                </CardItem>
              </CardBody>
            </CardContainer>
          </div>
        </div>
        <div className="w-full flex justify-center lg:justify-center">
          <div className="w-full md:w-2/3 lg:w-1/2 max-w-[700px]">
            <CardContainer className="inter-var">
              <CardBody className="bg-transparent relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] h-auto rounded-xl p-2 lg:p-4 border border-gray-600 w-full shadow-xl bg-gray-900 overflow-hidden flex flex-col justify-end items-start">
                <CardItem
                  translateZ="20"
                  className="text-xl font-bold text-gray-200 dark:text-white border-b border-gray-600 pb-2 w-full flex flex-row items-center"
                >
                  <p className="pr-4 text-lg md:text-xl lg:text-2xl 2xl:text-4xl text-theme">
                    Phase 1
                  </p>
                  <p className="text-base md:text-base lg:text-xl 2xl:text-3xl">
                    ERC-20 Tokens Only
                  </p>
                </CardItem>
                <CardItem translateZ="40" className="pt-2">
                  <p className="text-gray-400 text-sm md:text-lg lg:text-lg 2xl:text-2xl font-normal text-justify">
                    Users will be trading with real assets but trading will only
                    be open for ERC-20 tokens. This will provide an opportunity
                    to prove out AnyDex’s gasless, taxless, impactless trades
                    with familiar assets before the initial RWA and TradFi
                    assets are onboarded.
                  </p>
                  <Meteors number={20} />
                </CardItem>
              </CardBody>
            </CardContainer>
          </div>
        </div>
        <div className="w-full flex justify-center lg:justify-end">
          <div className="w-full md:w-2/3 lg:w-1/2 max-w-[700px]">
            <CardContainer className="inter-var relative">
              <CardBody className="bg-transparent relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] h-auto rounded-xl overflow-hidden border border-gray-600 w-full p-2 lg:p-4">
                <CardItem
                  translateZ="20"
                  className="text-xl font-bold text-gray-200 dark:text-white border-b border-gray-600 pb-2 w-full flex flex-row items-center blur-lg"
                >
                  <p className="pr-4 text-lg md:text-xl lg:text-2xl 2xl:text-4xl text-theme">
                    Phase 2
                  </p>
                  <p className="text-base md:text-base lg:text-xl 2xl:text-3xl">
                    RWA & TradFi Assets
                  </p>
                </CardItem>
                <CardItem translateZ="40" className="pt-2 blur-lg">
                  <p className="text-gray-400 text-sm md:text-base lg:text-lg 2xl:text-2xl font-normal text-justify">
                    Trades will only be available as paper trades. This period
                    should last between 2 weeks and no more than a month. Every
                    functionality will be closely looked at & updated as we go
                    through this phase.
                  </p>
                </CardItem>
                <CardItem translateZ="40" className="absolute inset-0 w-full">
                  <Card title="Coming Soon" icon={<EyeSvg />}>
                    <CanvasRevealEffect
                      animationSpeed={5.1}
                      containerClassName="bg-theme-dark rounded-xl"
                      colors={[
                        [0, 150, 153],
                        [232, 150, 249],
                      ]}
                    />
                  </Card>
                </CardItem>
              </CardBody>
            </CardContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

const Card = ({ title, icon, children }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border border-black/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2] w-full relative h-full"
    >
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 rounded-xl"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20">
        <div className="group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:hidden transition duration-200 w-full flex items-center justify-center">
          {icon}
        </div>
        <h2 className="text-xl hidden group-hover/canvas-card:block z-10 text-gray-200 mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200">
          {title}
        </h2>
      </div>
    </div>
  );
};

const EyeSvg = () => {
  return (
    <svg
      width="60px"
      height="60px"
      viewBox="0 0 76 76"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      version="1.1"
      baseProfile="full"
      enableBackground="new 0 0 76.00 76.00"
      xmlSpace="preserve"
    >
      <path
        fill="#ffffff"
        fillOpacity="1"
        strokeWidth="0.2"
        strokeLinejoin="round"
        d="M 38,33.1538C 40.6765,33.1538 42.8462,35.3235 42.8462,38C 42.8462,40.6765 40.6765,42.8461 38,42.8461C 35.3235,42.8461 33.1539,40.6765 33.1539,38C 33.1539,35.3235 35.3236,33.1538 38,33.1538 Z M 38,25.0769C 49.3077,25.0769 59,33.1538 59,38C 59,42.8461 49.3077,50.9231 38,50.9231C 26.6923,50.9231 17,42.8461 17,38C 17,33.1538 26.6923,25.0769 38,25.0769 Z M 38,29.1154C 33.0932,29.1154 29.1154,33.0932 29.1154,38C 29.1154,42.9068 33.0932,46.8846 38,46.8846C 42.9068,46.8846 46.8846,42.9068 46.8846,38C 46.8846,33.0932 42.9068,29.1154 38,29.1154 Z "
      />
    </svg>
  );
};

export default Roadmap;
