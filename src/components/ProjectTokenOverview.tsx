//TODO IN PROGRESS
import {
  ProjectProps,
  TokenDataCoinGecko,
  TokenPriceCoinGecko,
} from "@/interfaces";
import { Chart as ChartJS, CategoryScale } from "chart.js/auto";
import { Line } from "react-chartjs-2";

import React, { useEffect, useState } from "react";
import { FaChevronDown, FaArrowUp } from "react-icons/fa6";

ChartJS.register(CategoryScale);

const DROPDOWN_OPTIONS = [
  {
    title: "Yesterday",
    value: 1,
  },
  {
    title: "Last 7 days",
    value: 7,
  },
  {
    title: "Last 30 days",
    value: 30,
  },
  {
    title: "Last 90 days",
    value: 90,
  },
  {
    title: "Last year",
    value: 365,
  },
];

export default function ProjectTokenOverview({
  project,
}: {
  project: ProjectProps;
}) {
  const [tokenPriceData, setTokenPriceData] = useState<any>(null);
  const [selectedDropdown, setSelectedDropdown] = useState(DROPDOWN_OPTIONS[0]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [filter, setFilter] = useState({
    days: 7,
  });
  const [tokenData, setTokenData] = useState<TokenDataCoinGecko | null>(null);

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      "x-cg-demo-api-key": process.env.NEXT_PUBLIC_COINGECKO_API_KEY || "",
    },
  };

  const fetchTokenData = async () => {
    try {
      const responseTokenData = await fetch(
        `https://api.coingecko.com/api/v3/coins/id/contract/${project.smartContractAddress}`,
        options
      );
      const tokenDataResponse: TokenDataCoinGecko =
        await responseTokenData.json();
      setTokenData(tokenDataResponse);
    } catch (error) {
      console.error("Error fetching token data:", error);
    }
  };

  const fetchTokenPrice = async () => {
    try {
      const responsePriceData = await fetch(
        `https://api.coingecko.com/api/v3/coins/id/contract/${project.smartContractAddress}/market_chart?vs_currency=usd&days=${filter.days}`,
        options
      );

      const tokenPriceDataResponse: TokenPriceCoinGecko =
        await responsePriceData.json();

      const data = tokenPriceDataResponse.prices;

      const formattedDates = data.map(
        ([timestamp, _price]: [timestamp: number, price: number]) => {
          const date = new Date(timestamp);
          const month = date.toLocaleString("default", { month: "short" });
          const day = date.getDate();
          const year = date.getFullYear();
          return `${month} ${day}, ${year}`;
        }
      );

      const prices = data.map(
        ([_timestamp, price]: [timestamp: number, price: number]) => price
      );

      const chartData = {
        labels: formattedDates,
        datasets: [
          {
            label: "Token Price",
            data: prices,
            fill: false,
            backgroundColor: "#2D6EEF",
            borderColor: "#FFFFFF",
            color: "#FFFFFF",
            tension: 0.1,
          },
        ],
      };

      setTokenPriceData(chartData);
    } catch (error) {
      console.error("Error fetching token data:", error);
    }
  };

  useEffect(() => {
    fetchTokenData();
  }, []);

  useEffect(() => {
    fetchTokenPrice();
  }, [filter.days]);

  return tokenData ? (
    <section id="tokenoverview" data-accordion="open" className="mb-6">
      <h2 id="accordion-arrow-icon-heading-1">
        <div className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-white border border-b-0 border-gray-600 rounded-t-xl focus:ring-4 focus:ring-gray-200 gap-3">
          <span>Token Overview</span>
        </div>
      </h2>
      <div
        id="accordion-arrow-icon-body-1"
        aria-labelledby="accordion-arrow-icon-heading-1"
      >
        <div className="p-5 border rounded-b-lg border-gray-600 bg-gray-900 w-full">
          {Object.keys(tokenData).length > 0 && (
            <div className="w-full bg-gray-800 rounded-lg shadow dark:bg-gray-800 p-4 md:p-6">
              <div className="flex justify-between w-full">
                <div>
                  <h5 className="leading-none text-3xl font-bold text-white pb-2">
                    ${tokenData.market_data.current_price.usd} USD
                  </h5>
                  <p className="text-base font-normal text-white ">
                    {tokenData.symbol}
                  </p>
                </div>
                <div className="flex items-center px-2.5 py-0.5 text-base font-semibold text-green-500 dark:text-green-500 text-center">
                  {tokenData.market_data.market_cap_change_percentage_24h}
                  <FaArrowUp className="w-3 h-3 ms-1" />
                </div>
              </div>

              {tokenPriceData && <Line data={tokenPriceData} />}

              <div className="grid grid-cols-1 items-center border-gray-200 border-t dark:border-gray-700 justify-between">
                <div className="flex flex-col pt-5 relative">
                  <button
                    id="dropdownDefaultButton"
                    data-dropdown-toggle="lastDaysdropdown"
                    data-dropdown-placement="bottom"
                    className="text-sm font-medium text-gray-200 dark:text-gray-400 hover:text-gray-300 text-center inline-flex items-center"
                    type="button"
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  >
                    {selectedDropdown.title}
                    <FaChevronDown className="w-4 m-2.5 ms-1.5" />
                  </button>

                  <div
                    id="lastDaysdropdown"
                    className={`${
                      !isDropdownOpen && "hidden"
                    } z-10 absolute top-16 bg-white divide-y divide-gray-100 rounded-lg shadow w-44`}
                  >
                    <ul
                      className="py-2 text-sm text-gray-700 dark:text-gray-200"
                      aria-labelledby="dropdownDefaultButton"
                    >
                      {DROPDOWN_OPTIONS.map((option) => (
                        <li key={option.value}>
                          <button
                            onClick={() => {
                              setFilter({ days: option.value });
                              setSelectedDropdown(option);
                              setIsDropdownOpen(!isDropdownOpen);
                            }}
                            type="button"
                            className="block px-4 py-2 w-full hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            {option.title}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  ) : (
    <></>
  );
}
