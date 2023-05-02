import React from "react";
import {
  Flex,
  Spacer,
  Button,
  Link,
  useMediaQuery,
  IconButton,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  VStack,
  Heading,
  Box,
  Image,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import logo from "../assets/logo.png";

function Navigation({
  onContactClick,
  showModal,
  showContractorModal,
  onRequestContractor,
}) {
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex
      // bg="black"
      px={"10"}
      py={"10"}
      alignItems="center"
      width={"100vw"}
      color={"white"}
    >
      <Image src={logo} alt="Logo" w={{ base: "60%", md: "unset" }} />

      {isLargerThan768 ? (
        <>
          <Spacer />
          <Flex ml={"-110px"}>
            <Link mr="4">Our Services</Link>
            <Link mr="4">Our Process</Link>
            <Link mr="4">About Us</Link>
            <Link mr="4" onClick={onRequestContractor}>
              Request a Contractor
            </Link>
          </Flex>
          <Spacer />
          <Button onClick={onContactClick} bg="#0141FF">
            Contact Us
          </Button>
        </>
      ) : (
        <>
          <Spacer />
          <IconButton
            aria-label="Navigation Menu"
            icon={<HamburgerIcon />}
            onClick={onOpen}
            variant="outline"
          />
          {!showModal && !showContractorModal && (
            <Drawer
              isOpen={isOpen}
              placement="right"
              onClose={onClose}
              motionConfig={{ motionReduce: true }}
            >
              <DrawerOverlay />
              <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader>Menu</DrawerHeader>
                <DrawerBody>
                  <VStack spacing="4">
                    <Link>Our Services</Link>
                    <Link>Our Process</Link>
                    <Link>About Us</Link>
                    <Link onClick={onRequestContractor}>
                      Request a Contractor
                    </Link>
                    <Button variant="outline" onClick={onContactClick}>
                      Contact Us
                    </Button>
                  </VStack>
                </DrawerBody>
              </DrawerContent>
            </Drawer>
          )}
        </>
      )}
    </Flex>
  );
}

export default Navigation;
