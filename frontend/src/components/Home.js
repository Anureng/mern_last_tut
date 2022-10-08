import { Center,Heading,Text} from '@chakra-ui/react'
import React from 'react'
import Navbar from './Navbar'

function Home() {
  return (
    <>
    <Navbar/>
<Center h={"92.9vh"} w={"100vw"} bgGradient='linear(to-r, green.200, pink.500)' flexDirection={'column'}>
<Heading fontWeight={'bold'}>Welcome!!!</Heading>
<Text fontSize={"2xl"}>mern app</Text>
</Center>
    </>
  )
}

export default Home