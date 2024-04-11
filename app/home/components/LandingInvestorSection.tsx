"use client";

import { Flex, Box, Heading, Text, HStack, Button } from "@kuma-ui/core";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
import Link from "next/link";

export default function LandingInvestorSection() {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    gsap.fromTo(
      ".searchImage",
      {
        x: -50,
        opacity: 0,
      },
      {
        scrollTrigger: {
          trigger: ".searchImage",
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
      ".searchContent",
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: ".searchImage",
          toggleActions: "restart none none none",
        },
      }
    );
  }, []);

  return (
    <Flex
      alignItems="center"
      height={["auto", "80vh"]}
      pt={["10vh", 0]}
      px="10vw"
      bg="#FFFFFF"
    >
      <Box flex={1.25} display={["none", "block"]}>
        <Image
          width={0}
          height={0}
          className="searchImage"
          priority
          src="/search.svg"
          alt="Searching on mobile phone"
          style={{ width: "75%", height: "auto" }}
        />
      </Box>
      <Box className="searchContent" flex={1}>
        <Heading fontWeight="bold" fontSize={["1.5rem", "2.5rem"]} mb="1rem">
          Discover a collection of curated projects
        </Heading>
        <Text mb="2rem" fontSize="1.25rem" color="#666666">
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
        <Link href="https://app.capitalconnect.site">
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
              <Text>View projects</Text>
              <Image
                width={0}
                height={0}
                src="/pink-arrow.svg"
                alt="Pink right arrow"
                style={{ marginLeft: "0.5rem", width: "1rem", height: "1rem" }}
              />
            </Flex>
          </Button>
        </Link>
      </Box>
    </Flex>
  );
}
