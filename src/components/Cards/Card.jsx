import {
  Flex,
  Text,
  Image,
  Button,
  useDisclosure,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getImgBase64Src } from "../../helper/base64/base64";
import AlertArticle from "../Alerts/AlertArticle";
import {
  getFavoriteArticles,
  setArticle,
  setFavoriteArticles,
} from "../Slice/ProductSlice";

export default function Card(props) {
  const bg = useColorModeValue("#edf6f9", "#black");
  const color = useColorModeValue("black", "edf6f9");
  const alertDialog = useDisclosure();
  const favoritesArticles = useSelector(getFavoriteArticles);
  const toast = useToast();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const addFavoriteProduct = (article) => {
    var ifExist = favoritesArticles.find((x) => x.id === article.id);
    if (ifExist !== undefined) {
      return toast({
        title: "Товар вже наявний в вибраному!",
        status: "warning",
        isClosable: true,
        position: "bottom-right",
      });
    }

    dispatch(setFavoriteArticles(article));
    return toast({
      title: "Товар дадано в вибране",
      status: "success",
      isClosable: true,
      position: "bottom-right",
    });
  };

  const selectProduct = () => {
    dispatch(setArticle(props.data));
    navigate(`/productId:${props.data.id}`);
  };

  return (
    <Flex
      borderRadius={15}
      alignItems="center"
      direction="column"
      justifyContent="center"
      bg={bg}
      color={color}
      cursor="pointer"
    >
      <Image
        w={220}
        h={250}
        p={1}
        borderRadius={25}
        src={getImgBase64Src(props.data.articlePhotos[0].name)}
        onClick={() => selectProduct()}
      />
      <Text align="center" fontWeight="bold" fontSize={17}>
        {props.data.name}
      </Text>
      <Flex alignItems="center" justifyContent="space-between" direction="row">
        <Text align="center" fontWeight="bold">
          {props.data.price} грн
        </Text>
        {props.admin ? (
          <Button m={3} onClick={() => alertDialog.onOpen()}>
            Видалити товар
          </Button>
        ) : (
          <Button m={3} onClick={() => addFavoriteProduct(props.data)}>
            В корзину
          </Button>
        )}
      </Flex>
      <AlertArticle
        isOpen={alertDialog.isOpen}
        onClose={alertDialog.onClose}
        article={props.data}
      ></AlertArticle>
    </Flex>
  );
}
