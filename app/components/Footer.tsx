"use client";

import { Box, Flex, Text } from "@kuma-ui/core";
import Image from "next/image";

const Footer = () => {
  return (
    <Box width="100vw" className="footer" alignItems="center" py="3rem">
      <Box px={["2.5vw", "10vw"]}>
        <Flex alignItems="center" flexDirection="row" pb="0.5rem">
          <Image
            width={0}
            height={0}
            priority
            src={"/logo.svg"}
            alt="Logo"
            style={{ width: "1.5rem", height: "auto", marginRight: "0.5rem" }}
          />
          <Text fontSize="1rem" fontWeight="bold" mr="2rem">
            Capital Connect
          </Text>
        </Flex>
        <Text fontSize="0.75rem" pb="2rem">
          Capital Connect Labs #43433516775
        </Text>
        <Text fontSize="0.75rem" pb="0.5rem">
          P : (+61) 401 863 530
        </Text>
        <Text fontSize="0.75rem">E : matthew.m.kwon@gmail.com</Text>
      </Box>
    </Box>
  );
};

export default Footer;
