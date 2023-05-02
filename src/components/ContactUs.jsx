import React from "react";
import {
  Box,
  Heading,
  Text,
  Button,
  Flex,
  Spacer,
  Link,
  Icon,
} from "@chakra-ui/react";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { GrMail } from "react-icons/gr";

export default function AboutUs({ onContactClick }) {
  return (
    <Flex
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      minHeight={"80vh"}
      background={"white"}
      mt={{ base: "-0.5rem" }}
      py={{ base: "3rem", md: "1rem" }}
      px={{ base: "unset", md: "5rem" }}
    >
      <Flex width={"80%"} flexDirection={"column"}>
        <Box
          display={"flex"}
          flexDirection={"column"}
          background={"#0141FF"}
          justifyContent={"center"}
          alignItems={"center"}
          color={"white"}
          textAlign={"center"}
          py={"4rem"}
          borderRadius={"10px"}
        >
          <Heading
            as={"h2"}
            size={{ base: "lg", md: "xl" }}
            mb={"8"}
            fontFamily={"AvenirNextLTPro-Regular"}
          >
            We're waiting for you!
          </Heading>
          <Text width={{ base: "90%", md: "50%" }} mb={"2rem"}>
            We are always excited to meet new clients. Please reach out and a
            team member will be available to answer all your questions
          </Text>
          <Button
            bg={"white"}
            color={"#0141FF"}
            variant="outline"
            onClick={onContactClick}
          >
            Contact Us
          </Button>
        </Box>
        <Flex
          color={"#01070D"}
          flexDirection={{ base: "column", md: "row" }}
          gap={{ base: "1rem" }}
          justifyContent={"space-between"}
          alignItems={{ base: "center" }}
          my={{ base: "2rem", md: "4rem" }}
        >
          <Flex alignItems={"flex-end"} gap={"0.8rem"} fontWeight={"semibold"}>
            <Link>
              <Icon as={GrMail} />
            </Link>
            <Text>647-232-5136</Text>
            <Text>613-263-1891</Text>
          </Flex>

          <Text ml={{ base: "unset", md: "-10.5rem" }} fontWeight={"semibold"}>
            Ontario, Canada
          </Text>

          <Flex alignItems={"center"} gap={"1rem"}>
            <Link>
              <Icon as={GrMail} />
            </Link>
            <Link>
              <Icon as={FaLinkedinIn} />
            </Link>
            <Link href="https://instagram.com/vigoeconsulting?igshid=MTIyMzRjYmRlZg==">
              <Icon as={FaInstagram} />
            </Link>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
