import React from 'react'
import { Box, Text,Heading, HStack, Flex, Spacer,Link } from '@chakra-ui/react'
import {NavLink} from "react-router-dom"


function Navbar() {
  return (
    <Flex gap={"3rem"} bgGradient='linear(to-r, green.200, pink.500)' p={2} listStyleType="none">
      <Text fontSize={"2xl"}>Anurag</Text>
      <Spacer></Spacer>
      <Text fontSize={"2xl"}>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      </Text>
      
      <Text fontSize={"2xl"}> <li>
        <NavLink to="/about">About</NavLink>
      </li>
      </Text>
      <Text fontSize={"2xl"} >
      <li>
        <NavLink to="/contact">Contact</NavLink>
      </li>
      </Text>
      <Text fontSize={"2xl"}>
      <li>
        <NavLink to="/login">
        Login
        </NavLink>
      </li>
      </Text>
      <Text fontSize={"2xl"} mr="1rem">
      <li>
        <NavLink to="/registration">Registration</NavLink>
      </li>
      </Text>
    </Flex>
  )
}
export default Navbar