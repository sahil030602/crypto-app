import { Heading, Image, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom'

const CoinsCard =({ id,name,img,symbol,price,currencySymbol="₹"})=>
  <Link to={`/coin/${id}`} target={"blank"} >
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
    <Heading size={"md"} noOfLines={1} color={"whiteAlpha.800"}><h4>{symbol}</h4></Heading>
    <Text noOfLines={1} color={"whiteAlpha.800"}>{name}</Text> 
    <Text noOfLines={1} color={"whiteAlpha.800"}>{id}</Text>

    <Text noOfLines={1}color={"whiteAlpha.800"}>{price ?`${currencySymbol}${price}`: "NA"}</Text>
  </VStack>
  </Link>

export default CoinsCard
