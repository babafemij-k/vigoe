import React from "react";
import { Flex, Heading, Text, SimpleGrid, Image } from "@chakra-ui/react";
import logo1 from "../assets/Ceridian.svg";
import logo2 from "../assets/SAP.svg";
import logo3 from "../assets/ServiceNow.svg";
import logo4 from "../assets/Canadian_National_Railway.svg";
import logo5 from "../assets/Kronos.svg";
import logo6 from "../assets/UKG.svg";
import logo7 from "../assets/Tim_Hortons.svg";
import logo8 from "../assets/Skip.svg";
import logo9 from "../assets/Recipe.svg";
import logo10 from "../assets/Workday.svg";
import logo11 from "../assets/EY.svg";
import logo12 from "../assets/Deloitte.svg";

export default function AboutUs() {
  return (
    <Flex
      minHeight={"80vh"}
      background={"white"}
      py={{ base: "2rem", md: "2rem" }}
      px={{ base: "2rem", md: "10rem" }}
      flexDirection={"column"}
      mt={{ base: "-0.5rem" }}
    >
      <Heading
        as={"h2"}
        size={"xl"}
        mb={"8"}
        fontFamily={"AvenirNextLTPro-Bold"}
      >
        Why choose us?
      </Heading>
      <Text w={{ base: "100%", md: "50%" }} color={"#01070D"}>
        Our team has over 15 combined years of industry experience transforming
        businesses and implementing solutions with some of these companies and
        these enterprise software solutions
      </Text>
      <SimpleGrid columns={[2, 6]} spacing={"3rem"} spacingY="4rem" my={"4rem"}>
        <Flex justifyContent={"center"} alignItems={"center"}>
          <Image src={logo1} alt="logo1" />
        </Flex>
        <Flex justifyContent={"center"} alignItems={"center"}>
          <Image src={logo2} alt="logo2" />
        </Flex>
        <Flex justifyContent={"center"} alignItems={"center"}>
          <Image src={logo3} alt="logo3" />
        </Flex>
        <Flex justifyContent={"center"} alignItems={"center"}>
          <Image src={logo4} alt="logo4" />
        </Flex>
        <Flex justifyContent={"center"} alignItems={"center"}>
          <Image src={logo5} alt="logo5" />
        </Flex>
        <Flex justifyContent={"center"} alignItems={"center"}>
          <Image src={logo6} alt="logo6" />
        </Flex>
        <Flex justifyContent={"center"} alignItems={"center"}>
          <Image src={logo7} alt="logo7" />
        </Flex>
        <Flex justifyContent={"center"} alignItems={"center"}>
          <Image src={logo8} alt="logo8" />
        </Flex>
        <Flex justifyContent={"center"} alignItems={"center"}>
          <Image src={logo9} alt="logo9" />
        </Flex>
        <Flex justifyContent={"center"} alignItems={"center"}>
          <Image src={logo10} alt="logo10" />
        </Flex>
        <Flex justifyContent={"center"} alignItems={"center"}>
          <Image src={logo11} alt="logo11" />
        </Flex>
        <Flex justifyContent={"center"} alignItems={"center"}>
          <Image src={logo12} alt="logo12" />
        </Flex>
      </SimpleGrid>
    </Flex>
  );
}
