import { Box, Heading, Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import btc from"../assests/btc.png"
import{ motion} from "framer-motion"

const Home = () => {
  return (
    <Box bgColor={"blackAlpha.900"} h={"88vh"} w={"full"}
    display={"flex"}
    justifyContent={"center"}
    alignItems={"center"}

    >
      <VStack
       w={"50%"}
       display={"flex"}
       flexDirection={"column"}
       justifyContent={"center"}
       alignItems={"flex-start"}
       marginTop={"-60"}
       >
      <Heading
        color={"whiteAlpha.800"}
        fontWeight={"thick"}
        fontSize={"6xl"}
        fontFamily={"Sanserif"}
      
        // margin={"auto"}
        // pr={"40"}
        >
        <h1>EMoney</h1>
        </Heading>
        <Text
       
        color={"whiteAlpha.800"}
        // display={"flex"}
        // pt={"20"}
        // pr={"30"}
        // justifyContent={"flex-start"}
        // flexDirection={"column"}
        >Cryptocurrency (or “crypto”) is a digital currency, such as Bitcoin, that is used as an alternative payment method or speculative investment. Cryptocurrencies get their name from the cryptographic techniques that let people spend them securely without the need for a central government or bank.
        <br/>Cryptocurrencies are digital tokens. They are a type of digital currency that allows people to make payments directly to each other through an online system. Cryptocurrencies have no legislated or intrinsic value; they are simply worth what people are willing to pay for them in the market.
        <br/>Cryptocurrency offers several alternatives that are not possible with conventional money. Programmable money, for instance, can enable correct revenue sharing in real-time while boosting transparency to ease back-office reconciliation
        </Text>
      </VStack>
       
     
      <motion.div
      style={{
        height:"80vh"
          }}
          animate={{
            translateY : "20px"
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse"
          }}>
      <Image src={btc} 
      mt={"-20"}
      objectFit={"contain"}
       w={"full"} 
       h={"full"} 
       filter={"grayscale(1)"} 
      //  marginLeft={"48vh"}
       />

      </motion.div>
      
    </Box>
   
  )
}

export default Home
