import { Flex, AlertDialog, AlertDialogHeader, AlertDialogOverlay, AlertDialogContent, AlertDialogBody, AlertDialogFooter, Button, AlertDialogCloseButton, useToast } from "@chakra-ui/react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteArticle, getAcrticles } from "../../createApi/acrticleApi";
import { getArticle, setProducts } from "../Slice/ProductSlice";

export default function AlertArticle(props) {

  const dispatch = useDispatch()
  const toast = useToast()
  const product = useSelector(getArticle)
  // console.log(product)

  const removeArticle = async (id) => {
    await deleteArticle(id)
    var responce = await getAcrticles();
    dispatch(setProducts(responce))
    props.onClose()
    toast({status : 'success' , title : 'Товар успішно видалено', isClosable : true, position: "bottom-right"})
  }

  return (
    <AlertDialog
      motionPreset="slideInBottom"
      isOpen={props.isOpen} onClose={props.onClose}
      isCentered
    >
      <AlertDialogOverlay />
      <AlertDialogContent>
        <AlertDialogHeader>Ви підтверджуєте видалення {product.name} ?</AlertDialogHeader>
        <AlertDialogCloseButton />
        <AlertDialogFooter>
          <Button onClick={props.onClose}>
            Ні
          </Button>
          <Button colorScheme="red" ml={3} onClick={() => removeArticle(product.id) }>
            Так
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
