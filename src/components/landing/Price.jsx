import { Link } from "react-router-dom";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import "./index.css";

import bitcoinIcon from "../../assets/image/bitcoin.png";
import ethereumIcon from "../../assets/image/ethereum.png";
import polygonIcon from "../../assets/image/polygon.png";
import polkadotIcon from "../../assets/image/polkadot.png";
import tetherIcon from "../../assets/image/tether.png";
import xrpIcon from "../../assets/image/xrp.png";

const priceData = [
  {
    icon: bitcoinIcon,
    network: "Bitcoin",
    symbol: "BTC",
    price: "23207.5",
    change: "2.62",
  },
  {
    icon: ethereumIcon,
    network: "Ethereum",
    symbol: "ETH",
    price: "1515",
    change: "-0.75",
  },
  {
    icon: tetherIcon,
    network: "Tether",
    symbol: "USDT",
    price: "1.00",
    change: "0.09",
  },
  {
    icon: polygonIcon,
    network: "Polygon",
    symbol: "MATIC",
    price: "1.29",
    change: "3.49",
  },
  {
    icon: xrpIcon,
    network: "XRP",
    symbol: "XRP",
    price: "0.38210000",
    change: "-0.04",
  },
  {
    icon: polkadotIcon,
    network: "Polkadot",
    symbol: "DOT",
    price: "6.31",
    change: "1.20",
  },
];

const Price = () => {
  return (
    <div className="w-full flex flex-col justify-center lg:flex-row lg:justify-between lg:items-center py-12 md:py-24 lg:py-36">
      <div className="flex flex-col">
        <div className="text-4xl sm:text-5xl xl:text-6xl text-gray-200 font-bold">
          Accept Crypto
          <br />
          Payments
          <br />
          <span className="gradient">Risk Free</span>
        </div>
        <div className="text-gray-400 py-8 text-sm md:text-lg lg:text-xl font-semibold">
          <div>
            KYC Status: Approved (
            <Link
              to="https://assuredefi.com/projects/anydex#kyc_status"
              className="text-theme-light"
              target="_blank"
            >
              See Details
            </Link>
            )
          </div>
          <div className="pt-2">
            Audit Status: Completed (
            <Link
              to="https://assuredefi.com/projects/anydex#audits-details"
              className="text-theme-light"
              target="_blank"
            >
              See Details
            </Link>
            )
          </div>
        </div>
      </div>
      <div className="w-full lg:w-1/2">
        <CardContainer className="inter-var">
          <CardBody className="bg-transparent relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] h-auto rounded-xl p-4 md:p-6 border border-gray-600 w-full">
            <CardItem
              translateZ="20"
              className="text-xl font-bold text-gray-200 dark:text-white border-b border-gray-600 pb-2 w-full"
            >
              Latest Price
            </CardItem>
            <CardItem translateZ="100" className="w-full overflow-auto">
              <table className="text-gray-200 w-full">
                <tbody>
                  <tr className="text-gray-400 w-max h-12 text-sm">
                    <th>Coin Name</th>
                    <th>Last Price</th>
                    <th>24h Change</th>
                  </tr>
                  {priceData.map((item, id) => (
                    <tr key={id}>
                      <td className="flex flex-row items-center w-max">
                        <img src={item.icon} />
                        &nbsp;{item.network}&nbsp;
                        <span className="text-gray-400">{item.symbol}</span>
                      </td>
                      <td>$&nbsp;{item.price}</td>
                      <td>
                        {item.change > 0 ? "+" : "-"}&nbsp;
                        {item.change > 0
                          ? item.change
                          : item.change.substring(1)}
                        %
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </CardItem>
          </CardBody>
        </CardContainer>
      </div>
    </div>
  );
};

export default Price;
