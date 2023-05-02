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

export default function RequestContractorModal({
  showContractorModal,
  handleCloseContractorModal,
}) {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      companyName: "",
      industry: "",
      projectType: "",
      workScheduleType: "",
      contractLength: "",
      additionalInformation: "",
    },
    onSubmit: (values) => {
      const firstName = document.getElementById("firstName").value;
      const lastName = document.getElementById("lastName").value;
      const companyName = document.getElementById("companyName").value;
      const industry = document.getElementById("industry").value;
      const projectType = document.getElementById("projectType").value;
      const workScheduleType =
        document.getElementById("workScheduleType").value;
      const contractLength = document.getElementById("contractLength").value;
      const additionalInformation = document.getElementById(
        "additionalInformation"
      ).value;

      const messageHeading = `Request for Contractor - ${projectType}`;
      const messageBody = `I am interested in hiring a contractor for ${projectType} work for my company, ${companyName}. The work schedule type is ${workScheduleType}, and I am looking for a contractor with expertise in ${industry}. I need the contract to last for ${contractLength}. Please let me know if you have any contractors available and their rates. Thank you.\n${additionalInformation}\nBest regards,\n${firstName} ${lastName}`;

      const mailtoLink = `mailto:babafemijk@gmail.com,cc:olaolujkb21@gmail.com?subject=${encodeURIComponent(
        messageHeading
      )}&body=${encodeURIComponent(messageBody)}`;
      window.location.href = mailtoLink;
      console.log(values);
    },
  });
  return (
    <Modal
      isOpen={showContractorModal}
      onClose={handleCloseContractorModal}
      scrollBehavior={"outside"}
      size={{ base: "full", md: "lg" }}
    >
      <ModalOverlay />
      <ModalContent w={{ base: "90%" }} minW={{ md: "40%" }} py={"3rem"}>
        <ModalHeader textAlign={"left"}>
          <Heading
            as={"h2"}
            pl={"2rem"}
            size={"lg"}
            mb={"8"}
            fontFamily={"AvenirNextLTPro-Regular"}
          >
            Request a Contractor
          </Heading>
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
                    type="text"
                    isRequired
                    id="firstName"
                    name="firstName"
                    placeholder="First Name"
                    fontSize={"0.9rem"}
                    borderColor="#437C90"
                    placeholderTextColor="#437C90"
                  />
                </FormControl>
                <FormControl mr={3}>
                  <Input
                    type="text"
                    isRequired
                    id="companyName"
                    name="companyName"
                    placeholder="Company Name"
                    fontSize={"0.9rem"}
                    borderColor="#437C90"
                    placeholderTextColor="#437C90"
                  />
                </FormControl>
                <FormControl mr={3}>
                  <Select
                    placeholder="Project Type"
                    id="projectType"
                    isRequired
                    name="projectType"
                    fontSize={"0.9rem"}
                    borderColor="#437C90"
                    placeholderTextColor="#437C90"
                  >
                    <option value="System Implementation">
                      System Implementation
                    </option>
                    <option value="Process Automation">
                      Process Automation
                    </option>
                    <option value="Business Intelligence & Dashboards">
                      Business Intelligence & Dashboards
                    </option>
                    <option value="Business Process Change">
                      Business Process Change
                    </option>
                    <option value="Other">Other</option>
                  </Select>
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
                    type="text"
                    placeholder="Last Name"
                    id="lastName"
                    isRequired
                    name="lastName"
                    fontSize={"0.9rem"}
                    borderColor="#437C90"
                    placeholderTextColor="#437C90"
                  />
                </FormControl>
                <FormControl mr={3}>
                  <Input
                    type="text"
                    placeholder="Industry"
                    isRequired
                    id="industry"
                    name="industry"
                    fontSize={"0.9rem"}
                    borderColor="#437C90"
                    placeholderTextColor="#437C90"
                  />
                </FormControl>
                <FormControl mr={3}>
                  <Select
                    type="text"
                    isRequired
                    placeholder="Work Schedule Type"
                    id="workScheduleType"
                    name="workScheduleType"
                    fontSize={"0.9rem"}
                    borderColor="#437C90"
                    placeholderTextColor="#437C90"
                  >
                    <option value="Remote">Remote</option>
                    <option value="Hybrid">Hybrid</option>
                    <option value="On-site">On Site</option>
                  </Select>
                </FormControl>
              </Flex>
            </Flex>
            <Flex flexDirection={{ base: "column" }} px={{ base: "2rem" }}>
              <FormControl mb={3}>
                <Textarea
                  placeholder="Contract Length (days/weeks/months)"
                  id="contractLength"
                  isRequired
                  name="contractLength"
                  fontSize={"0.9rem"}
                  borderColor="#437C90"
                  placeholderTextColor="#437C90"
                />
              </FormControl>
              <FormControl mb={3}>
                <Textarea
                  placeholder="Any additional information?"
                  id="additionalInformation"
                  name="additionalInformation"
                  fontSize={"0.9rem"}
                  borderColor="#437C90"
                  placeholderTextColor="#437C90"
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
