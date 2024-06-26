import type { AppProps } from "next/app";
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import { Arbitrum } from "@thirdweb-dev/chains";
import { Layout } from "../components";
import "../styles/globals.css";
import Head from "next/head";
import localFont from "next/font/local";

const mokoto = localFont({
  src: "../public/fonts/Mokoto.ttf",
  display: "swap",
  variable: "--font-mokoto",
});

// This is the chain your dApp will work on.
const activeChain = Arbitrum;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider
      activeChain={activeChain}
      clientId={process.env.NEXT_PUBLIC_CLIENT_ID}
    >
      <Head>
        <title>Mint access nft</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="This is an NFT that will grant you access to all gasless drops"
        />
        <meta
          property="og:image"
          content="https://nft-mint-dapp-evm.vercel.app/Gwei_Presale_Pass.png"
        />
        <meta
          property="og:url"
          content="https://nft-mint-dapp-evm.vercel.app"
        />
        <meta name="keywords" content="NFTS, mint nfts" />
      </Head>
      <div className={`w-screen bg-primary ${mokoto.variable}`}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </div>
    </ThirdwebProvider>
  );
}

export default MyApp;
