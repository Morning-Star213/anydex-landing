import { Link } from "react-router-dom";

import LogoImage1 from "../../assets/image/anydex_logo1.png";
import twitterIcon from "../../assets/image/twitter.png";
import telegramIcon from "../../assets/image/telegram.png";

const Footer = () => {
  return (
    <div className="bg-background w-full py-4 md:py-8 lg:py-12 2xl:px-72 xl:px-48 lg:px-36 md:px-24 sm:px-16 px-8 flex flex-col justify-between items-center z-50 bg-opacity-95 backdrop-blur border-t border-gray-500 gap-8">
      <div className="w-full flex flex-col items-start">
        <Link to="/">
          <img src={LogoImage1} className="w-36" />
        </Link>
        <p className="text-gray-300 text-sm md:text-lg">
          Secure and Unique Trading Solutions
        </p>
      </div>
      <div className="w-full flex flex-col md:flex-row gap-4">
        <div className="flex flex-col w-full md:w-1/2">
          <p className="text-gray-200 text-2xl pb-2">Contact Us</p>
          <p className="text-gray-400 text-sm md:text-lg">
            For any issues or inquiries, please reach out via our official email
          </p>
        </div>
        <div className="flex flex-col w-full md:w-1/2">
          <p className="text-gray-200 text-2xl pb-2">Social Links</p>
          <div className="flex flex-row gap-4 items-center">
            <Link to="">
              <svg
                fill="none"
                height="48"
                viewBox="0 0 92 93"
                width="48"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="m25.4728 44.7205s18.628-7.8458 25.0885-10.6085c2.4766-1.105 10.8753-4.6412 10.8753-4.6412s3.8764-1.547 3.5533 2.2101c-.1077 1.5471-.9691 6.9618-1.8304 12.8186-1.2922 8.2879-2.692 17.3493-2.692 17.3493s-.2153 2.5417-2.0458 2.9837-4.8455-1.547-5.3838-1.9892c-.4308-.3314-8.0757-5.3042-10.8753-7.7353-.7538-.663-1.6151-1.989.1076-3.5361 3.8764-3.6467 8.5064-8.1774 11.306-11.0505 1.2922-1.3261 2.5842-4.4203-2.7996-.6631-7.6449 5.4148-15.1822 10.498-15.1822 10.498s-1.7229 1.105-4.9531.1104c-3.2304-.9944-6.9991-2.3205-6.9991-2.3205s-2.584-1.6576 1.8306-3.4257z"
                  fill="#fff"
                />
              </svg>
            </Link>
            <Link to="">
              <svg
                viewBox="0 0 20 16"
                height="24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="m19.6877602 1.89293557c-.7241543.32133665-1.5019516.53856731-2.3197336.63620902.8346204-.4997817 1.4740094-1.29175871 1.7759011-2.23434272-.7928214.47089008-1.6604932.80239643-2.5653236.98011847-.7363531-.78488717-1.7863795-1.27492034-2.9480709-1.27492034-2.2298073 0-4.03818606 1.80764895-4.03818606 4.03875954 0 .31612352.0356056.62453163.10405385.92063678-3.35667507-.16869652-6.33258394-1.77657876-8.32451664-4.21975902-.34781929.59669358-.5469083 1.29045543-.5469083 2.03066617 0 1.40102568.71310252 2.63716041 1.79664927 3.36126262-.64144173-.01987694-1.26880598-.19301567-1.82964831-.50494269v.05103643c0 1.9570048 1.39195485 3.58881525 3.23969269 3.95993718-.33942617.09300204-.69563858.14158831-1.06415395.14158831-.26055167 0-.51333581-.02465805-.76028124-.07110694.51396138 1.60402452 2.00553893 2.77160672 3.77236916 2.80460582-1.38225845 1.0835467-3.12396145 1.7294521-5.01564587 1.7294521-.32581993 0-.64783427-.0194449-.9639578-.0575528 1.78763057 1.1462606 3.9101519 1.8154165 6.19104777 1.8154165 7.42848583 0 11.49117353-6.15419102 11.49117353-11.49117354 0-.17521292-.0038577-.34912257-.012303-.52240663.7915424-.57252605 1.4748199-1.28141746 2.0178419-2.09348426z"
                  fill="#fff"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
      <div className="text-sm text-gray-400 font-semibold py-1 flex flex-col items-start justify-start w-full">
        <div className="pb-2">
          <Link to="/">PRIVACY POLICY</Link>&nbsp;|&nbsp;
          <Link to="/">TERMS OF USE</Link>&nbsp;|&nbsp;
          <Link to="/">SITEMAP</Link>
        </div>
        <p className="text-md">
          Copyright © {new Date().getFullYear()} by{" "}
          <em className="text-gray-100 hover:cursor-pointer">ANYDEX</em>.
        </p>
      </div>
    </div>
  );
};

export default Footer;
