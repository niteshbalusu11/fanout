import { authenticatedLndGrpc, getWalletInfo } from "lightning";

export async function getInfo(testnet: string) {
  const { lnd } = authenticatedLndGrpc({
    cert: "=",
    macaroon: "",
    socket: "",
  });

  const info = await getWalletInfo({ lnd });
  return info;
}
