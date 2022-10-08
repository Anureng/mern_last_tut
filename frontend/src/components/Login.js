import { Flex,Box, Heading, Input,Center,
InputGroup,
InputRightElement,
Button,
Text,
Link
} from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react';
import Navbar from './Navbar';

function Login() {
  const [show, setShow] = useState(false);
  const handleclick=()=>{
    setShow(!show)
  }
  return (
    <>
    <Navbar/>
    <Center flexDirection={"column"}  bgGradient='linear(to-r, green.200, pink.500)' height={"100vh"} width="100vw">
<Center border={"2px solid black"}  width={"fit-content"} flexDirection="column" p="2rem" gap={"1.5rem"} borderRadius="2rem" >
<Heading>Contact us</Heading>
<Input placeholder='enter email' borderColor={"black"} _placeholder={{ color: 'black' }}></Input>
<InputGroup>
<Input placeholder='enter password' type={show?'email':"password"} borderColor={"black"} _placeholder={{ color: 'black' }}></Input>
<InputRightElement>
<Button onClick={handleclick} p={2}  borderColor={"black"} backgroundColor={'black'} color="white" _hover={{bgcolor:'black'}}>
  {show?'hide':'show'}
</Button>
</InputRightElement>
</InputGroup>
<Button >submit</Button>
or
<Text>Create a new account{' '}
<Link color='white' href='#'>
sign up
  </Link>
</Text>
</Center>
    </Center>
    </>
  )
}

export default Login