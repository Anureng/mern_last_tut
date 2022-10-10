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
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [show, setShow] = useState(false);
  const loginUser=async(e)=>{
    
    const res= await fetch('/signin',{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        email,
        password
      })
    })
    const data=res.json();
    if(res.status===400 || !data){
      window.alert("Inavlid credentials")
    }
    else{
      window.alert("connection success")
    }
  }
  
  const handleclick=()=>{
    setShow(!show)
  }
  return (
    <>
    <Navbar/>
    <Center flexDirection={"column"}  bgGradient='linear(to-r, green.200, pink.500)' height={"100vh"} width="100vw">
<Center border={"2px solid black"}  width={"fit-content"} flexDirection="column" p="2rem" gap={"1.5rem"} borderRadius="2rem" >
<Heading>Contact us</Heading>
<Input placeholder='enter email'
 borderColor={"black"}
  _placeholder={{ color: 'black' }}
  name="email"
  value={email}
  onChange={(e)=>setEmail(e.target.value)}
  ></Input>
<InputGroup>
<Input placeholder='enter password'
 type={show?'email':"password"}
  borderColor={"black"}
   _placeholder={{ color: 'black' }}
   name="password"
   value={password}
   onChange={(e)=>setPassword(e.target.value)}
   ></Input>
<InputRightElement>
<Button onClick={handleclick} p={2}  borderColor={"black"} backgroundColor={'black'} color="white" _hover={{bgcolor:'black'}}>
  {show?'hide':'show'}
</Button>
</InputRightElement>
</InputGroup>
<Button onClick={loginUser}>submit</Button>
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