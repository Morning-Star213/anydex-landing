import Tokenomic from "../common/Tokenomic";
import Icon from "../common/Icon";

import icon2 from "../../assets/image/icon2.png";
import icon3 from "../../assets/image/icon3.png";
import icon4 from "../../assets/image/icon4.png";
import icon5 from "../../assets/image/icon5.png";

const Tokenomics = () => {
  return (
    <div className="w-full flex flex-col xl:flex-row gap-16 justify-center xl:justify-between py-12 md:py-24 lg:py-36">
      <div className="flex flex-col justify-center gap-4 md:gap-8 items-center">
        <p className="text-gray-200 text-3xl md:text-4xl font-semibold pb-4 md:pb-8">
          Tokenomics
        </p>
        <div className="flex flex-col md:flex-row justify-between gap-4 md:gap-8 2xl:gap-12">
          <Tokenomic
            title={"60%"}
            content={"Marketing used to promote the project"}
            icon={<Icon icon={icon2} />}
          />
          <div className="h-full w-[1px] bg-gray-400"></div>
          <Tokenomic
            title={"40%"}
            content={"Development Used to build a better product."}
            icon={<Icon icon={icon3} />}
          />
        </div>
      </div>
      <div className="flex flex-col justify-center gap-4 md:gap-8 items-center">
        <p className="text-gray-200 text-3xl md:text-4xl font-semibold pb-4 md:pb-8">
          Revenue
        </p>
        <div className="flex flex-col md:flex-row justify-between gap-4 md:gap-8 2xl:gap-12">
          <Tokenomic
            title={"90%"}
            content={"Buybacks (Can be swapped to rev-share in the future)"}
            icon={<Icon icon={icon4} />}
          />
          <div className="h-full w-[1px] bg-gray-400"></div>
          <Tokenomic
            title={"10%"}
            content={"CORE Team Reserved for the Team."}
            icon={<Icon icon={icon5} />}
          />
        </div>
      </div>
    </div>
  );
};

export default Tokenomics;
