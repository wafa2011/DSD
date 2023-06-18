import {
  Button,
  Container,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { Field, Form, Formik } from "formik";
function SignIn(props) {
  const { contract, setUserConnected } = props;
  return (
    <Container>
      <Formik
        initialValues={{
          publicKey: "",
          password: "",
        }}
        onSubmit={async (values, actions) => {
          const { password, publicKey } = values;
          const res = await contract.signIn(password, publicKey);
          if (res?.hash) {
            localStorage.getItem("connected", "true");
            setUserConnected(true);
          }
          console.log("Sign In", res);
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
              Sign In
            </h1>
            <Field name="publicKey">
              {({ field, form }) => (
                <FormControl isRequired>
                  <FormLabel>Public Key</FormLabel>
                  <Input {...field} placeholder="publicKey" />
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

export default SignIn;
