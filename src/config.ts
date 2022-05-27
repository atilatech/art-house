// this file is auto-generated each time scripts/deploy.js is run
import configChains from './config-chains.json';
import { Chain } from './models/Chain';

export const activeChainId = localStorage.getItem("activeChainId") || "44787"; // default to CELO


export const ALL_CONFIG_CHAINS: {[key: string]: Chain} =  (configChains as any);

delete ALL_CONFIG_CHAINS.localhost;
export let CONFIG_CHAINS: {[key: string]: Chain} = {};

// if the URL starts with art.atila.ca' then only show mainnet chains
Object.values(ALL_CONFIG_CHAINS)
// .filter(chain => window.location.host.startsWith('art.atila.ca') ? chain.IS_MAIN_NET : !chain.IS_MAIN_NET)
.forEach(chain => {
    CONFIG_CHAINS[chain.CHAIN_ID] = chain;
})

export const NFT_MARKETPLACE_ADDRESS = CONFIG_CHAINS[activeChainId].NFT_MARKETPLACE_ADDRESS;
export const NFT_ADDRESS = CONFIG_CHAINS[activeChainId].NFT_ADDRESS;

export const REACT_APP_MORALIS_SERVER_URL = process.env.REACT_APP_MORALIS_SERVER_URL;
export const REACT_APP_MORALIS_APP_ID = process.env.REACT_APP_MORALIS_APP_ID;


export const MORALIS_SUPPORTED_CHAINS = ["4", "80001", "97", "56"];


// TODO change this to a dictionary where each marketplace is a key with a SUPPORTED_CHAINS key
export const OPENSEA_SUPPORTED_CHAINS = ["4", "80001", "97"];
export const RARIBLE_SUPPORTED_CHAINS = ["4"];
export const LOOKSRARE_SUPPORTED_CHAINS = ["4"];