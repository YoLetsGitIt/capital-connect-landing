"use client";

import { Flex, Box, Heading, Text, HStack, Button } from "@kuma-ui/core";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

export default function LandingDeveloperSection() {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    gsap.fromTo(
      ".presentationImage",
      {
        x: 50,
        opacity: 0,
      },
      {
        scrollTrigger: {
          trigger: ".presentationImage",
          toggleActions: "restart none none none",
        },
        delay: 0.5,
        x: 0,
        opacity: 1,
        ease: "power2.out",
        duration: 1,
      }
    );
    gsap.fromTo(
      ".presentationContent",
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: ".presentationImage",
          toggleActions: "restart none none none",
        },
      }
    );
  }, []);

  return (
    <Flex
      className="thirdSection"
      alignItems="center"
      height={["auto", "80vh"]}
      px="10vw"
      py={["10vh", 0]}
      pb="10vh"
      bg="#FFFFFF"
    >
      <Box className="presentationContent" flex={1.25} mr="2rem">
        <Heading fontWeight="bold" fontSize="2.5rem" mb="1rem">
          Expose your project to many active investors
        </Heading>
        <Text fontSize="1.25rem" mb="2rem" color="#666666">
          List your project for our keen investors to view. Start conversations
          to help fund your project.
        </Text>
        <HStack>
          <Text mb="1rem" fontWeight="bold" fontSize="1.25rem" mr="1rem">
            •
          </Text>
          <Text mb="1rem" fontWeight="bold" fontSize="1.25rem">
            Steamlined uploading process
          </Text>
        </HStack>
        <HStack>
          <Text mb="1rem" fontWeight="bold" fontSize="1.25rem" mr="1rem">
            •
          </Text>
          <Text mb="1rem" fontWeight="bold" fontSize="1.25rem">
            Gain access to an active group of investors
          </Text>
        </HStack>
        <HStack>
          <Text mb="1rem" fontWeight="bold" fontSize="1.25rem" mr="1rem">
            •
          </Text>
          <Text mb="1rem" fontWeight="bold" fontSize="1.25rem">
            Broaden your funding options
          </Text>
        </HStack>
        <Button
          bg="#002C66"
          color="#FFFFFF"
          mt="1rem"
          py="1rem"
          px="1.5rem"
          borderRadius="1rem"
          fontWeight="bold"
          fontSize="1rem"
          borderWidth={2}
          borderColor="#CCE2FF"
        >
          <Flex alignItems="center">
            <Text>Upload your project</Text>
            <Image
              width={0}
              height={0}
              src="/pink-arrow.svg"
              alt="Pink right arrow"
              style={{ marginLeft: "0.5rem", width: "1rem", height: "1rem" }}
            />
          </Flex>
        </Button>
      </Box>
      <Box flex={1} display={["none", "block"]}>
        <Image
          width={0}
          height={0}
          className="presentationImage"
          priority
          src="/pitching.svg"
          alt="Landing image"
          style={{ width: "100%", height: "auto" }}
        ></Image>
      </Box>
    </Flex>
  );
}
