import React, { useState } from "react";
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
import { GiHamburgerMenu } from "react-icons/gi";
import logo from "../assets/logo.png";
import test from "../assets/test.svg";
import { motion, motionValue } from "framer-motion";

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
      px={{ base: "5", md: "10" }}
      py={"10"}
      alignItems="center"
      width={"100vw"}
      color={"white"}
    >
      <Image
        src={test}
        alt="Logo"
        mt={"-0.3rem"}
        w={{ base: "75%", md: "18rem" }}
        h={{ base: "75%", md: "unset" }}
      />

      {isLargerThan768 ? (
        <>
          <Spacer />
          <Flex ml={"-110px"}>
            <Link
              as={motion.button}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              mr="5"
              href="#services"
              _hover={{ textDecoration: "none" }}
              data-target="services"
              onClick={(e) => {
                e.preventDefault();
                const target = document.querySelector(
                  `[id="${e.target.dataset.target}"]`
                );
                const offset = -70; // change this value to adjust the scroll position
                window.scrollTo({
                  top: target.offsetTop + offset,
                  behavior: "smooth",
                });
              }}
            >
              Our Services
            </Link>
            <Link
              mr="5"
              as={motion.button}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              _hover={{ textDecoration: "none" }}
              data-target="process"
              onClick={(e) => {
                e.preventDefault();
                const target = document.querySelector(
                  `[id="${e.target.dataset.target}"]`
                );
                const offset = -70; // change this value to adjust the scroll position
                window.scrollTo({
                  top: target.offsetTop + offset,
                  behavior: "smooth",
                });
              }}
            >
              Our Process
            </Link>
            <Link
              mr="5"
              as={motion.button}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              _hover={{ textDecoration: "none" }}
              data-target="about"
              onClick={(e) => {
                e.preventDefault();
                const target = document.querySelector(
                  `[id="${e.target.dataset.target}"]`
                );
                const offset = -70; // change this value to adjust the scroll position
                window.scrollTo({
                  top: target.offsetTop + offset,
                  behavior: "smooth",
                });
              }}
            >
              About Us
            </Link>
            <Link
              mr="5"
              onClick={onRequestContractor}
              as={motion.button}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              _hover={{ textDecoration: "none" }}
            >
              Request a Contractor
            </Link>
          </Flex>
          <Spacer />
          <Button
            as={motion.button}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={onContactClick}
            bg="#0141FF"
            _hover={{ backgroundColor: "#0141FF" }}
          >
            Contact Us
          </Button>
        </>
      ) : (
        <>
          <Spacer />
          <IconButton
            aria-label="Navigation Menu"
            icon={<GiHamburgerMenu />}
            onClick={onOpen}
            variant="outline"
            size="sm"
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
                    <Link
                      data-target="services"
                      onClick={(e) => {
                        e.preventDefault();
                        onClose();
                        const target = document.querySelector(
                          `[id="${e.target.dataset.target}"]`
                        );
                        const offset = -70; // change this value to adjust the scroll position
                        setTimeout(() => {
                          window.scrollTo({
                            top: target.offsetTop + offset,
                            behavior: "smooth",
                          });
                        }, 200);
                      }}
                    >
                      Our Services
                    </Link>
                    <Link
                      data-target="process"
                      onClick={(e) => {
                        e.preventDefault();
                        onClose();
                        const target = document.querySelector(
                          `[id="${e.target.dataset.target}"]`
                        );
                        const offset = -70; // change this value to adjust the scroll position
                        setTimeout(() => {
                          window.scrollTo({
                            top: target.offsetTop + offset,
                            behavior: "smooth",
                          });
                        }, 200);
                      }}
                    >
                      Our Process
                    </Link>
                    <Link
                      data-target="about"
                      onClick={(e) => {
                        e.preventDefault();
                        onClose();
                        const target = document.querySelector(
                          `[id="${e.target.dataset.target}"]`
                        );
                        const offset = -70; // change this value to adjust the scroll position
                        setTimeout(() => {
                          window.scrollTo({
                            top: target.offsetTop + offset,
                            behavior: "smooth",
                          });
                        }, 200);
                      }}
                    >
                      About Us
                    </Link>
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
