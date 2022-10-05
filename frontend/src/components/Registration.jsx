import { Box, Text,Center, Flex,Image,Input
,InputGroup,
InputLeftAddon,
InputRightAddon,
InputRightElement,
Button
} from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'

function Registration() {
  const [show, setShow] = useState(false);
  const [showC, setShowC] = useState(false);
  const handle=()=>setShow(!show)
  const handleC=()=>setShowC(!showC)
  return (
    <>
    <Center bgGradient='linear(to-r, green.200, pink.500)' h="93vh">
      <Flex border={"2px solid black"} h="80vh" w="60vw" mt="8" borderRadius={30}>
       <Center gap={"2.3rem"} ml="3" flexDirection={'column'}>
        <Text fontSize={30} fontWeight="bold">
          Contact Us
        </Text>
        <InputGroup>
    <InputLeftAddon children='Name' borderColor={"black"} backgroundColor={'black'} color="white"/>
    <Input type='text' placeholder='Enter Name' borderColor={"black"} _placeholder={{ color: 'black' }}/>
  </InputGroup>
  <InputGroup>
    <InputLeftAddon children='Email' borderColor={"black"} backgroundColor={'black'} color="white"/>
    <Input type='email' placeholder='Enter Email' borderColor={"black"} _placeholder={{ color: 'black' }} />
  </InputGroup>
  <InputGroup>
    <InputLeftAddon children='Phone' borderColor={"black"} backgroundColor={'black'} color="white"/>
    <Input type='tel' placeholder='Enter Number' borderColor={"black"} _placeholder={{ color: 'black' }}/>
  </InputGroup>
  <InputGroup>
    <InputLeftAddon children='Work' borderColor={"black"} backgroundColor={'black'} color="white"/>
    <Input type='text' placeholder='Enter Work' borderColor={"black"} _placeholder={{ color: 'black' }}/>
  </InputGroup>
  <InputGroup>
    <InputLeftAddon children='Password' borderColor={"black"} backgroundColor={'black'} color="white"/>
    <Input
        pr='4.5rem'
        type={show ? 'text' : 'password'}
        placeholder='Enter password'
        borderColor={"black"}
        _placeholder={{ color: 'black' }}
      />
      <InputRightElement width='4.5rem'>
        <Button h='1.75rem' size='sm' onClick={handle} borderColor={"black"} backgroundColor={'black'} color="white">
          {show ? 'Hide' : 'Show'}
        </Button>
      </InputRightElement>
  </InputGroup>
  <InputGroup>
    <InputLeftAddon children=' Confirm Password' borderColor={"black"} backgroundColor={'black'} color="white"/>
    <Input
        pr='4.5rem'
        type={showC ? 'text' : 'password'}
        placeholder='Confirm password'
        borderColor={"black"}
        _placeholder={{ color: 'black' }}
      />
      <InputRightElement width='4.5rem'>
        <Button h='1.75rem' size='sm' onClick={handleC} borderColor={"black"} backgroundColor={'black'} color="white">
          {showC ? 'Hide' : 'Show'}
        </Button>
      </InputRightElement>
  </InputGroup>
  <Button backgroundColor={'black'} color="white">submit</Button>
       </Center>
       <Image height={"55vh"} mt="5rem" width="30vw" src='contact.png' />
      </Flex>
    </Center>
    </>
  )
}

export default Registration