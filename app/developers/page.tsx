"use client";

import { Box, Flex, Text, VStack } from "@kuma-ui/core";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Developers() {
  return (
    <Box>
      <Navbar background="#CCE2FF" dark={false} />
      <Box pt="18vh" px="10vw" bg="#CCE2FF">
        <Text textAlign="center" fontWeight="bold" fontSize="2rem">
          Find funding for your project, quick and easy
        </Text>
        <Flex minHeight="80vh" alignItems="center">
          <Box flex={1} pb="20vh">
            <Text fontWeight="bold" fontSize="1.75rem" pb="1rem">
              1 - Prepare your listing
            </Text>
            <Text pb="2rem" color="#404040">
              Enter information about your project
            </Text>
            <VStack>
              <Text fontWeight="bold" fontSize="1.25rem" pb="1rem">
                - Description of the project
              </Text>
              <Text fontWeight="bold" fontSize="1.25rem" pb="1rem">
                - Project metrics
              </Text>
              <Text fontWeight="bold" fontSize="1.25rem" pb="1rem">
                - Relevant documents
              </Text>
            </VStack>
          </Box>
          <Box flex={1}>
            <Text>Image</Text>
          </Box>
        </Flex>
        <Flex minHeight="80vh" alignItems="center">
          <Box flex={1}>
            <Text>Image</Text>
          </Box>
          <Box flex={1} pb="20vh">
            <Text fontWeight="bold" fontSize="1.75rem" pb="1rem">
              2 - Organise funding with investors
            </Text>
            <Text pb="2rem" color="#404040">
              Exposure to a community of active investors
            </Text>
            <VStack>
              <Text fontWeight="bold" fontSize="1.25rem" pb="1rem">
                - Only serious investors will contact you
              </Text>
              <Text fontWeight="bold" fontSize="1.25rem" pb="1rem">
                - Investors will already have knowledge of the project
              </Text>
              <Text fontWeight="bold" fontSize="1.25rem" pb="1rem">
                - Close the deal outside of the platform, however you’d like
              </Text>
            </VStack>
          </Box>
        </Flex>
      </Box>
      <Footer background="#CCE2FF" />
    </Box>
  );
}
