import {
  Button,
  Container,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Radio,
  RadioGroup,
  Select,
} from "@chakra-ui/react";
import { Field, Form, Formik } from "formik";
function PublishDescription(props) {
  const { contract } = props;
  return (
    <Container>
      <Formik
        initialValues={{
          name: "",
          description: "",
          category: "",
          security: "",
          legal: "",
          gas: "",
        }}
        onSubmit={async (values, actions) => {
          const { name, description, category, security, legal, gas } = values;
          const res = await contract.PublishDesc(
            name,
            description,
            category,
            security,
            legal,
            gas
          );
          console.log("PublishDescription", res);
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
              Publishing Smart Contract Description
            </h1>
            <Field name="name">
              {({ field, form }) => (
                <FormControl isRequired>
                  <FormLabel>Name</FormLabel>
                  <Input {...field} placeholder="name" />
                </FormControl>
              )}
            </Field>
            <Field name="description">
              {({ field, form }) => (
                <FormControl isRequired>
                  <FormLabel>Description</FormLabel>
                  <Input {...field} placeholder="description" />
                </FormControl>
              )}
            </Field>
            <Field name="category">
              {({ field, form }) => (
                <FormControl isRequired>
                  <FormLabel>Category</FormLabel>
                  <Select {...field} placeholder="Select category">
                    <option value="Rent">Rent</option>
                    <option value="Bank">Bank</option>
                    <option value="Sale">Sale</option>
                    <option value="Copyright">Copyright</option>
                    <option value="NFT">NFT</option>
                    <option value="Voting system">Voting system</option>
                    <option value="Math application">Math application</option>
                    <option value="Financial operation">
                      Financial operation
                    </option>
                  </Select>
                </FormControl>
              )}
            </Field>
            <Field name="security">
              {({ field, form }) => (
                <FormControl isRequired>
                  <FormLabel>Security</FormLabel>
                  <Input {...field} placeholder="security" />
                </FormControl>
              )}
            </Field>
            <Field name="legal">
              {({ field, form }) => (
                <FormControl isRequired>
                  <FormLabel>Legal</FormLabel>
                  <Input {...field} placeholder="legal" />
                </FormControl>
              )}
            </Field>
            <Field name="gas">
              {({ field, form }) => (
                <FormControl isRequired>
                  <FormLabel>Gas Consumption:</FormLabel>
                  <Select {...field} placeholder="Select Gas Consumption">
                    <option value={1}>less than 1 gwei</option>
                    <option value={2}>between 1.5 and 2 gwei</option>
                    <option value={3}>more than 2 gwei</option>
                  </Select>
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

export default PublishDescription;
