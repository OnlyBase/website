import { useEffect, useState } from "react";
import { useDisclosure, Button, HStack } from "@chakra-ui/react";
import SelectWalletModal from "./CoinBaseModal";
import { useWeb3React } from "@web3-react/core";

import { connectors } from "@/utils/connectors";

export default function CoinBaseButton({
  isMobile = false,
}: {
  isMobile?: boolean;
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { library, chainId, account, activate, deactivate, active } =
    useWeb3React();
  const [signature, setSignature] = useState("");
  const [error, setError] = useState("");
  const [network, setNetwork] = useState("");
  const [message, setMessage] = useState("");
  const [signedMessage, setSignedMessage] = useState("");
  const [verified, setVerified] = useState();

  const refreshState = () => {
    window.localStorage.setItem("provider", "");
    setNetwork("");
    setMessage("");
    setSignature("");
    setVerified("");
  };

  const disconnect = () => {
    refreshState();
    deactivate();
  };

  // useEffect(() => {
  //   const provider = window.localStorage.getItem("provider");
  //   if (provider) activate(connectors[provider]);
  // }, []);

  return (
    <div className="flex items-center">
      <div
        className={`flex-row items-center ms-3 ${
          isMobile ? "block md:hidden" : "hidden md:block"
        }`}
      >
        <HStack>
          <Button
            className={`text-black ${isMobile && "mb-4"}`}
            onClick={!active ? onOpen : disconnect}
          >
            {" "}
            {!active ? "Connect Wallet" : "Disconnect"}{" "}
          </Button>
        </HStack>

        <SelectWalletModal isOpen={isOpen} closeModal={onClose} />
      </div>
    </div>
  );
}
