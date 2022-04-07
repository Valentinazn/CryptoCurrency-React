import styled from 'styled-components'

export const CoinContainer = styled.div`

display: flex;
justify-content: center;


`

export const CoinRow = styled.div`

display: flex;
flex-direction: row;
justify-content: start;
align-items: center;
height: 80px;
width: 100%;
background: var(--clr-dark);
border-radius: 15px;
margin-bottom: 30px;
padding: 20px


`

export const CoinWrap = styled.div`

display: flex;
align-items: center;
padding-right: 24px;
min-width: 300px;



`



export const CoinTitle = styled.h1`

font-size: var(--fs-text);
width: 150px;


`

export const CoinSymbol = styled.p`

text-transform: uppercase;

`

export const CoinData = styled.div`

display: flex;
text-align: center;
justify-content: space-beetween;
width: 100%;




`

export const CoinPrice = styled.p`

width: 110px;

`

export const CoinVolume = styled.p`

width: 200px;

`

export const CoinPercentRed = styled.p`

width: 80px;
color: var(--clr-crypto-down);

`

export const CoinPercentGreen = styled(CoinPercentRed)`

color: var(--clr-crypto-up) ;

`

export const CoinMarketCap = styled.p`

width: 240px;

`