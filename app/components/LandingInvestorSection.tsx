"use client";

import { Flex, Box, Heading, Text, Button, Image, HStack } from "@kuma-ui/core";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

export default function LandingInvestorSection() {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    gsap.fromTo(
      ".searchImage",
      {
        x: -300,
      },
      {
        scrollTrigger: {
          trigger: ".searchImage",
          toggleActions: "restart none none none",
        },
        x: 0,
        ease: "power2.out",
        duration: 1.5,
      }
    );
    gsap.fromTo(
      ".searchContent",
      {
        y: 100,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1.5,
        scrollTrigger: {
          trigger: ".searchImage",
          toggleActions: "restart none none none",
        },
      }
    );
  }, []);

  return (
    <Flex alignItems="center" height="100vh" px="14vw" bg="#FFFFFF">
      <Box flex={1}>
        <Image
          className="searchImage"
          priority
          src="/search.svg"
          alt="Searching on mobile phone"
        ></Image>
      </Box>
      <Box className="searchContent" flex={1}>
        <Heading fontWeight="bold" fontSize="3rem" mb="1rem">
          Discover a collection of curated projects
        </Heading>
        <Text mb="2rem" color="#666666">
          Browse through all different types of projects to find the perfect fit
          for you
        </Text>
        <HStack>
          <Text mb="1rem" fontWeight="bold" fontSize="1.25rem" mr="1rem">
            •
          </Text>
          <Text mb="1rem" fontWeight="bold" fontSize="1.25rem">
            Access to relevant project information
          </Text>
        </HStack>
        <HStack>
          <Text mb="1rem" fontWeight="bold" fontSize="1.25rem" mr="1rem">
            •
          </Text>
          <Text mb="1rem" fontWeight="bold" fontSize="1.25rem">
            Evaluate based on financial metrics
          </Text>
        </HStack>
        <HStack>
          <Text mb="1rem" fontWeight="bold" fontSize="1.25rem" mr="1rem">
            •
          </Text>
          <Text mb="1rem" fontWeight="bold" fontSize="1.25rem">
            Contact the developer in minutes
          </Text>
        </HStack>
      </Box>
    </Flex>
  );
}
