import React from "react";

import { 

    CoinContainer, 
    CoinRow, 
    CoinWrap,
    CoinTitle, 
    CoinSymbol,
    CoinData,
    CoinPrice,
    CoinVolume,
    CoinPercentRed,
    CoinPercentGreen,
    CoinMarketCap

} from "./CoinElements";


export default function Coin({
    symbol, 
    price, 
    volume, 
    image, 
    name, 
    priceChange,
    marketCap

}){

   

    return(

        <CoinContainer>
            <CoinRow>
                <CoinWrap>

                    <img src={image} alt='crypto'/>
                    <CoinTitle>{name}</CoinTitle>
                    <CoinSymbol>{symbol}</CoinSymbol>

                </CoinWrap>

                <CoinData>

                    <CoinPrice>€{price}</CoinPrice>
                    <CoinVolume>€{volume.toLocaleString()}</CoinVolume>
                    
                    {
                        priceChange < 0 ? 
                        ( <CoinPercentRed>{priceChange.toFixed(2)}%</CoinPercentRed>) :
                         ( <CoinPercentGreen>{priceChange.toFixed(2)}%</CoinPercentGreen>)
                    }

                    <CoinMarketCap>Mkt Cap: €{marketCap.toLocaleString()} </CoinMarketCap>
                </CoinData>
            </CoinRow>
        </CoinContainer>
    )
}