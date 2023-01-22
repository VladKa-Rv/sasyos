import { Flex, Text, Image, Icon, Button } from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";
import { BsStar } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import React from "react";
import { useSelector } from "react-redux";
import { getArticle } from "./Slice/ProductSlice";
import { getImgBase64Src } from "../helper/base64/base64";
import Header from "./Header";
import SubHeader from "./SubHeader";

function ProductPage() {
  const gradient =
    "linear-gradient(109.6deg, rgb(36, 45, 57) 11.2%, rgb(16, 37, 60) 51.2%, rgb(0, 0, 0) 98.6%)";
  const navigate = useNavigate();
  const article = useSelector(getArticle);

  return (
    <>
    <Header/>
    <SubHeader/>
      <Flex
        marginTop="8em"
        justifyContent="center"
        w="100%"
        direction="column"
        alignItems="center"
      >
        <Flex h="34em" w="90%" bgGradient={gradient} m={5} borderRadius={10}>
          <Flex p={5} w="30em" justifyContent="flex-start" alignItems="center">
            <Image
              w="25em"
              h="28em"
              opacity="80%"
              borderRadius={10}
              src={getImgBase64Src(article.articlePhotos[0].name)}
            />
          </Flex>
          <Flex flexDirection="column" h="100%" justifyContent="center">
            <Flex
              color="whiteAlpha.600"
              fontSize="16px"
              gap={8}
              alignItems="center"
              justifyContent="start"
              mb={10}
            >
              <Text>Опис</Text>
              <Text>Характеристики</Text>
              <Flex color="white" justifyContent="end" ml={40} w={300}>
                <Button variant="ghost" onClick={() => navigate(-1)}>
                  Список товарів
                </Button>
              </Flex>
            </Flex>

            <Flex mt={10} direction="column">
              <Text fontSize={26}>{article.name}</Text>
              <Flex
                justifyContent="flex-end"
                gap={5}
                alignItems="center"
                h={20}
              >
                <Flex
                  gap={1}
                  mr={20}
                  w={270}
                  justifyContent="flex-start"
                  alignItems="center"
                >
                  <BsStar color="yellow" />
                  <BsStar color="yellow" />
                  <BsStar color="yellow" />
                  <BsStar color="yellow" />
                  <BsStar color="yellow" />
                </Flex>
                <Text fontSize={14}>Артикул товару : {article.id} </Text>
                <Text fontSize={14}>
                  Є в наявності <CheckIcon color="green.500" h={5} w={8} />
                </Text>
              </Flex>
              <Flex justifyContent="space-between" alignItems="center" h={150}>
                <Text letterSpacing={1} fontSize={25}>
                  {article.price} грн
                </Text>
                <Flex>
                  <Button fontSize={18} letterSpacing={1.2} variant="solid">
                    Придбати
                  </Button>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
        <Flex
          w="90%"
          bgGradient={gradient}
          mt={5}
          borderRadius={10}
          direction="column"
          alignItems="center"
          justifyContent="center"
        >
          <Flex justifyContent="center" mt={10} alignItems="center">
            <Text fontSize="2xl">{article.name}</Text>
          </Flex>
          <Flex m={3}>
            <Text fontSize={16} fontFamily="sans-serif" lineHeight={1.7}>
              {article.description}
            </Text>
          </Flex>
        </Flex>
        <Flex
          w="90%"
          bgGradient={gradient}
          mt={5}
          borderRadius={10}
          direction="column"
          alignItems="center"
          justifyContent="center"
          mb={20}
        >
          <Flex justifyContent="center" mt={10} alignItems="center">
            <Text fontSize="2xl">Основні характеристики</Text>
          </Flex>
          <Flex m={3}>
            <Text fontSize={16} fontFamily="sans-serif" lineHeight={1.7}>
              {article.shortDescription}
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}

export default ProductPage;
