import SushiSwapIFrame from "./SushiSwapIFrame";

const index = () => {
  const sushiSwapSrc =
    "https://www.sushi.com/swap?chainId=42161&token1=0x912CE59144191C1204E64559FE8253a0e49E6548&token0=NATIVE";
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center bg-background 2xl:px-72 xl:px-48 lg:px-36 md:px-24 sm:px-16 px-8">
      <h1>My DApp Page</h1>
      <SushiSwapIFrame src={sushiSwapSrc} height="600" width="100%" />
    </div>
  );
};

export default index;
