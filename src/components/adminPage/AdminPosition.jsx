import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  Button,
  Image,
  ModalFooter,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Select,
  InputGroup,
  Tabs,
  TabList,
  Tab,
  TabPanel,
  TabPanels,
  useToast,
} from "@chakra-ui/react";
import { Field, Form, Formik } from "formik";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { createArticle, getAcrticles } from "../../createApi/acrticleApi";
import { setProducts } from "../Slice/ProductSlice";

export default function AdminPostion(props) {
  const [avatar, setAvatar] = useState();
  const dispatch = useDispatch()
  const toast = useToast()

  const onSumbitForm = async (values) => {
    console.log(values);
    const formData = new FormData();
    formData.append("avatar", values.avatar);

    const sendingdata = {
      category: values.category,
      name: values.name,
      price: values.price,
      description: values.description,
      shortDescription: values.shortDescription,
      ProductCountry: values.ProductCountry,
      avatar: formData,
    }
    const responce = await createArticle(sendingdata);
    var products = await getAcrticles();
    dispatch(setProducts(products))
    props.onClose()
    toast({title : "Товар успішно додано", status : 'success', isClosable : true, position: "bottom-right"})
  }

  return (
    <Modal size="3xl" isCentered isOpen={props.isOpen} onClose={props.onClose}>
      <Tabs size="md" variant="enclosed">
        <Formik
          initialValues={{
            category: "Телефони",
            name: "",
            price: "",
            description: "",
            ProductCountry: "",
            shortDescription: "",
            avatar: null,
          }}
          onSubmit={(values) => onSumbitForm(values)}
        >
          {({ errors, touched, setFieldValue }) => (
            <Form>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>
                  <TabList>
                    <Tab>Оберіть товар</Tab>
                    <Tab>Опис товару</Tab>
                  </TabList>
                </ModalHeader>
                <ModalBody>
                  <Flex justifyContent="space-between">
                    <TabPanels>
                      <TabPanel>
                        <Flex>
                          <Flex direction="column" w="50%">
                            <FormControl m={3} w="90%">
                              <FormLabel>Оберіть категорію</FormLabel>
                              <Field as={Select} id="category" name="category">
                                <option value={"Телефони"}>Телефони</option>
                                <option value={"Навушники"}>Навушники</option>
                                <option value={"Акумулятори"}>
                                  Акумулятори
                                </option>
                                <option value={"Чохли та аксесуари"}>
                                  Чохли та аксесуари
                                </option>
                                <option value={"Зарядні пристрої"}>
                                  Зарядні пристрої
                                </option>
                                <option value={"Display"}>
                                  Дисплеї iPhone
                                </option>
                                <option value={"Захисне скло iPhone"}>
                                  Захисне скло iPhone
                                </option>
                                <option value={"Шлейфи та кнопки iPhone"}>
                                  Шлейфи та кнопки iPhone
                                </option>
                              </Field>
                            </FormControl>
                            <FormControl m={3} w="90%">
                              <FormLabel>Назва</FormLabel>
                              <Field
                                as={Input}
                                id="name"
                                name="name"
                                type="text"
                              />
                            </FormControl>
                            <Flex direction="column" w="90%">
                              <FormControl m={3}>
                                <FormLabel>Ціна</FormLabel>
                                <Field
                                  as={Input}
                                  id="price"
                                  name="price"
                                  type="number"
                                />
                              </FormControl>
                              <FormControl m={3}>
                                <FormLabel>Виробник</FormLabel>
                                <Field
                                  as={Input}
                                  id="ProductCountry"
                                  name="ProductCountry"
                                />
                              </FormControl>
                              <FormControl m={3}>
                                <FormLabel>Світлина</FormLabel>
                                <Input
                                  id="avatar"
                                  name="avatar"
                                  type="file"
                                  variant="flushed"
                                  onChange={(e) => {
                                    console.log(e.target.files[0]);
                                    setFieldValue("avatar", e.target.files[0]);
                                    setAvatar(
                                      URL.createObjectURL(e.target.files[0])
                                    );
                                  }}
                                />
                              </FormControl>
                            </Flex>
                          </Flex>
                          <Flex w="50%" m={5}>
                            <Image src={avatar} />
                          </Flex>
                        </Flex>
                      </TabPanel>
                      <TabPanel>
                        <Flex>
                          <FormControl m={3}>
                            <FormLabel>Опис</FormLabel>
                            <Field
                              as={Textarea}
                              id="description"
                              name="description"
                            />
                          </FormControl>
                          <FormControl
                            m={3}
                            id="shortDescription"
                            name="shortDescription"
                          >
                            <FormLabel>Характеристики</FormLabel>
                            <InputGroup>
                              <Field
                                as={Textarea}
                                id="shortDescription"
                                name="shortDescription"
                              />
                            </InputGroup>
                          </FormControl>
                        </Flex>
                        <ModalFooter>
                          <Button colorScheme="facebook" type="submit" mr={3}>
                            Додати
                          </Button>
                          <Button
                            mr={3}
                            colorScheme="red"
                            onClick={props.onClose}
                          >
                            Вийти
                          </Button>
                        </ModalFooter>
                      </TabPanel>
                    </TabPanels>
                  </Flex>
                </ModalBody>
              </ModalContent>
            </Form>
          )}
        </Formik>
      </Tabs>
    </Modal>
  );
}
