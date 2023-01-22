import {
  Flex,
  Menu,
  MenuButton,
  Text,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  useDisclosure,
  Image,
  useColorModeValue,
  Box,
  Input,
} from "@chakra-ui/react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "nanoid";
import { CloseIcon } from "@chakra-ui/icons";
import { getImgBase64Src } from "../helper/base64/base64";
import {
  getFavoriteArticles,
  removeFavoriteArticle,
} from "./Slice/ProductSlice";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { sumArticles } from "../helper/sum/Sub";

export default function SubHeader() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const bg = useColorModeValue("black", "black");
  const color = useColorModeValue("white", "white");
  const favorites = useSelector(getFavoriteArticles);
  const [count, setCount] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const removeArticle = (data) => {
    console.log(data);
    dispatch(removeFavoriteArticle(data));
    //onClose()
  };


  return (
    <Flex
      justify="space-evenly"
      w="100%"
      position="fixed"
      top="50"
      h="3em"
      zIndex={1}
      bg={bg}
      color={color}
    >
      <Menu>
        <MenuButton>
          <Flex alignItems="center">
            <Text>Акумулятори</Text>
          </Flex>
        </MenuButton>
        <MenuButton>
          <Flex alignItems="center">
            <Text>Дисплеї</Text>
          </Flex>
        </MenuButton>
        <MenuButton>
          <Flex alignItems="center">
            <Text>Захисне скло</Text>
          </Flex>
        </MenuButton>
        <MenuButton onClick={() => onOpen()}>
          <Flex alignItems="center">
            <Text>Корзина</Text>
          </Flex>
        </MenuButton>
      </Menu>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="md">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader textAlign="center">Товари</DrawerHeader>
          <DrawerCloseButton />
          <DrawerBody>
            {favorites.length !== 0 ? (
              <Flex alignItems="center" direction="column" gap={8}>
                {favorites.map((article) => (
                  <Flex h="8em" key={article.id} borderRadius={15} w="100%">
                    <Image
                      h="7em"
                      w="7em"
                      borderLeftRadius={15}
                      src={getImgBase64Src(article.articlePhotos[0].name)}
                    />
                    <Flex
                      w="80%"
                      direction="column"
                      justifyContent="space-between"
                    >
                      <Flex
                        alignItems="center"
                        justifyContent="space-between"
                        w="100%"
                      >
                        <Flex ml={10}>
                          <Text fontSize={19}>{article.name}</Text>
                        </Flex>
                        <Button
                          variant="unstyled"
                          onClick={() => removeArticle(article)}
                        >
                          <CloseIcon color="red.500" />
                        </Button>
                      </Flex>

                      <Flex justifyContent="center" gap={3} alignItems="center">
                        <Button w={5} h={9} colorScheme="green" fontSize={22}>
                          +
                        </Button>
                        <Input
                          w={20}
                          h={10}
                          type="number"
                          fontSize={14}
                          textAlign="center"
                          defaultValue={article.count}
                        />
                        <Button w={5} h={9} colorScheme="red" fontSize={22}>
                          -
                        </Button>
                      </Flex>

                      <Flex justifyContent="flex-end" alignItems="flex-end">
                        <Text fontSize={18}>{article.price} грн</Text>
                      </Flex>
                    </Flex>
                  </Flex>
                ))}
              </Flex>
            ) : (
              <Flex
                direction="column"
                w="100%"
                h="100%"
                alignItems="center"
                justifyContent="center"
              >
                <Flex>
                  <AiOutlineShoppingCart size="5em" />
                </Flex>
                <Text mb={5} fontSize={25} fontWeight="bold">
                  Ваш кошик порожній
                </Text>
                <Text textAlign="center" fontSize={18}>
                  Додавайте в кошик товари, що сподобалися
                </Text>
              </Flex>
            )}
          </DrawerBody>

          <DrawerFooter>
            <Flex alignItems="center" w="100%">
              <Flex w="60%">
                <Text fontWeight="medium" fontSize={18}>{`Сума покупки: ${sumArticles(favorites)}`}</Text>
              </Flex>
              <Flex direction="row" w="40%">
                <Button variant="outline"  mr={3} onClick={onClose}>
                  Вийти
                </Button>
                <Button colorScheme="blue" onClick={() => navigate('order')}>Придбати</Button>
              </Flex>
            </Flex>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
}
