import React, { useEffect } from 'react';
import axios from 'axios';
import Loader from './Loader';
import { useState } from 'react';
import { Container, HStack, Radio, RadioGroup } from '@chakra-ui/react';
import ErrorComponent from './ErrorComponent';
import CoinsCard from './CoinsCard';
// import CoinsDetails from './CoinsDetails';
const Coins = () => {
  const [coins,setCoins]=useState([]);
  const [loading,setLoading]=useState(true);
  const[error,setError]=useState(false);
  const[currency,setCurrency]=useState("inr");
  

  const currencySymbol =
  currency==="inr"?"₹": currency==="eur"?"€":"$";
  useEffect(()=>{
    const fetchCoins= async () =>{
      
    try{
      const{data} = await axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}`);
      setCoins(data);
      console.log(data);
      setLoading(false);
    }
    catch(error){
      setError(true);
      setLoading(false)
    }
  };
    fetchCoins();

    
  },[currency]);

  if (error) return <ErrorComponent message={ "Error website under construction"}/>
  
  return (
    <>
   
    <Container maxW={"container.xl"}>
      {loading?( <Loader/> ):
      (
      <>
      <RadioGroup p={"8"}  value={currency} onChange={setCurrency}>
        <HStack spacing={"4"}>
          <Radio value={"inr"}>INR</Radio>
          <Radio value={"usd"}>USD</Radio>
          <Radio value={"eur"}>EUR</Radio>
        </HStack>
      </RadioGroup>


      <HStack wrap={"wrap"} justifyContent={"center"}>
        
        {coins.map((i)=>(
        <CoinsCard
          key={i.id}
          id={i.id}
          url={i.id }
          name={i.name}
          img={i.image}
          symbol={i.symbol}
          price={i.current_price}
          currencySymbol={currencySymbol}
        />
        ))}
      </HStack>
      </>
     )}
    </Container>
    </>
     
  );
};

export default Coins
