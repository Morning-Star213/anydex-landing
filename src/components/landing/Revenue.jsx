import revenueImage from "../../assets/image/revenue.png";
import netSvg from "../../assets/image/net.svg";

const Revenue = () => {
  return (
    <div className="w-full relative flex flex-col-reverse lg:flex-row items-center justify-center gap-2 md:gap-4 py-12 md:py-24 lg:py-36">
      <img src={netSvg} className="absolute inset-0 h-full" />
      <img
        src={revenueImage}
        className="w-full sm:w-2/3 lg:w-1/2 py-4 md:py-8 z-10"
      />
      <div className="flex flex-col justify-center z-10">
        <div className="flex flex-col">
          <p className="text-gray-200 text-xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold py-2 md:py-4 text-center lg:text-left">
            Revenue Model
          </p>
          <p className="text-gray-400 text-base md:text-lg lg:text-xl text-justify">
            The user fees are taken from each trade (both when it's opened and
            closed, just like gas fees would). The fee is percentual and based
            on the amount, unlike gas fees. This percentage is 0.1%. For
            example, if the amount you set to trade is $1000, your fees will be
            $1.
          </p>
        </div>
        <div className="flex flex-col">
          <p className="text-gray-200 text-xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold py-2 md:py-4 text-center lg:text-left">
            Revenue Distribution
          </p>
          <p className="text-gray-400 text-base md:text-lg lg:text-xl text-justify">
            The revenue will be distributed through B&B (Buys & Burns), on a
            bi-weekly, non-advertised (yet proven) basis. In other words, the
            buybacks won't be announced until after they're done, hence
            'proven'.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Revenue;
