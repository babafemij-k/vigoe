import React, { useState } from "react";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Process from "./components/Process";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import ContactModal from "./modals/ContactModal";
import RequestContractorModal from "./modals/RequestContractorModal";
import "./index.css";

import {
  Box,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  useDisclosure,
  ModalFooter,
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
  Flex,
  Textarea,
  Spacer,
  Heading,
  Text,
} from "@chakra-ui/react";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [showContractorModal, setShowContractorModal] = useState(false);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseContractorModal = () => {
    setShowContractorModal(false);
  };

  const handleShowContractorModal = () => {
    setShowContractorModal(true);
  };

  return (
    <>
      <Box
        fontFamily={"AvenirNextLTPro-Regular"}
        background={"#01070d"}
        minH={"100vh"}
      >
        <Navigation
          showContractorModal={showContractorModal}
          onRequestContractor={handleShowContractorModal}
          onContactClick={handleShowModal}
          showModal={showModal}
        />
        <Hero />
        <Services />
        <Process />
        <AboutUs />
        <ContactUs onContactClick={handleShowModal} />
        <ContactModal
          showModal={showModal}
          handleCloseModal={handleCloseModal}
        />
        <RequestContractorModal
          showContractorModal={showContractorModal}
          handleCloseContractorModal={handleCloseContractorModal}
        />
      </Box>
    </>
  );
}

export default App;
