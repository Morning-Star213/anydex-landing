import { Disclosure } from "@headlessui/react";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

import GradientButton from "../common/button/GradientButton";
import "./index.css";

const FAQ = () => {
  return (
    <div className="w-full flex flex-col xl:flex-row justify-center items-center xl:justify-between py-12 md:py-24 lg:py-36">
      <div className="flex flex-col items-center xl:items-start gap-4">
        <p className="text-gray-200 text-3xl sm:text-4xl md:text-5xl font-semibold pt-8">
          Frequently Asked
          <br />
          <span className="gradient">Questions</span>
        </p>
        <p className="text-gray-400 pt-2 md:pt-4 text-sm sm:text-base md:text-xl">
          Know more about us.
        </p>
        <GradientButton content={"Ask Us"} />
      </div>
      <div className="text-gray-200 lg:w-2/3 xl:w-1/2">
        <div className="w-full rounded-2xl bg-transparent py-8">
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex flex-row w-full items-center rounded-lg bg-transparent p-2 text-left text-sm font-medium text-gray-200 hover:bg-gray-800 focus:outline-none focus-visible:ring focus-visible:ring-gray-400/75 gap-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className={`${
                      open ? "rotate-90 transform" : ""
                    } h-6 w-6 text-gray-200`}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m8.25 4.5 7.5 7.5-7.5 7.5"
                    />
                  </svg>
                  <span className="text-sm sm:text-base md:text-xl lg:text-2xl min-w-[150px]">
                    How do you make money?
                  </span>
                </Disclosure.Button>
                <Disclosure.Panel className="pb-2 pt-4 pl-2 text-sm md:text-base lg:text-xl text-gray-400">
                  If you're unhappy with your purchase for any reason, email us
                  within 90 days and we'll refund you in full, no questions
                  asked.
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex flex-row w-full items-center rounded-lg bg-transparent p-2 text-left text-sm font-medium text-gray-200 hover:bg-gray-800 focus:outline-none focus-visible:ring focus-visible:ring-gray-400/75 gap-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className={`${
                      open ? "rotate-90 transform" : ""
                    } h-6 w-6 text-gray-200`}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m8.25 4.5 7.5 7.5-7.5 7.5"
                    />
                  </svg>
                  <span className="text-sm sm:text-base md:text-xl lg:text-2xl min-w-[150px]">
                    What can be traded on AnyDex?
                  </span>
                </Disclosure.Button>
                <Disclosure.Panel className="pb-2 pt-4 pl-2 text-sm md:text-base lg:text-xl text-gray-400">
                  Since everything we offer is synthetic, commonly known
                  limitations for exchanges, such as formal stock markets,
                  FOREX, uniswap, do not apply for us. Initially, on our BETA
                  Phase, it will only be ERC20 tokens, however, as time goes on
                  we will be adding more assets and commodities.
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex flex-row w-full items-center rounded-lg bg-transparent p-2 text-left text-sm font-medium text-gray-200 hover:bg-gray-800 focus:outline-none focus-visible:ring focus-visible:ring-gray-400/75 gap-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className={`${
                      open ? "rotate-90 transform" : ""
                    } h-6 w-6 text-gray-200`}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m8.25 4.5 7.5 7.5-7.5 7.5"
                    />
                  </svg>
                  <span className="text-sm sm:text-base md:text-xl lg:text-2xl min-w-[150px]">
                    When will the final product be available?
                  </span>
                </Disclosure.Button>
                <Disclosure.Panel className="pb-2 pt-4 pl-2 text-sm md:text-base lg:text-xl text-gray-400">
                  The BETA Phase should last between 2 weeks and no more than a
                  month. Every functionality will be closely looked at & updated
                  as we go through this phase. The goal is to bring awareness to
                  the product, allowing users to trade 'fake' money, thus when
                  the utility is live, every customer will already know how to
                  use it, easing the process of user adoption.
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex flex-row w-full items-center rounded-lg bg-transparent p-2 text-left text-sm font-medium text-gray-200 hover:bg-gray-800 focus:outline-none focus-visible:ring focus-visible:ring-gray-400/75 gap-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className={`${
                      open ? "rotate-90 transform" : ""
                    } h-6 w-6 text-gray-200`}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m8.25 4.5 7.5 7.5-7.5 7.5"
                    />
                  </svg>
                  <span className="text-sm sm:text-base md:text-xl lg:text-2xl min-w-[150px]">
                    Why do you need a token?
                  </span>
                </Disclosure.Button>
                <Disclosure.Panel className="pb-2 pt-4 pl-2 text-sm md:text-base lg:text-xl text-gray-400">
                  90% of the revenue will go to buybacks, making the coin
                  deflationary in the long term. We could, in the future,
                  consider 'revenue share' as an option, however, we do prefer
                  buys & burns for marketcaps lower than a mid-8-fig range.
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
