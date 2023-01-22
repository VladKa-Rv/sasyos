import {
  Flex,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  useDisclosure,
} from "@chakra-ui/react";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAcrticles } from "../../createApi/acrticleApi";
import { setArticle, setProducts } from "../Slice/ProductSlice";
import AlertArticle from "../Alerts/AlertArticle";

export default function ProductTable(props) {
  const products = useSelector((state) => state.product.products);
  const dispatch = useDispatch();
  const alertDialog = useDisclosure();

  useEffect(() => {
    const getProducts = async () => {
      var responce = await getAcrticles();
      dispatch(setProducts(responce));
    };
    getProducts();
  }, [dispatch]);

  const removeProduct = (product) => {
    console.log(product);
    dispatch(setArticle(product))
    alertDialog.onOpen();
  };

  return (
    <Flex w="100em" justifyContent="flex-start" marginTop="7em">
      <Table variant="simple" h="70vh">
        <Thead>
          <Tr>
            <Th fontSize={15} textAlign="center">
              Код
            </Th>
            <Th fontSize={15} textAlign="center">
              Назва
            </Th>
            <Th fontSize={15} textAlign="center">
              Ціна
            </Th>
            <Th fontSize={15} textAlign="center">
              Опис
            </Th>
            <Th fontSize={15} textAlign="center">
              Характеристики
            </Th>
            <Th fontSize={15} textAlign="center">
              Кількість
            </Th>
            <Th fontSize={15} textAlign="center">
              Виробник
            </Th>
            <Th fontSize={15} textAlign="center">
              Опції
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          {products.map((product) => (
            <Tr product={product} h={10} key={product.id}>
              <Td textAlign="center" w={30}>
                {product.id}
              </Td>
              <Td textAlign="center">{product.name}</Td>
              <Td textAlign="center" w={30}>
                {product.price}
              </Td>
              <Td textAlign="center">{product.description}</Td>
              <Td textAlign="center">{product.shortDescription}</Td>
              <Td textAlign="center">{product.count}</Td>
              <Td textAlign="center">{product.productCountry}</Td>
              <Td textAlign="center">
                <DeleteIcon
                  w="1.5em"
                  h="1.5em"
                  m={1}
                  onClick={() => removeProduct(product)}
                />
                <EditIcon w="1.5em" m={1} h="1.5em" />
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
      <AlertArticle
        isOpen={alertDialog.isOpen}
        onClose={alertDialog.onClose}
        product={alertDialog.product}
      />
    </Flex>
  );
}
