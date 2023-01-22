import { Flex, Text } from '@chakra-ui/react'
import {PlusSquareIcon} from "@chakra-ui/icons"
import React from 'react'

export default function NoPisitionPage() {
  return (
    <Flex>
        <Text fontSize='5xl'>
            Товар відсутній. Ви можете додати товар тут.
        </Text>
        <PlusSquareIcon/>
    </Flex>
  )
}
