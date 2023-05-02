import React from "react";
import { Box, Text, Image } from "@chakra-ui/react";
import heroImage from "../assets/heroImage.png";

export default function Hero() {
  return (
    <Box
      height="80vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection={"column"}
      my={"2.5"}
    >
      <Text
        fontSize={{ base: "3xl", md: "5xl" }}
        fontWeight="bold"
        color="white"
        textAlign="center"
        mb={{ base: 4, md: 8 }}
        mx={{ base: 4, md: 0 }}
        w={{ base: "unset", md: "30%" }}
        fontFamily={"AvenirNextLTPro-Bold"}
      >
        Let's turn your vision into profit
      </Text>
      <Box
        position="relative"
        w={{ base: "50%", md: "20%" }}
        mt={"-1rem"}
        _before={{
          content: "''",
          position: "absolute",
          top: "0",
          left: "0",
          w: "100%",
          h: "100%",
          zIndex: "1",
          background:
            "radial-gradient(50% 50% at 50% 50%, rgba(0, 0, 0, 0) 0%, #01070D 100%);",
        }}
      >
        <Image
          background={
            "radial-gradient(50% 50% at 50% 50%, rgba(0, 0, 0, 0) 0%, #152330 100%);"
          }
          borderRadius="20px"
          src={heroImage}
          alt="Hero"
        />
      </Box>
    </Box>
  );
}
