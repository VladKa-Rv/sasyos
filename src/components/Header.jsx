import {
  Menu,
  MenuButton,
  Text,
  Flex,
  Switch,
  FormControl,
  FormLabel,
  useColorMode,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import { PhoneIcon } from "@chakra-ui/icons";
import "../Header.css";
import { useNavigate } from "react-router-dom";
function Header() {
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue("black", "black");
  const color = useColorModeValue("white", "white");
  const navigate = useNavigate()

  return (
    <Flex
      w="100%"
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
        <MenuButton  w={100} borderRadius={20} onClick={() => navigate("/")}>
          <Text fontWeight="bold" fontSize={22}>
            Y.O.S
          </Text>
        </MenuButton>
        <MenuButton>
          <Text fontSize={17}>Особистий кабінет</Text>
        </MenuButton>
        <MenuButton>
          <Flex p={3} borderRadius="full" alignItems="center" justify="center">
            <PhoneIcon m={2}></PhoneIcon>
            <Text fontSize={17}>068 053 41 81</Text>
          </Flex>
        </MenuButton>
        <Button
          colorScheme="blackAlpha.300"
          border="1px solid white"
          onClick={toggleColorMode}
          textColor="white"
        >
          {colorMode === "light" ? "Light" : "Dark"}
        </Button>
      </Menu>
    </Flex>
  );
}

export default Header;
