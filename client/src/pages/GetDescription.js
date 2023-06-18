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
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { Field, Form, Formik } from "formik";
import { useState } from "react";
function GetDescription(props) {
  const { contract } = props;

  const [contractsList, setContractsList] = useState([]);

  return (
    <>
      <Container>
        <Formik
          initialValues={{
            category: "",
            security: "",
            legal: "",
            gas: "",
          }}
          onSubmit={async (values, actions) => {
            const { category, security, legal, gas } = values;
            console.log("values", values);
            const res = await contract.SearchForAllDescription(
              category,
              security,
              legal,
              gas
            );
            setContractsList(res);
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
                Discover smart contract
              </h1>

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
      {contractsList.length ? (
        <TableContainer>
          <Table variant="striped">
            <TableCaption placement="top">Smart contracts</TableCaption>
            <Thead>
              <Tr>
                <Th>Provider</Th>
                <Th>Name</Th>
                <Th>Description</Th>
                <Th>Category</Th>
                <Th>legal</Th>
                <Th>Security</Th>
              </Tr>
            </Thead>
            <Tbody>
              {contractsList?.map((item) => (
                <Tr>
                  <Td>{item?.provider}</Td>
                  <Td>{item?.name}</Td>
                  <Td>{item?.description}</Td>
                  <Td>{item?.category}</Td>
                  <Td>{item?.legal}</Td>
                  <Td>{item?.security}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      ) : null}
    </>
  );
}

export default GetDescription;
