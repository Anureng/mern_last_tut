import React from 'react'
import { Box, Text,Heading, HStack } from '@chakra-ui/react'

function Navbar() {
  return (
    <HStack spacing={4} >
 <Feature
 title='Plan Money'
        desc='The future can be even brighter but a goal without a plan is just a wish'
        />
 <Feature
 title='Save Money'
 desc='You deserve good things. With a whooping 10-15% interest rate per annum,  grow your savings on your own terms with our completely automated process'
 />
    </HStack>
  )
}
function Feature({title,desc,...rest}){
    return(
    <Box p={5} borderWidth='1px' {...rest} >
    
        <Heading>{title}</Heading>
        <Text>{desc}</Text>
    </Box>
    )
    }
export default Navbar