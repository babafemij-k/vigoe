import React from "react";
import { Box, Flex, Heading, Text, Image } from "@chakra-ui/react";
import icon from "../assets/slice.svg";
import serviceOne from "../assets/service-one.svg";
import serviceTwo from "../assets/service-two.svg";
import serviceThree from "../assets/service-three.svg";
import serviceFour from "../assets/service-four.svg";
import serviceFive from "../assets/service-five.svg";

import { motion } from "framer-motion";

export default function Services() {
  return (
    <Flex
      //   flexDirection={{ base: "column", md: "row" }}
      //   color={"white"}
      //   minHeight={"80vh"}
      //   position={"relative"}
      //   ml={{ base: "", md: "6rem" }}
      flexDirection={{ base: "column", md: "row" }}
      color={"white"}
      minHeight={"100vh"}
      position={"relative"}
      ml={{ base: "", md: "6rem" }}
      bg={`url(${icon}) no-repeat bottom right`}
      bgSize={{ base: "0", md: "30%" }}
    >
      <Box flex={{ base: "0", md: "1" }} p={{ base: "6", md: "12" }}>
        <Heading
          // as={"h2"}
          size={"xl"}
          mb={"8"}
          fontFamily={"AvenirNextLTPro-Bold"}
          as={motion.p}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition="0.5s ease"
        >
          Our Services
        </Heading>
        <Text mb={8} w={{ base: "100%", md: "60%" }}>
          We are a team of dedicated and well experienced consultants focused on
          providing world class technology implementation solutions. Our
          offerings include:
        </Text>
        <Box listStyleType={"none"} ml={{ base: "0.5rem", md: "unset" }}>
          <li>
            <Box as="span" display={"flex"} alignItems={"center"} mb={"1.5rem"}>
              <Image w={"1.5rem"} src={serviceOne} mr={"1rem"} />
              <Text>Service Selection and Implemetation</Text>
            </Box>
          </li>
          <li>
            <Box as="span" display={"flex"} alignItems={"center"} mb={"1.5rem"}>
              <Image w={"1.5rem"} src={serviceTwo} mr={"1rem"} />
              <Text>Business process automation and change management</Text>
            </Box>
          </li>
          <li>
            <Box as="span" display={"flex"} alignItems={"center"} mb={"1.5rem"}>
              <Image w={"2rem"} src={serviceThree} mr={"1rem"} />
              <Text>Business Intelligence and Dashboard management</Text>
            </Box>
          </li>
          <li>
            <Box as="span" display={"flex"} alignItems={"center"} mb={"1.5rem"}>
              <Image w={"2rem"} src={serviceFour} mr={"1rem"} />
              <Text>Training and Documentation</Text>
            </Box>
          </li>
          <li>
            <Box as="span" display={"flex"} alignItems={"center"} mb={"1.5rem"}>
              <Image w={"2rem"} src={serviceFive} mr={"1rem"} />
              <Text>Managed Services</Text>
            </Box>
          </li>
        </Box>
      </Box>
      {/* <Box
        alignSelf={{ base: "flex-end", md: "flex-end" }}
        ml={{ base: "0", md: "auto" }}
        position="relative"
        h={{ base: "50%", md: "100%" }}
      >
        <Image
          src={icon}
          color={"blue"}
          alt="Icon"
          w={{ base: "50%", md: "auto" }}
          h={{ base: "50%", md: "auto" }}
          position={{ base: "", md: "" }}
        />
      </Box> */}
    </Flex>
  );
}
