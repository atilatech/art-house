import React from "react";

export class Chain {
    NETWORK_NAME: string = "";
    CHAIN_NAME: string = "";
    CURRENCY_SYMBOL: string = "";
    NFT_MARKETPLACE_ADDRESS: string = "";
    NFT_ADDRESS: string = "";
    IS_MAIN_NET: string = "";
    LOGO_URL: string = "";
    CHAIN_ID: string = "";
    BLOCK_EXPLORER_URL: string = "";
    RPC_PROVIDER_URL: string = "";

    public constructor(props: Chain) {
        Object.assign(this, props);
    }

    getChainFullName = () => {
        return `${this.CHAIN_NAME}${this.IS_MAIN_NET ? "" : ' ('+this.NETWORK_NAME + ')'}`
    }

    static ChainDisplay = ({chain, showName=true, showLogo=true}: {chain: Chain, showName?: boolean, showLogo?: boolean}) => {
        return (
            <>
                {showName && chain.getChainFullName()}
                {showLogo && <img src={chain.LOGO_URL} alt={chain.CHAIN_NAME} width={50} />}
            </>
            
        )
    }
}