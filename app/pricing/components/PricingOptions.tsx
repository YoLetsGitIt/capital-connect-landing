"use client";

import { Box, Flex, Text, Button } from "@kuma-ui/core";

export default function PricingOptions() {
  return (
    <Flex
      alignItems="center"
      bg="#002C66"
      minHeight="100vh"
      flexDirection="column"
      justify="center"
    >
      <Text
        color="#FFFFFF"
        textAlign="center"
        fontWeight="bold"
        fontSize="2rem"
        pb="0.5rem"
      >
        Flexible and transparent pricing
      </Text>
      <Text color="#FFFFFF" textAlign="center" fontSize="1.25rem" pb="3rem">
        Compare our pricing plans to choose the right one for you
      </Text>
      <Flex alignItems="center" px="15vw" gap="3rem">
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
          <Text pb="2rem">Limited access to project information</Text>
          <Text fontSize="2.5rem" fontWeight="bold" pb="2rem">
            Free
          </Text>
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
        </Flex>
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
            Premium
          </Text>
          <Text pb="2rem">Full access to project information and contacts</Text>
          <Text fontSize="2.5rem" fontWeight="bold" pb="2rem">
            $300/year
          </Text>
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
        </Flex>
      </Flex>
    </Flex>
  );
}
