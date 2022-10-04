import React from 'react'
import { Box, Text,Heading, HStack, Flex, Spacer } from '@chakra-ui/react'

function Navbar() {
  return (
    <Flex gap={"3rem"} bgGradient='linear(to-r, green.200, pink.500)' p={2}>
      <Text fontSize={"2xl"}>Anurag</Text>
      <Spacer></Spacer>
      <Text fontSize={"2xl"}>Home</Text>
      <Text fontSize={"2xl"}>About</Text>
      <Text fontSize={"2xl"} >Contact</Text>
      <Text fontSize={"2xl"}>Registration</Text>
      <Text fontSize={"2xl"} mr="1rem">Login</Text>
    </Flex>
  )
}
export default Navbar