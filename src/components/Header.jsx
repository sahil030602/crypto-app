import { Button, HStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <HStack bgColor={"blackAlpha.900"} pt={"4"} shadow={"base"} >
      <Button variant={"unstyled"} color={"white"} pl={"10"}pr={"10"} 
      css={{
          "&:hover": {
          transform :"scale(1.1)",
          }
        }}>
        <Link to="/">Home</Link>      
      </Button>
     
      <Button variant={"unstyled"} color={"white"}pr={"10"}
      css={{
        "&:hover": {
          transform :"scale(1.1)",
          }
        }}>
        <Link to="/exchange">Exchange</Link>      
      </Button>
      <Button variant={"unstyled"} color={"white"}pr={"10"}
      css={{
        "&:hover": {
          transform :"scale(1.1)",
          }
        }}>
        <Link to="/coins">Coins</Link>      
      </Button>
    </HStack>
  )
}

export default Header
