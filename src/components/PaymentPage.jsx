import { Flex, Text, Image, Button, Input } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getImgBase64Src } from "../helper/base64/base64";
import { sumArticles } from "../helper/sum/Sub";
import Header from "./Header";
import { getFavoriteArticles } from "./Slice/ProductSlice";
import SubHeader from "./SubHeader";

function PaymentPage() {
  const favorite = useSelector(getFavoriteArticles);
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <SubHeader />
      <Flex
        marginTop="7em"
        justifyContent="center"
        alignItems="center"
        direction="column"
      >
        <Flex
          direction="column"
          alignItems="center"
          mt={5}
          background="blackAlpha.500"
          w="80%"
          borderRadius={30}
          minHeight="30em"
        >
          <Flex letterSpacing={1.5} fontWeight="bold" fontSize={22} mt={3}>
            Оформити замовлення
          </Flex>

          <Flex w="90%" mt={10} gap={10} justifyContent="center">
            <Flex w="30%" gap={5} direction="column" alignItems="center">
              <Text alignItems="flex-start" textAlign="start" fontSize={20}>
                Контактна інформація
              </Text>
              <Input placeholder="Ім'я та прізвище" />
              <Input placeholder="Номер телефону" />
              <Input placeholder="Email" />
              <Text alignItems="flex-start" textAlign="start" fontSize={20}>
                Доставка та оплата
              </Text>
              <Input placeholder="Виберіть метод доставки" />
            </Flex>

            <Flex w="70%" gap={5} direction="column">
              {favorite.map((product) => (
                <Flex
                  gap={10}
                  fontSize={18}
                  justifyContent="space-around"
                  borderRight="1px solid white"
                >
                  <Image
                    w="6em"
                    src={getImgBase64Src(product.articlePhotos[0].name)}
                  ></Image>
                  <Text w="30%">{product.name} </Text>
                  <Text w="20%"> Ціна: {product.price} грн</Text>
                  <Text w="20%">Кількість: {product.count}</Text>
                </Flex>
              ))}
            </Flex>
          </Flex>

          <Flex
            gap={5}
            p={5}
            justifyContent="flex-end"
            alignItems="center"
            w="95%"
          >
            <Text fontSize={18}>До сплати : {sumArticles(favorite)}</Text>
            <Button>Повернутись до покупок</Button>
            <Button colorScheme="teal" onClick={() => navigate("/payment")}> Придбати</Button>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}

export default PaymentPage;
