import React, { useEffect } from 'react';
import axios from 'axios';
import Loader from './Loader';
// import {servers} from "../index";
import { useState } from 'react';
import { Container, HStack, Heading, VStack,Text,Image } from '@chakra-ui/react';
import ErrorComponent from './ErrorComponent';
// import { transform } from 'framer-motion';
// import { wrap } from 'framer-motion';
const Exchange = () => {
  const [exchange,setExchange]=useState([]);
  const [loading,setLoading]=useState(true);
  const[error,setError]=useState(false)

  useEffect(()=>{
    const fetchExchange= async()=>{
    try{
      const{data} = await axios.get(`https://api.coingecko.com/api/v3/exchanges?per_page=250`);
      setExchange(data);
      // console.log(data);
      setLoading(false);
    }
    catch(error){
      setError(true);
      setLoading(false)
    }
  };
    fetchExchange();

    
  },[]);

  if (error) return <ErrorComponent message={ "Error website under construction"}/>
  
  return (
    <Container maxW={"container.xl"} >
      {loading?( <Loader/> ):
      (
      <>
      <HStack wrap={"wrap"}>
        {exchange.map((i)=>(
        <ExchangeCard
          key={i.id}
          name={i.name}
          rank={i.trust_score_rank}
          img={i.image}
          url={i.url}
         
        />
        ))}
      </HStack>
      </>
     )}
    </Container>
     
  );
};
const ExchangeCard =({name,rank,img,url})=>
  <a href={url} target={"blank"}>
  <VStack w={"52"} 
  shadow={"lg"} 
  transition={"all 0.3s"}
  p={"8"} 
  borderRadius={"lg"}
  m={'4'}
  bgColor={"blackAlpha.900"}
  css={{
    "&:hover": {
      transform :"scale(1.1)",
      
    }
  }}>
    <Image src={img} alt={`Exchange`} objectFit={`contain`} w={10} h={10} />
    <Heading size={"md"} noOfLines={1} color={"whiteAlpha.800"}><h4>{rank}</h4></Heading>
    <Text noOfLines={1}color={"whiteAlpha.800"}>{name}</Text>
  </VStack>
  </a>


export default Exchange
