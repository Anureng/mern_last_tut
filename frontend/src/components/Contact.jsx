import { Box,Text,VStack,Icon, Flex,Wrap, WrapItem, Center,Input,Heading, Textarea, InputGroup, InputLeftAddon, Button } from '@chakra-ui/react'
import React from 'react'
import { FaPhone,FaAddressBook ,FaEnvelope} from 'react-icons/fa';


function Contact() {
  return (
   <>
   {/* <Box>
   <VStack border={"2px solid red"} p="5rem">
     <Flex gap={"1rem"}>
      <Wrap border={"2px solid black"} p="2" display={"flex"} h="14" justifyContent={"center"} alignItems="center" gap={"1rem"}>
        <WrapItem>
      <FaPhone/>
      <Text>7874584784</Text>
        </WrapItem>
      </Wrap>
      <Wrap border={"2px solid black"} p="2" h="14" justifyContent={"center"} alignItems="center" gap={"1rem"}>
<WrapItem>

      <FaAddressBook/>
      <Text>Mumbai,Mh,India</Text>
</WrapItem>
      </Wrap>
      <Wrap border={"2px solid black"} p="2" h="14" justifyContent={"center"} alignItems="center" gap={"1rem"}>
     <WrapItem>

      <FaPhone/>
      <Text>787458478</Text>
     </WrapItem>
      </Wrap>
    </Flex>
   </VStack>
   </Box> */}
   <VStack p="5rem"  bgGradient='linear(to-r, green.200, pink.500)' > 
   <Wrap spacing={"3rem"}>
    <WrapItem border={"2px solid black"} p="2" display={"flex"} h="14" justifyContent={"center"} alignItems="center" gap={"1rem"}>
    <FaPhone/>
      <Text>7874584784</Text>
    </WrapItem>
    <WrapItem border={"2px solid black"} p="2" display={"flex"} h="14" justifyContent={"center"} alignItems="center" gap={"1rem"}>
    <FaAddressBook/>
      <Text>Mumbai,Mh,India</Text>
    </WrapItem>
    <WrapItem border={"2px solid black"} p="2" display={"flex"} h="14" justifyContent={"center"} alignItems="center" gap={"1rem"}>
    <FaEnvelope/>
      <Text>abc@gmail.com</Text>
    </WrapItem>
   </Wrap>
   </VStack>
   <VStack   bgGradient='linear(to-r, green.200, pink.500)'>
  <Wrap border={'2px solid black'} w="30vw" p="4" display={"flex" } alignItems="center" borderRadius={"1rem"} justifyContent={"center"} >
    <WrapItem flexDirection={'column'} spacing="4rem" gap={"0.8rem"}>
  <Heading>Contact</Heading>
  
  <Box flexDirection={'row'}>
    <InputGroup>
    <InputLeftAddon>
    Email
    </InputLeftAddon>
  <Input placeholder='Email'/>
    </InputGroup>
    <br />
    <InputGroup>
    <InputLeftAddon>
    Password
    </InputLeftAddon>
  <Input placeholder='Password'/>
    </InputGroup>
  </Box>
<Textarea h={'30vh'} placeholder="Enter your query!!!!">
</Textarea>
<Button>Submit</Button>
    </WrapItem>
  </Wrap>
   </VStack>
   </>
  )
}

export default Contact