"use client";

import { Box, Flex, Text, HStack, Image, Button } from "@kuma-ui/core";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PricingOptions from "./components/PricingOptions";

export default function Pricing() {
  return (
    <Box>
      <Navbar background="#002C66" dark={true} />
      <Flex bg="#002C66" minHeight="100vh" flexDirection="column" px="10vw">
        <Text
          pt="15vh"
          color="#FFFFFF"
          textAlign="center"
          fontWeight="bold"
          fontSize="2rem"
          pb="1rem"
        >
          Flexible and transparent pricing
        </Text>
        <Text color="#FFFFFF" textAlign="center" fontSize="1.25rem" pb="3rem">
          Compare our pricing plans to choose the right one for you
        </Text>
        <HStack pb="1rem">
          <Box flex={4} />
          <Flex flex={1} justify="center" px="1rem">
            <Text color="#4D99FF" fontWeight="bold">
              Starter
            </Text>
          </Flex>
          <Flex flex={1} justify="center">
            <Text color="#4D99FF" fontWeight="bold">
              Premium
            </Text>
          </Flex>
        </HStack>
        <HStack pb="1rem">
          <Box flex={4}>
            <Text color="#FFFFFF" fontWeight="bold" fontSize="1.75rem">
              Key functionality
            </Text>
          </Box>
          <Flex flex={1} justify="center" px="1rem">
            <Text color="#FFFFFF" fontWeight="bold" fontSize="1.75rem">
              Free
            </Text>
          </Flex>
          <Box flex={1}>
            <Flex flex={1} alignItems="flex-end" justify="center">
              <Text color="#FFFFFF" fontWeight="bold" fontSize="1.75rem">
                $350
              </Text>
              <Text color="#FFFFFF" fontWeight="bold" fontSize="1rem">
                /year
              </Text>
            </Flex>
          </Box>
        </HStack>
        <HStack mb="1rem">
          <Flex flex={4} bg="#FFFFFF" borderRadius="0.5rem" alignItems="center">
            <Text ml="1.5rem">Project key dates</Text>
          </Flex>
          <Flex
            mx="1rem"
            flex={1}
            bg="#FFFFFF"
            borderRadius="0.5rem"
            alignItems="center"
            justify="center"
            py="0.5rem"
          >
            <Image
              width={0}
              height={0}
              src={"/tick.svg"}
              alt="Logo"
              style={{
                width: "2.5rem",
                height: "auto",
              }}
            />
          </Flex>
          <Box flex={1}>
            <Flex
              flex={1}
              bg="#FFFFFF"
              borderRadius="0.5rem"
              alignItems="center"
              justify="center"
              py="0.5rem"
            >
              <Image
                width={0}
                height={0}
                src={"/tick.svg"}
                alt="Logo"
                style={{
                  width: "2.5rem",
                  height: "auto",
                }}
              />
            </Flex>
          </Box>
        </HStack>
        <HStack mb="1rem">
          <Flex flex={4} bg="#FFFFFF" borderRadius="0.5rem" alignItems="center">
            <Text ml="1.5rem">Funding details</Text>
          </Flex>
          <Flex
            mx="1rem"
            flex={1}
            bg="#FFFFFF"
            borderRadius="0.5rem"
            alignItems="center"
            justify="center"
            py="0.5rem"
          >
            <Image
              width={0}
              height={0}
              src={"/tick.svg"}
              alt="Logo"
              style={{
                width: "2.5rem",
                height: "auto",
              }}
            />
          </Flex>
          <Box flex={1}>
            <Flex
              flex={1}
              bg="#FFFFFF"
              borderRadius="0.5rem"
              alignItems="center"
              justify="center"
              py="0.5rem"
            >
              <Image
                width={0}
                height={0}
                src={"/tick.svg"}
                alt="Logo"
                style={{
                  width: "2.5rem",
                  height: "auto",
                }}
              />
            </Flex>
          </Box>
        </HStack>
        <HStack mb="1rem">
          <Flex flex={4} bg="#FFFFFF" borderRadius="0.5rem" alignItems="center">
            <Text ml="1.5rem">Financial metrics</Text>
          </Flex>
          <Flex
            mx="1rem"
            flex={1}
            bg="#FFFFFF"
            borderRadius="0.5rem"
            alignItems="center"
            justify="center"
            py="0.5rem"
          >
            <Image
              width={0}
              height={0}
              src={"/tick.svg"}
              alt="Logo"
              style={{
                width: "2.5rem",
                height: "auto",
              }}
            />
          </Flex>
          <Box flex={1}>
            <Flex
              flex={1}
              bg="#FFFFFF"
              borderRadius="0.5rem"
              alignItems="center"
              justify="center"
              py="0.5rem"
            >
              <Image
                width={0}
                height={0}
                src={"/tick.svg"}
                alt="Logo"
                style={{
                  width: "2.5rem",
                  height: "auto",
                }}
              />
            </Flex>
          </Box>
        </HStack>
        <HStack mb="1rem">
          <Flex flex={4} bg="#FFFFFF" borderRadius="0.5rem" alignItems="center">
            <Text ml="1.5rem">Financials (cost, profit)</Text>
          </Flex>
          <Flex
            mx="1rem"
            flex={1}
            bg="#FFFFFF"
            borderRadius="0.5rem"
            alignItems="center"
            justify="center"
            py="0.5rem"
          >
            <Image
              width={0}
              height={0}
              src={"/tick.svg"}
              alt="Logo"
              style={{
                width: "2.5rem",
                height: "auto",
              }}
            />
          </Flex>
          <Box flex={1}>
            <Flex
              flex={1}
              bg="#FFFFFF"
              borderRadius="0.5rem"
              alignItems="center"
              justify="center"
              py="0.5rem"
            >
              <Image
                width={0}
                height={0}
                src={"/tick.svg"}
                alt="Logo"
                style={{
                  width: "2.5rem",
                  height: "auto",
                }}
              />
            </Flex>
          </Box>
        </HStack>
        <HStack mb="1rem">
          <Flex flex={4} bg="#FFFFFF" borderRadius="0.5rem" alignItems="center">
            <Text ml="1.5rem">Access to contacts</Text>
          </Flex>
          <Flex
            mx="1rem"
            flex={1}
            bg="#FFFFFF"
            borderRadius="0.5rem"
            alignItems="center"
            justify="center"
            py="0.5rem"
          >
            <Image
              width={0}
              height={0}
              src={"/remove.svg"}
              alt="Logo"
              style={{
                width: "2.5rem",
                height: "auto",
              }}
            />
          </Flex>
          <Box flex={1}>
            <Flex
              flex={1}
              bg="#FFFFFF"
              borderRadius="0.5rem"
              alignItems="center"
              justify="center"
              py="0.5rem"
            >
              <Image
                width={0}
                height={0}
                src={"/tick.svg"}
                alt="Logo"
                style={{
                  width: "2.5rem",
                  height: "auto",
                }}
              />
            </Flex>
          </Box>
        </HStack>
        <HStack mb="1rem">
          <Flex flex={4} bg="#FFFFFF" borderRadius="0.5rem" alignItems="center">
            <Text ml="1.5rem">Due diligence pack</Text>
          </Flex>
          <Flex
            mx="1rem"
            flex={1}
            bg="#FFFFFF"
            borderRadius="0.5rem"
            alignItems="center"
            justify="center"
            py="0.5rem"
          >
            <Image
              width={0}
              height={0}
              src={"/remove.svg"}
              alt="Logo"
              style={{
                width: "2.5rem",
                height: "auto",
              }}
            />
          </Flex>
          <Box flex={1}>
            <Flex
              flex={1}
              bg="#FFFFFF"
              borderRadius="0.5rem"
              alignItems="center"
              justify="center"
              py="0.5rem"
            >
              <Image
                width={0}
                height={0}
                src={"/tick.svg"}
                alt="Logo"
                style={{
                  width: "2.5rem",
                  height: "auto",
                }}
              />
            </Flex>
          </Box>
        </HStack>
        <HStack mb="4rem">
          <Flex flex={4} bg="#FFFFFF" borderRadius="0.5rem" alignItems="center">
            <Text ml="1.5rem">Feasibility analysis</Text>
          </Flex>
          <Flex
            mx="1rem"
            flex={1}
            bg="#FFFFFF"
            borderRadius="0.5rem"
            alignItems="center"
            justify="center"
            py="0.5rem"
          >
            <Image
              width={0}
              height={0}
              src={"/remove.svg"}
              alt="Logo"
              style={{
                width: "2.5rem",
                height: "auto",
              }}
            />
          </Flex>
          <Box flex={1}>
            <Flex
              flex={1}
              bg="#FFFFFF"
              borderRadius="0.5rem"
              alignItems="center"
              justify="center"
              py="0.5rem"
            >
              <Image
                width={0}
                height={0}
                src={"/tick.svg"}
                alt="Logo"
                style={{
                  width: "2.5rem",
                  height: "auto",
                }}
              />
            </Flex>
          </Box>
        </HStack>
        <Flex
          flex={1}
          bg="#4D99FF"
          p="2rem"
          borderRadius="1rem"
          mb="4rem"
          alignItems="center"
        >
          <Text flex={1} color="#FFFFFF" fontWeight="bold" fontSize="1.5rem">
            Ready to get started?
          </Text>
          <Button
            bg="#002C66"
            color="#FFFFFF"
            py="1rem"
            px="2rem"
            borderRadius="1rem"
            fontWeight="bold"
            fontSize="1rem"
            borderWidth={0}
            borderColor="#002C66"
          >
            Join now
          </Button>
        </Flex>
      </Flex>
      <Footer background="#002C66" />
    </Box>
  );
}
