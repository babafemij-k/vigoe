import React from "react";

import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  Heading,
  Flex,
  FormControl,
  Input,
  Select,
  Textarea,
  Button,
} from "@chakra-ui/react";
import { useFormik } from "formik";

export default function ContactModal({ showModal, handleCloseModal }) {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      companySize: "",
      companyName: "",
      jobTitle: "",
      messageHeading: "",
      messageBody: "",
    },
    onSubmit: (values) => {
      const firstName = document.getElementById("firstName").value;
      const lastName = document.getElementById("lastName").value;
      const email = document.getElementById("email").value;
      const companySize = document.getElementById("companySize").value;
      const companyName = document.getElementById("companyName").value;
      const jobTitle = document.getElementById("jobTitle").value;
      const messageHeading = document.getElementById("messageHeading").value;
      const messageBody = document.getElementById("messageBody").value;

      const mailtoLink = `mailto:Sam.adeoya@vigoeconsulting.com,cc:${"Ade.onagbola@vigoeconsulting.com"}?subject=${encodeURIComponent(
        messageHeading
      )}&body=${encodeURIComponent(
        `Hello,\n\nMy name is ${firstName} ${lastName} and I'm interested in your company. Here's some information about me:\n\nEmail: ${email}\nCompany Size: ${companySize}\nCompany Name: ${companyName}\nJob Title: ${jobTitle}\n\n${messageBody}\nThank you for your time and consideration. We look forward to hearing back from you soon.\nBest regards,\n${firstName}`
      )}`;
      window.location.href = mailtoLink;
      console.log(values);
    },
  });
  return (
    <Modal
      isOpen={showModal}
      onClose={handleCloseModal}
      scrollBehavior={"outside"}
      size={{ base: "xl", md: "lg" }}
    >
      <ModalOverlay />
      <ModalContent w={{ base: "90%" }} minW={{ md: "40%" }} py={"3rem"}>
        <ModalHeader textAlign={"center"}>
          <Heading
            as={"h2"}
            size={{ base: "lg", md: "xl" }}
            mb={"8"}
            fontFamily={"AvenirNextLTPro-Regular"}
          >
            We're waiting for you!
          </Heading>
          <Text fontSize={"sm"} color={"#525C65"} fontWeight={"normal"}>
            Please fill this form and a member of the team will reach out to
            you.
          </Text>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody
          px={{ md: "2rem" }}

          // overflowY="scroll"
          // style={{ maxHeight: "calc(100vh - 180px)" }}
        >
          <form onSubmit={formik.handleSubmit}>
            <Flex
              justifyContent={{ md: "space-between" }}
              flexDirection={{ base: "column", md: "row" }}
              alignItems={{ base: "flex-start" }}
              px={{ base: "2rem" }}
            >
              <Flex
                mb={3}
                flexDirection={"column"}
                gap={"1rem"}
                w={{ base: "100%", md: "unset" }}
              >
                <FormControl mr={3}>
                  <Input
                    name="firstName"
                    id="firstName"
                    type="text"
                    isRequired
                    placeholder="First Name"
                    fontSize={"0.9rem"}
                    borderColor="#437C90"
                    placeholderTextColor="#437C90"
                    onChange={formik.handleChange}
                    value={formik.values.firstName}
                  />
                </FormControl>
                <FormControl mr={3}>
                  <Input
                    type="text"
                    isRequired
                    id="lastName"
                    name="lastName"
                    placeholder="Last Name"
                    fontSize={"0.9rem"}
                    borderColor="#437C90"
                    placeholderTextColor="#437C90"
                    onChange={formik.handleChange}
                    value={formik.values.lastName}
                  />
                </FormControl>
                <FormControl mr={3}>
                  <Input
                    name="email"
                    id="email"
                    type="email"
                    isRequired
                    placeholder="Work Email"
                    fontSize={"0.9rem"}
                    borderColor="#437C90"
                    placeholderTextColor="#437C90"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                  />
                </FormControl>
              </Flex>

              <Flex
                mb={3}
                flexDirection={"column"}
                gap={"1rem"}
                w={{ base: "100%", md: "unset" }}
              >
                <FormControl mr={3}>
                  <Input
                    name="companyName"
                    id="companyName"
                    type="text"
                    isRequired
                    placeholder="Company Name"
                    fontSize={"0.9rem"}
                    borderColor="#437C90"
                    placeholderTextColor="#437C90"
                    onChange={formik.handleChange}
                    value={formik.values.companyName}
                  />
                </FormControl>
                <FormControl mr={3}>
                  <Select
                    name="companySize"
                    id="companySize"
                    placeholder="Company Size"
                    fontSize={"0.9rem"}
                    isRequired
                    borderColor="#437C90"
                    placeholderTextColor="#437C90"
                    onChange={formik.handleChange}
                    value={formik.values.companySize}
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value=">5">Greater than 5</option>
                  </Select>
                </FormControl>
                <FormControl mr={3}>
                  <Input
                    name="jobTitle"
                    id="jobTitle"
                    type="text"
                    isRequired
                    placeholder="Job title"
                    fontSize={"0.9rem"}
                    borderColor="#437C90"
                    placeholderTextColor="#437C90"
                    onChange={formik.handleChange}
                    value={formik.values.jobTitle}
                  />
                </FormControl>
              </Flex>
            </Flex>
            <Flex flexDirection={{ base: "column" }} px={{ base: "2rem" }}>
              <FormControl mb={3}>
                <Textarea
                  name="messageHeading"
                  id="messageHeading"
                  placeholder="Message Heading"
                  fontSize={"0.9rem"}
                  borderColor="#437C90"
                  placeholderTextColor="#437C90"
                  onChange={formik.handleChange}
                  value={formik.values.messageHeading}
                />
              </FormControl>
              <FormControl mb={3}>
                <Textarea
                  name="messageBody"
                  id="messageBody"
                  placeholder="Message Body"
                  fontSize={"0.9rem"}
                  borderColor="#437C90"
                  placeholderTextColor="#437C90"
                  onChange={formik.handleChange}
                  value={formik.values.messageBody}
                />
              </FormControl>
              <Button colorScheme="blue" type="submit">
                Submit
              </Button>
            </Flex>
          </form>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
