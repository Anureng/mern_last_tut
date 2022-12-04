import {
  Text, Center, Flex, Image, Input
  , InputGroup,
  InputLeftAddon,

  InputRightElement,
  Button
} from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'
import Navbar from './Navbar';

function Registration() {
  const [show, setShow] = useState(false);
  const [showC, setShowC] = useState(false);
  const handle = () => setShow(!show)
  const handleC = () => setShowC(!showC)
  const [user, setUser] = useState({
    name: '', email: '', phone: '', work: '', password: '', cpassword: ''
  })
  let name, value;
  const handleInputs = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value })
  }

  const postData = async (e) => {
    e.preventDefault();
    const { name, email, phone, work, password, cpassword } = user;

    const res = await fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name, email, phone, work, password, cpassword
      })
    })
    const data = await res.json;
    if (res.status === 422 || !data) {
      window.alert("INVALID SUCCESSFULL");
      console.log("INVALID SUCCESSFULL");
    }
    else {
      window.alert("CONNECTION SUCCESSFULL")
      console.log("CONNECTION SUCCESSFULL");

    }
    console.log("click");
  }
  return (
    <>
      <Navbar />
      <Center bgGradient='linear(to-r, green.200, pink.500)' h="93vh">
        <Flex border={"2px solid black"}
          h="80vh"
          w="60vw"
          mt="8"
          borderRadius={30}>
          <Center gap={"2.3rem"}
            ml="3"
            flexDirection={'column'}>
            <Text fontSize={30} fontWeight="bold">
              Sign up
            </Text>
            <InputGroup>
              <InputLeftAddon children='Name' borderColor={"black"} backgroundColor={'black'} color="white" />
              <Input type='text'
                name='name'
                placeholder='Enter Name'
                borderColor={"black"}
                _placeholder={{ color: 'black' }}
                value={user.name}
                onChange={handleInputs}
              />
            </InputGroup>
            <InputGroup>
              <InputLeftAddon children='Email' borderColor={"black"} backgroundColor={'black'} color="white" />
              <Input type='email'
                name='email'
                placeholder='Enter Email'
                borderColor={"black"}
                _placeholder={{ color: 'black' }}
                value={user.email}
                onChange={handleInputs}
              />
            </InputGroup>
            <InputGroup>
              <InputLeftAddon children='Phone' borderColor={"black"} backgroundColor={'black'} color="white" />
              <Input type='tel'
                name='phone'
                placeholder='Enter Number'
                borderColor={"black"}
                _placeholder={{ color: 'black' }}
                value={user.phone}
                onChange={handleInputs}
              />
            </InputGroup>
            <InputGroup>
              <InputLeftAddon children='Work' borderColor={"black"} backgroundColor={'black'} color="white" />
              <Input type='text'
                name='work'
                placeholder='Enter Work'
                borderColor={"black"}
                _placeholder={{ color: 'black' }}
                value={user.work}
                onChange={handleInputs}
              />
            </InputGroup>
            <InputGroup>
              <InputLeftAddon children='Password' borderColor={"black"} backgroundColor={'black'} color="white" />
              <Input
                pr='4.5rem'
                type={show ? 'text' : 'password'}
                placeholder='Enter password'
                borderColor={"black"}
                _placeholder={{ color: 'black' }}
                name='password'
                value={user.password}
                onChange={handleInputs}
              />
              <InputRightElement width='4.5rem'>
                <Button h='1.75rem' size='sm' onClick={handle} borderColor={"black"} backgroundColor={'black'} color="white">
                  {show ? 'Hide' : 'Show'}
                </Button>
              </InputRightElement>
            </InputGroup>
            <InputGroup>
              <InputLeftAddon children=' Confirm Password' borderColor={"black"} backgroundColor={'black'} color="white" />
              <Input
                pr='4.5rem'
                type={showC ? 'text' : 'password'}
                placeholder='Confirm password'
                borderColor={"black"}
                _placeholder={{ color: 'black' }}
                name='cpassword'
                value={user.cpassword}
                onChange={handleInputs}
              />
              <InputRightElement width='4.5rem'>
                <Button h='1.75rem' size='sm' onClick={handleC} borderColor={"black"} backgroundColor={'black'} color="white">
                  {showC ? 'Hide' : 'Show'}
                </Button>
              </InputRightElement>
            </InputGroup>
            <Button backgroundColor={'black'} color="white" onClick={postData}>submit</Button>
          </Center>
          <Image height={"55vh"} mt="5rem" width="30vw" src='contact.png' />
        </Flex>
      </Center>
    </>
  )
}

export default Registration