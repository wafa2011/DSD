import {
  Button,
  Container,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { Field, Form, Formik } from "formik";
function SignUp(props) {
  const { contract } = props;

  return (
    <Container>
      <Formik
        initialValues={{
          username: "",
          password: "",
        }}
        onSubmit={async (values, actions) => {
          const { username, password } = values;
          const res = await contract.registerProvider(username, password);
          console.log("SignUP", res);
        }}
      >
        {(props) => (
          <Form>
            <h1
              style={{
                display: "flex",
                justifyContent: "center",
                fontWeight: 600,
                fontSize: 25,
              }}
            >
              Sign up
            </h1>
            <Field name="username">
              {({ field, form }) => (
                <FormControl isRequired>
                  <FormLabel>Username</FormLabel>
                  <Input {...field} placeholder="username" />
                </FormControl>
              )}
            </Field>
            <Field name="password">
              {({ field, form }) => (
                <FormControl isRequired>
                  <FormLabel>Password</FormLabel>
                  <Input {...field} placeholder="password" />
                </FormControl>
              )}
            </Field>
            <Button
              mt={4}
              colorScheme="teal"
              isLoading={props.isSubmitting}
              type="submit"
            >
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </Container>
  );
}

export default SignUp;
