import { useEffect, useState } from "react";
import {
  //   VStack,
  useDisclosure,
  Button,
  //   Text,
  HStack,
  //   Select,
  //   Input,
  //   Box,
} from "@chakra-ui/react";
import SelectWalletModal from "./CoinBaseModal";
import { useWeb3React } from "@web3-react/core";
// import { CheckCircleIcon, WarningIcon } from "@chakra-ui/icons";
// import { Tooltip } from "@chakra-ui/react";

import { networkParams } from "@/utils/networks";
import { connectors } from "@/utils/connectors";
import { toHex, truncateAddress } from "@/utils/helpers";

export default function CoinBaseButton() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { library, chainId, account, activate, deactivate, active } =
    useWeb3React();
  const [signature, setSignature] = useState("");
  const [error, setError] = useState("");
  const [network, setNetwork] = useState("");
  const [message, setMessage] = useState("");
  const [signedMessage, setSignedMessage] = useState("");
  const [verified, setVerified] = useState();

  const handleNetwork = (e: { target: { value: any } }) => {
    const id = e.target.value;
    setNetwork(Number(id));
  };

  const handleInput = (e: { target: { value: any } }) => {
    const msg = e.target.value;
    setMessage(msg);
  };

  const switchNetwork = async () => {
    try {
      await library.provider.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: toHex(network) }],
      });
    } catch (switchError) {
      if (switchError.code === 4902) {
        try {
          await library.provider.request({
            method: "wallet_addEthereumChain",
            params: [networkParams[toHex(network)]],
          });
        } catch (error) {
          setError(error);
        }
      }
    }
  };

  const signMessage = async () => {
    if (!library) return;
    try {
      const signature = await library.provider.request({
        method: "personal_sign",
        params: [message, account],
      });
      setSignedMessage(message);
      setSignature(signature);
    } catch (error) {
      setError(error);
    }
  };

  const verifyMessage = async () => {
    if (!library) return;
    try {
      const verify = await library.provider.request({
        method: "personal_ecRecover",
        params: [signedMessage, signature],
      });
      setVerified(verify === account.toLowerCase());
    } catch (error) {
      setError(error);
    }
  };

  const refreshState = () => {
    window.localStorage.setItem("provider", undefined);
    setNetwork("");
    setMessage("");
    setSignature("");
    setVerified(undefined);
  };

  const disconnect = () => {
    refreshState();
    deactivate();
  };

  useEffect(() => {
    const provider = window.localStorage.getItem("provider");
    if (provider) activate(connectors[provider]);
  }, []);

  return (
    <>
      <HStack>
        {!active ? (
          <Button onClick={onOpen}>Connect Wallet</Button>
        ) : (
          <Button onClick={disconnect}>Disconnect</Button>
        )}
      </HStack>

      <SelectWalletModal isOpen={isOpen} closeModal={onClose} />
    </>
  );
}
