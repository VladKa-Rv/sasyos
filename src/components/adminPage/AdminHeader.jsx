import { Menu, MenuButton, Text, Flex, useDisclosure, useColorMode, Button, useColorModeValue } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import MainLogo from "../../logo/MainLogo";
import { routesName } from "../../routes/routes";
import AdminPostion from "./AdminPosition";

export default function AdminHeader() {
  const modalPostion = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode()
  const navigate = useNavigate()
  const bg = useColorModeValue('black', 'black')
  const color = useColorModeValue('white', 'white')

  return (
    <Flex
      w="100%"
      height={90}
      alignItems="center"
      justify="center"
      justifyContent="space-around"
      position="fixed"
      top="0"
      zIndex={1}
      bg={bg}
      color={color}
    >
      <Menu>
        <MenuButton h="80%" w={100}  onClick={() => navigate("/")}>
          <MainLogo />
        </MenuButton>
        <MenuButton onClick={() => navigate('products')}>
          <Text fontSize={19} >Наявний товар</Text>
        </MenuButton>
        <MenuButton onClick={() => modalPostion.onOpen()}>
          <Text fontSize={19}>Додати товар</Text>
        </MenuButton>
        <MenuButton onClick={() => navigate('management')}>
          <Text fontSize={19}>Менеджмент</Text>
        </MenuButton>
        <MenuButton>
          <Text fontSize={19}>Обліковий запис</Text>
        </MenuButton>
        <MenuButton onClick={() => navigate("/")}>
          <Text fontSize={19}>Вихід</Text>
        </MenuButton>
        <Button colorScheme="blackAlpha.300" border="1px solid white"  size='lg' onClick={toggleColorMode}>
          {colorMode === 'light' ? 'Light' :  'Dark'}
        </Button>
      </Menu>
      <AdminPostion
        isOpen={modalPostion.isOpen}
        onClose={modalPostion.onClose}
      />
    </Flex>
  );
}
