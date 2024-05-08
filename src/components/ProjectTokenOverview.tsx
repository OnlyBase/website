//TODO IN PROGRESS 
import { ProjectProps } from "@/interfaces";
import { Alchemy, Network } from "alchemy-sdk";
import { Chart as ChartJS, CategoryScale } from "chart.js/auto";
import { Line } from "react-chartjs-2";

import React, { useEffect, useState } from "react";

ChartJS.register(CategoryScale);

export default function ProjectTokenOverview({
  project,
}: {
  project: ProjectProps;
}) {
  const [tokenPriceData, setTokenPriceData] = useState<any>(null);
  const settings = {
    apiKey: "LcXQYzNEbajSR7a-hwftuFctzkwtDymo", // Replace with your Alchemy API Key.
    network: Network.ETH_MAINNET, // Replace with your network.
  };
  const alchemy = new Alchemy(settings);
  const ownerAddr = project.smartContractAddress || '';

  const getAlchemyBalances = async () => {
    const balances = await alchemy.core.getTokenBalances(ownerAddr);
    console.log(balances);

    const metadata = await alchemy.core.getTokenMetadata(ownerAddr);

    console.log(metadata);

    if (
      balances &&
      balances.tokenBalances &&
      balances.tokenBalances.length > 0
    ) {
      const tokens = balances.tokenBalances.map((token: any) => ({
        contractAddress: token.contractAddress,
        tokenBalance: token.tokenBalance,
      }));

      const prices = tokens.map((token: any) =>
        calculateTokenPrice(token.tokenBalance, Number(metadata.decimals))
      );

    //   console.log(prices);

      setTokenPriceData({
        labels: prices.map((token: any) => token), // Using contract address as label
        datasets: [
          {
            label: "Token Price",
            data: prices,
            fill: false,
            tension: 0.1,
          },
        ],
      });
    }
  };

  const calculateTokenPrice = (tokenBalance: string, decimals: number) => {
    return parseFloat(tokenBalance) / decimals;
  };

  useEffect(() => {
    getAlchemyBalances();
  }, []);

    console.log(tokenPriceData);

  return (
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
        <div className="p-5 border rounded-b-lg border-gray-600 bg-gray-300">
          {tokenPriceData && <Line data={tokenPriceData}  />}
        </div>
      </div>
    </section>
  );
}
