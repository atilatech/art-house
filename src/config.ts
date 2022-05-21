// this file is auto-generated each time scripts/deploy.js is run
import configChains from './config-chains.json';

export const activeChainId = localStorage.getItem("activeChainId") || "localhost";

type chainConfigType = {
    NETWORK_NAME: string,
    CHAIN_NAME: string,
    NFT_MARKETPLACE_ADDRESS: string,
    NFT_ADDRESS: string,
    IS_MAIN_NE: string,
    LOGO_URL: string,
    CHAIN_ID: string,
    BLOCK_EXPLORER_URL: string,
    RPC_PROVIDER_URL: string
}

export const CONFIG_CHAINS: {[key: string]: chainConfigType} =  (configChains as any);

delete CONFIG_CHAINS.localhost;

export const NFT_MARKETPLACE_ADDRESS = CONFIG_CHAINS[activeChainId].NFT_MARKETPLACE_ADDRESS;
export const NFT_ADDRESS = CONFIG_CHAINS[activeChainId].NFT_ADDRESS;
