import React from "react";
import { Flex, Box, Image, Heading, Text, Spacer } from "@chakra-ui/react";
import processIcon from "../assets/our-process.svg";

export default function Process() {
  return (
    <Flex
      flexDirection={{ base: "column-reverse", md: "row" }}
      justifyContent={{ base: "", md: "space-between" }}
      minHeight={"80vh"}
      background={"white"}
      py={{ base: "3rem", md: "5rem" }}
      px={{ base: "2rem", md: "5rem" }}
    >
      <Box display={"flex"} justifyContent={"center"}>
        <Image w={"80%"} src={processIcon} alt="process-icon" />
      </Box>

      <Box
        flex={"1"}
        ml={{ base: "", md: "7rem" }}
        mr={{ base: "", md: "3rem" }}
      >
        <Heading
          as={"h2"}
          size={"xl"}
          mb={"8"}
          fontFamily={"AvenirNextLTPro-Bold"}
        >
          Our Process
        </Heading>
        <Box my={"2rem"}>
          <Heading
            as="h4"
            size="md"
            mb={"1rem"}
            fontFamily={"AvenirNextLTPro-Regular"}
            fontWeight={"semibold"}
          >
            Case Analysis
          </Heading>
          <Text color={" #525C65"} fontSize={"1rem"} fontWeight={"semibold"}>
            Our team starts off with a current state assessment of your business
            after gathering information on the business from key stakeholders.
            We then provide a detailed analysis of how our services can help you
            reach your intended goals.
          </Text>
        </Box>
        <Box my={"2rem"}>
          <Heading
            as="h4"
            size="md"
            mb={"1rem"}
            fontFamily={"AvenirNextLTPro-Regular"}
            fontWeight={"semibold"}
          >
            System Implementation
          </Heading>
          <Text color={" #525C65"} fontSize={"1rem"} fontWeight={"semibold"}>
            Our team has the experience and expertise required to guide you
            through the journey of your system implementation and change
            management. We will work with you every step of the way, from
            discovery to Go-Live to ensure your selected system meets your
            business' needs.
          </Text>
        </Box>
        <Box my={"2rem"}>
          <Heading
            as="h4"
            size="md"
            mb={"1rem"}
            fontFamily={"AvenirNextLTPro-Regular"}
            fontWeight={"semibold"}
          >
            Business Readiness
          </Heading>
          <Text
            fontFamily={"AvenirNextLTPro-Regular"}
            color={" #525C65"}
            fontSize={"1rem"}
            fontWeight={"semibold"}
          >
            Our team will make sure your business has all the necessary
            documentation and data needed to implement the project smoothly. We
            will assist with the preparation of files ranging from RFPs,
            Requirement Documentation, Workflows and more. You will not have to
            go through it alone
          </Text>
        </Box>
      </Box>
    </Flex>
  );
}
