import { Button, Flex, Menu, MenuButton, Text, useColorModeValue } from "@chakra-ui/react";

export default function LeftMenu() {
  const bg = useColorModeValue('blackAlpha.900', 'blackAlpha.700')
  const color = useColorModeValue('white', 'white')

  return (
    <Flex
      direction="column"
      h="100%"
      position='fixed'
      top='13%'
      bg={bg}
      color={color}
      zIndex={1}
    >
      <Flex
        justify="space-evenly"
        h="100%"
        alignItems="start"
        direction="column"
        m={3}
      >
        <Menu>
        <MenuButton fontSize={15}>Зарядні пристрої</MenuButton>
        <MenuButton fontSize={15}>Захисне скло</MenuButton>
        <MenuButton fontSize={15}>Кабелі та перехідники</MenuButton>
        <MenuButton fontSize={15}>AirTag</MenuButton>
        <MenuButton fontSize={15}>Чистячі засоби</MenuButton>
        <MenuButton fontSize={15}>Зовнішні акумулятори</MenuButton>
        <MenuButton fontSize={15}>Зовнішні накопичувачі</MenuButton>
        <MenuButton fontSize={15}>Ремінці для Apple Watch</MenuButton>
        </Menu>
      </Flex>
    </Flex>
  );
}
