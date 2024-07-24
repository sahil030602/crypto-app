import { Avatar, Box, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import img from "../assests/img.png.jpeg"

const Footer = () => {
  return (
    <Box bgColor={"blackAlpha.900"}
    color={"whiteAlpha.800"}
    minH={"48"}
    px={"16"}
    py={["16","8"]}>


    <Stack direction={["column","row"]} h={"full"} alignItems={"center"}>
        <VStack w={"full"} alignItems={["center","flex-start"]} >
            <Text fontWeight={"bold"}>AboutUs</Text>
            <Text fontSize={"sm"} letterSpacing={"widdest"} textAlign={["center","left"]}>We are the best crypto money detail app in all over India  and providing all kind of services</Text>

        </VStack>
        <VStack>
            <Avatar boxSize={"28"} mt={["4","0"]} src={img}/>
            <Text>Our Owner</Text>
        </VStack>
    </Stack>    

    </Box>
  )
}

export default Footer
