import {
  Modal,
  ModalBody,
  ModalHeader,
  ModalFooter,
  ModalOverlay,
  Image,
  Text,
  Button,
  ModalContent,
  Flex,
  Tabs,
  TabList,
  Tab,
  TabPanel,
  TabPanels,
} from "@chakra-ui/react";
import { getImgBase64Src } from "../../helper/base64/base64";

export default function CardModal(props) {
  console.log(props);
  return (
    <Modal size="4xl" isCentered isOpen={props.isOpen} onClose={props.onClose}>
      <Tabs isFitted variant="enclosed">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader textAlign="center">
            <Text mb={5} letterSpacing={2}>{props.article.data.name}</Text>
            <TabList>
              <Tab>Характеристики</Tab>
              <Tab>Опис</Tab>
            </TabList>
          </ModalHeader>
          <ModalBody>
            <TabPanels>
              <TabPanel>
                <Flex>
                  <Image
                    w="30em"
                    h="30em"
                    src={getImgBase64Src(
                      props.article.data.articlePhotos[0].name
                    )}
                  />
                  <Flex
                    ml={5}
                    fontSize={17}
                    w={500}
                    justifyContent="space-evenly"
                    direction="column"
                  ></Flex>
                  <Flex
                    w="200"
                    direction="column"
                    alignItems="flex-end"
                    justifyContent="space-evenly"
                  >
                    <Text fontSize={17}>
                      Виробник: {props.article.data.ProductCountry}
                    </Text>
                    <Text fontSize={17}>
                      Ціна: {props.article.data.price}грн
                    </Text>
                    <Text fontSize={17}>Код: {props.article.data.id}</Text>
                  </Flex>
                </Flex>
              </TabPanel>
              <TabPanel>
                <Flex w="100%">
                  <Text>Опис: {props.article.data.description}</Text>
                </Flex>
                <ModalFooter>
                  <Button mr={3}>Придбати</Button>
                  <Button
                    colorScheme="blue"
                    mr={3}
                    onClick={() => props.onClose()}
                  >
                    Close
                  </Button>
                </ModalFooter>
              </TabPanel>
            </TabPanels>
          </ModalBody>
        </ModalContent>
      </Tabs>
    </Modal>
  );
}
