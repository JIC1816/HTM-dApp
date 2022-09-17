import type { NextPage } from "next";
import { NextSeo } from "next-seo";
import Image from "next/image";
import MetaMask from "../public/metmask.png";
import { ConnectButton } from "@rainbow-me/rainbowkit";

const Home: NextPage = () => {
  return (
    <>
      <NextSeo title="Riva Dapp" description="Legal Contract Service" />

      {/* Page 1 */}
      <div className="w-full min-h-screen bg-[#000000de]">
        {/* Header */}
        <div className="w-full h-12 bg-black justify-center items-center flex">
          <h1 className="text-gray-200 font-medium text-xl">RIVA DAPP</h1>
        </div>

        {/* Rest */}
        <div className="flex flex-col justify-center items-center w-full h-full p-24 space-y-16 bg-grey">
          <h1 className="text-6xl text-[#D7CCC8]">Smart contract service</h1>

          <div>
            <h3 className="px-6 text-4xl pb-3 text-[#D7CCC8]">Connect your wallet to start</h3>
            <hr />
          </div>

          <div className="relative w-52 h-52">
            <Image src={MetaMask.src} alt="Metamask" layout="fill"/>
          </div>

          <ConnectButton />
        </div>
      </div>

      {/* Page 2 */}
      <div className="w-full h-full divide-y-2 bg-[#000000de]">
        {/* Header */}
        <div className="w-full h-12 bg-black flex flex-row justify-evenly items-center">
          <h1 className="text-gray-200 font-medium text-xl basis-1/2 pl-6">
            RIVA DAPP
          </h1>
          <div className="flex flex-row basis-1/2 w-full justify-end pr-12 items-center space-x-6">
            <h1 className="text-gray-200 font-medium text-xl">
              <button>HOME</button>
            </h1>
            <h1 className="text-gray-200 font-medium text-xl uppercase">
              <button>SEARCH</button>
            </h1>
            <h1 className="text-gray-200 font-medium text-xl uppercase">
              <button>DASHBOARD</button>
            </h1>
          </div>
        </div>

        {/* Rest */}
        <div className="flex flex-col justify-center items-center w-full h-full p-24 space-y-16">
          <h1 className="text-6xl text-[#D7CCC8]">How it works</h1>

          <div className="border-2 border-gray-800 shadow-md rounded p-6 text-[#D7CCAA]">
            <h3 className="px-6 text-xl ">
            Riva is decentralized application for the legal enforceability of self-executing contracts. 
            This application enables the Malleability of these smart contracts to fit legal purposes, without the knowledge of coding.
            The dApp is designed for flexibility for any lawyer in any jurisdiction of the world to edit smart contract and fit to his/her legal system.
            </h3>
          </div>

          <div className="flex flex-col justify-center items-center">
            <div className="border-2 p-6">
              <h3 className="px-6 text-2xl rounded text-[#D7CCC8]">Connect MetaMask</h3>
            </div>
            <span className="text-[#D7CCAA]">{"|"}</span>
            <div className="border-2 p-6">
              <h3 className="px-6 text-2xl rounded text-[#D7CCC8]">Confirm Wallet sign in</h3>
            </div>
            <span className="text-[#D7CCAA]">{"|"}</span>
            <div className="border-2 p-6">
              <h3 className="px-6 text-2xl rounded text-[#D7CCC8]">
                Select pre-build template
              </h3>
            </div>
            <span className="text-[#D7CCAA]">{"|"}</span>
            <div className="border-2 p-6">
              <h3 className="px-6 text-2xl rounded text-[#D7CCC8]">
                Fill required information
              </h3>
            </div>
            <span className="text-[#D7CCAA]">{"|"}</span>
            <div className="border-2 p-6">
              <h3 className="px-6 text-2xl rounded text-[#D7CCC8]">Deploy</h3>
            </div>
            <span className="text-[#D7CCAA]">{"|"}</span>
            <div className="border-2 p-6">
              <h3 className="px-6 text-2xl rounded text-[#D7CCC8]">Generate reference link</h3>
            </div>
          </div>
        </div>

        {/* Page 3 */}
        <div className="w-full h-full text-[#D7CCC8] border-[#D7CCC8]">
          {/* Rest */}
          <div className="flex flex-col justify-center items-center w-full h-full p-24 space-y-24">
            <h1 className="text-6xl">Team</h1>

            <div className="flex flex-row justify-evenly items-center w-full">
              {/* Person 1 */}
              <div className="flex flex-col justify-center items-center">
                <h3 className="text-2xl font-bold">Person 1</h3>
                <h3 className="text-xl">Developer</h3>
              </div>
              {/* Person 2 */}
              <div className="flex flex-col justify-center items-center">
                <h3 className="text-2xl font-bold">Person 2</h3>
                <h3 className="text-xl">Developer</h3>
              </div>
              {/* Person 3 */}
              <div className="flex flex-col justify-center items-center">
                <h3 className="text-2xl font-bold">Person 3</h3>
                <h3 className="text-xl">Developer</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-12 bg-black justify-center items-center flex bottom-0">
          <h1 className="text-gray-200 font-medium text-xl">
            RIVA DAPP | 2022
          </h1>
        </div>
      </div>
    </>
  );
};

export default Home;
