import axios from "axios";
import React, { useState, useEffect } from "react";
import Coin from "../../components/Coin/index";
import { 
  CoinApp, 
  CoinH1, 
  CoinSearch,
  SearchBox,
  Input,
  SearchIcon
 } from "./HomeElements";



export default function Home() {

  const [fetchData, setFetchData] = useState([])
  const [search, setSearch] = useState('')

    useEffect( () =>{

    const getData = async () =>{

      try{

        const res = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=100&page=1&sparkline=false')
        setFetchData(res.data)

      }catch(err){
        alert(err.message)
      }
    }

    getData()

  },[])

 

  const handleChange = e =>{
    setSearch(e.target.value)
  }

  const filteredCoins = fetchData.filter( coin =>
    coin.name.toLowerCase().includes(search.toLocaleLowerCase())
    )

  return (
    <>

          <CoinSearch>

        <CoinH1>CryptoCurrency</CoinH1>

            <SearchBox>
        <form>
            <Input type="text" name="txt" 
            onChange={handleChange}/>
        </form>
            <SearchIcon />
    </SearchBox>

      

      </CoinSearch>

    <CoinApp>

      {
        filteredCoins.map( coin =>{

          return <Coin
           
          key={coin.id}
          name={coin.name}
          image={coin.image} 
          symbol={coin.symbol}
          marketCap={coin.market_cap}
          price={coin.current_price}
          priceChange={coin.price_change_percentage_24h}
          volume={coin.total_volume}
          
          />
          

        })
      }

    </CoinApp>
     
    </>
  );
}