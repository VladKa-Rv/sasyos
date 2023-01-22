import { Button, Flex, Text } from "@chakra-ui/react";
import React from "react";
import Header from "./Header";
import SubHeader from "./SubHeader";

export default function OrderPage() {
  return (
    <>
      <Header />
      <SubHeader />
      <Flex
        marginTop="10em"
        justifyContent="center"
        alignItems="center"
        direction="column"
      >
        <Flex
          background="#2E2B39"
          w="70%"
          borderRadius={10}
          justifyContent="center"
          alignItems="center"
          direction="column"
          gap={5}
          p={3}
        >
          <Flex w="100%" fontSize={22}>
            <Text >Дякую, Ваше замовлення прийнято</Text>
          </Flex>
          <Flex w="100%">
            <Text>
              Для підтвердежння Вашого замовлення Вам зателефонують в найближчий
              час
            </Text>
          </Flex>
          <Flex w="100%">
            <Button>Повернутись до покупок</Button>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}
