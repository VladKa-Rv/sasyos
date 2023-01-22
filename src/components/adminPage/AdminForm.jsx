import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
} from "@chakra-ui/react";
import MainLogo from "../../logo/MainLogo";
import { Field, Form, Formik } from "formik";
import { adminFormSchema } from "./ValidationAdminForms";

export default function AdminForm() {
  const onSumbitForm = (values) => {
    console.log(values);
  };

  return (
    <Flex w="100%" height="600px" justifyContent="center" alignItems="center">
      <Flex direction="column" w={350}>
        <Formik
          initialValues={{ login: "", password: "" }}
          onSubmit={(values) => onSumbitForm(values)}
          validationSchema={adminFormSchema}
        >
          {({ errors, touched }) => (
            <Form>
              <FormControl isInvalid={errors.login && touched.login}>
                <MainLogo />
                <FormLabel>Login</FormLabel>
                <Field as={Input} id="login" name="login" />
               <FormErrorMessage>{errors.login}</FormErrorMessage>
              </FormControl>

              <FormControl isInvalid={errors.password && touched.password}>
                <FormLabel>Password</FormLabel>
                <Field as={Input} id="password" name="password" />
                <FormErrorMessage>{errors.password}</FormErrorMessage>
                <Button type="submit" mt={5} w={350}>
                  Submit
                </Button>
              </FormControl>
            </Form>
          )}
        </Formik>
      </Flex>
    </Flex>
  );
}
