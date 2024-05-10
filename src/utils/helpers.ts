export const truncateAddress = (address: string) => {
  if (!address) return "No Account";
  const match = address.match(
    /^(0x[a-zA-Z0-9]{2})[a-zA-Z0-9]+([a-zA-Z0-9]{2})$/
  );
  if (!match) return address;
  return `${match[1]}…${match[2]}`;
};

export const toHex = (num: any) => {
  const val = Number(num);
  return "0x" + val.toString(16);
};
export const formatMarketCapValue = (value: number) => {
  const typos = ["", "K", "M", "B", "T"];

  const order = Math.floor(Math.log10(Math.abs(value)) / 3);

  const formattedValue = parseFloat((value / Math.pow(1000, order)).toFixed(2));

  return formattedValue + typos[order];
};
