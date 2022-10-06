import { Flex ,Center, Heading} from '@chakra-ui/react'
import React from 'react'

function Error() {
  return (
    <>
    <Center bgGradient='linear(to-r, green.200, pink.500)' h={"93vh"}>
        <Heading borderColor={"red"} width="fit-content">
            404 NOT FOUND
        </Heading>
    </Center>

    </>
  )
}

export default Error