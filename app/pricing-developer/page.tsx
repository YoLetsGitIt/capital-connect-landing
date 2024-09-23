"use client";

import {
  Box,
  Flex,
  Text,
  Button,
} from "@/node_modules/@kuma-ui/core/dist/index";
import { Navbar } from "../components/Navbar";

export default function PricingDeveloper() {
  return (
    <Box>
      <Navbar background="#002C66" dark={true} />
      <Flex
        pt={["17vh", 0]}
        px={["10vw", 0]}
        alignItems="center"
        bg="#002C66"
        minHeight="100vh"
        flexDirection="column"
        justify="center"
        width="100vw"
      >
        <Text color="#FFFFFF" textAlign="center" fontSize="1.25rem" pb="0.5rem">
          A generous free plan to get you started
        </Text>
        <Text
          color="#FFFFFF"
          textAlign="center"
          fontWeight="bold"
          fontSize="2rem"
          pb="3rem"
        >
          Upgrade to premium only when you need
        </Text>
        <Flex
          alignItems="center"
          px="15vw"
          gap="3rem"
          flexDirection={["column", "row"]}
          pb={["3rem", 0]}
        >
          <Box>
            <Flex
              flex={1}
              bg="#FFFFFF"
              alignItems="center"
              justify="center"
              textAlign="center"
              height="20rem"
              px="3rem"
              flexDirection="column"
              borderRadius={32}
            >
              <Text fontSize="1.5rem" fontWeight="bold" pb="1rem">
                Starter
              </Text>
              <Text pb="2rem">Up to three project uploads</Text>
              <Text fontSize="2.5rem" fontWeight="bold" pb="2rem">
                Free
              </Text>
              <a
                href="https://app.capitalconnect.site"
                style={{ textDecoration: "none" }}
              >
                <Button
                  bg="#4D99FF"
                  color="#FFFFFF"
                  py="1rem"
                  px="2rem"
                  borderRadius={16}
                  fontWeight="bold"
                  fontSize="1rem"
                  borderWidth={0}
                >
                  Get started
                </Button>
              </a>
            </Flex>
          </Box>
          <Box borderWidth={10} p="0.5rem" bg="#CCE2FF" borderRadius={32}>
            <Flex
              flex={1}
              bg="#FFFFFF"
              alignItems="center"
              justify="center"
              textAlign="center"
              height="19rem"
              px="2.5rem"
              flexDirection="column"
              borderRadius={32}
            >
              <Text fontSize="1.5rem" fontWeight="bold" pb="1rem">
                Premium
              </Text>
              <Text pb="2rem">Unlimited project uploads</Text>
              <Text fontSize="2.5rem" fontWeight="bold" pb="2rem">
                $299/year
              </Text>
              <a
                href="https://app.capitalconnect.site"
                style={{ textDecoration: "none" }}
              >
                <Button
                  bg="#4D99FF"
                  color="#FFFFFF"
                  py="1rem"
                  px="2rem"
                  borderRadius={16}
                  fontWeight="bold"
                  fontSize="1rem"
                  borderWidth={0}
                >
                  Get started
                </Button>
              </a>
            </Flex>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
}
