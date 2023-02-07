import { Flex } from '@chakra-ui/react'
import React from 'react'

export default function Page(props) {
  return (
    <Flex w={'100%'} minH={'100vh'}>
        {props.children}
    </Flex>
  )
}
