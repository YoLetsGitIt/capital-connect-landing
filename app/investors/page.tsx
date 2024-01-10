"use client";

import { Box, Flex, Text, Button, Image } from "@kuma-ui/core";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Investors() {
  return (
    <Box>
      <Navbar background="#CCE2FF" dark={false} />
      <Flex minHeight="100vh" alignItems="center" px="10vw" bg="#CCE2FF">
        <Box flex={1}>
          <Text fontWeight="bold" pb="1rem">
            Analyse, contact, invest
          </Text>
          <Text fontWeight="bold" fontSize="2.5rem" pb="1.5rem">
            Gain access to immediately investable projects
          </Text>
          <Text>View key project metrics to help analyse the project.</Text>
          <Text pb="2rem">
            Contact project owners instantly to close the deal.
          </Text>
          <Button
            bg="#002C66"
            color="#FFFFFF"
            py="1rem"
            px="2rem"
            borderRadius="2rem"
            fontWeight="bold"
            fontSize="1rem"
            borderWidth={0}
            borderColor="#002C66"
          >
            View projects
          </Button>
        </Box>
        <Box flex={1}>
          <Image
            width={0}
            height={0}
            src="/investors-project-view.svg"
            alt="Project upload form"
            style={{ width: "80%", height: "auto" }}
          />
        </Box>
      </Flex>
      <Footer background="#CCE2FF" />
    </Box>
  );
}
