'use client'
import { ethers } from 'ethers';
import { ConnectWallet, Web3Button, useWallet } from "@thirdweb-dev/react";

export default function Checkout() {
  const wallet = useWallet();
  const contractAddress = "0xB6508806A72ec258Cd481B4F8451B8209e150AA4";

  const handlePayment = async (contract) => {
    try {
   
      if (!wallet) {
        console.error("Wallet not connected");
        return;
      }

      const to = "0xB6508806A72ec258Cd481B4F8451B8209e150AA4";
      const amount = ethers.utils.parseEther("30"); // $30

      // transfer
      const tx = await contract.transfer(to, amount);
      console.log("Success:", tx);
    } catch (error) {
      console.error("Error", error);
    }
  };


  const handleSubmit = e => {
    e.preventDefault();
    console.log(event);
    console.log('hi');
    //Send notification to email
  }

  return (
    <div className='container flex-row justify-center'>
  

{/* Button to make payment */}

<div
  className="mx-auto block max-w-md rounded-lg bg-gray-900 p-6 shadow-4 dark:bg-surface-dark">
  <Web3Button contractAddress={contractAddress} action={handlePayment}>
    Pay 30$
  </Web3Button>
  <form>
    <div className="w-full mt-10">

      <div className="relative mb-6" data-twe-input-wrapper-init>
        <input
          type="text"
          className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
          id="exampleInput123"
          placeholder="First name" />
        <label
          htmlFor="emailHelp123"
          className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[0.9rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-300 dark:peer-focus:text-primary"
          >First name
        </label>
      </div>


      <div className="relative mb-6" data-twe-input-wrapper-init>
        <input
          type="text"
          className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
          id="exampleInput124"
          aria-describedby="emailHelp124"
          placeholder="Last name" />
        <label
          htmlFor="exampleInput124"
          className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[0.9rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-300 dark:peer-focus:text-primary"
          >Last name
        </label>
      </div>
    </div>


    <div className="relative mb-6" data-twe-input-wrapper-init>
      <input
        type="email"
        className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
        id="exampleInput125"
        placeholder="Email address" />
      <label
        htmlFor="exampleInput125"
        className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[0.9rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-300 dark:peer-focus:text-primary"
        >Email address
      </label>
    </div>


    <button
      type="button"
      onClick={(e) =>handleSubmit(e)}
      className="inline-block w-full rounded bg-secondary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-black shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
      data-twe-ripple-init
      data-twe-ripple-color="light">
      Send

    </button>
  </form>
  
</div>



      
    </div>
  );
}
