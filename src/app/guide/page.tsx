"use client";
import SyntaxHighlighter from "react-syntax-highlighter";
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default function Guide() {
  const codeString = `
  {
    name: "0X", // Place the name of your project here
    description: "Your one stop shop to build financial products on crypto rails. Enable faster trading, better prices and superior UX in your app.", // Describe your project here
    image: "https://www.base.org/_next/image?url=%2Fimages%2Fpartners%2F0x.webp&w=1920&q=75", // Place the URL of your project image here
    tags: ["defi"], // Place tags related to your project here
    twitter: "https://twitter.com/0xproject", // Place the link to your project's Twitter account here
    website: "https://0x.org/", // Place the link to your project's website here
    discord: null, // Place the link to your project's Discord server here, if applicable, otherwise leave as null
    telegram: null, // Place the link to your project's Telegram group here, if applicable, otherwise leave as null
    github: "https://github.com/0xProject", // Place the link to your project's GitHub repository here
    medium: null, // Place the link to your project's Medium blog here, if applicable, otherwise leave as null
    facebook: null, // Place the link to your project's Facebook page here, if applicable, otherwise leave as null
    reddit: "https://www.reddit.com/r/0xProject/", // Place the link to your project's subreddit on Reddit here
    youtube: null, // Place the link to your project's YouTube channel here, if applicable, otherwise leave as null
    instagram: null, // Place the link to your project's Instagram account here, if applicable, otherwise leave as null
    dextools: "https://www.dextools.io/app/en/base/pair-explorer/0x0647123871a90b15fa8fe925ce727f60e9f85751?t=1714591072074", // Place the link to DexTools for your project here
    dexscreener: "https://dexscreener.com/base/0x6c334767d2abbbd77c3c87df743658ff70af896a", // Place the link to Dexscreener for your project here
    linkedin: null, // Place the link to your LinkedIn profile here, if applicable, otherwise leave as null
    tiktok: null, // Place the link to your TikTok account here, if applicable, otherwise leave as null
    Warpcast: "https://warpcast.com/0xproject", // Place the link to Warpcast for your project here
    smartContractAddress: "0x2456490b46C2428cec4989842416d202461a6CFC" // Place the smart contract address of your project here
  }`;
  return (
    <div className="max-w-3xl mx-auto p-8 transform transition duration-300 hover:-translate-y-2 shadow-lg w-full text-white bg-gray-900 border border-gray-800 rounded-lg">
      <h2 className="text-3xl font-bold mb-4">Project Cloning Guide</h2>

      <div className="mb-8">
        <h3 className="text-xl font-bold mb-2">Step 1: Clone the Project</h3>
        <p className="mb-4">
          First, clone the project repository to your local machine using the
          following command:
        </p>
        <code className="bg-gray-700 p-2 rounded">
          git clone https://github.com/OnlyBase/website
        </code>
      </div>

      <div className="mb-8">
        <h3 className="text-xl font-bold mb-2">
          Step 2: Modify the Projects Array
        </h3>
        <p className="mb-4">
          Next, navigate to the <code>src</code> folder and open{" "}
          <code>data.js</code> file.
        </p>
        <p className="mb-4">
          Add a new object to the <code>projects</code> array with the following
          properties:
        </p>
        <SyntaxHighlighter language="javascript" style={oneDark}>
          {codeString}
        </SyntaxHighlighter>
      </div>
      <div className="mb-8">
        <h3 className="text-xl font-bold mb-2">Step 3: Commit Changes</h3>
        <p className="mb-4">
          After making the changes, stage and commit them to a new branch named{" "}
          <code>test</code>:
        </p>
        <code className="bg-gray-700 p-2 rounded text-left">
          git checkout -b test <br />
          git add . <br />
          git commit -m "Added new object" <br />
          git push origin test
        </code>
      </div>

      <div>
        <h3 className="text-xl font-bold mb-2">
          Step 4: Create a Pull Request
        </h3>
        <p className="mb-4">
          Finally, create a pull request from the <code>test</code> branch to
          the main branch.
        </p>
        <p className="mb-4">Wait for the review and merge approval.</p>
      </div>
    </div>
  );
}
