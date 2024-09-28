"use client";

import { Flex, Box, Heading, Text, HStack, Button } from "@kuma-ui/core";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { useEffect } from "react";
import Link from "next/link";

export default function LandingInvestorSection() {
  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(MotionPathPlugin);

  useEffect(() => {
    gsap.fromTo(
      ".imageContainer",
      {
        y: 25,
        opacity: 0,
      },
      {
        scrollTrigger: {
          trigger: ".imageContainer",
          toggleActions: "restart none none none",
        },
        y: 0,
        opacity: 1,
        ease: "power2.out",
        duration: 0.5,
      }
    );
    gsap.fromTo(
      ".thumbnail1",
      {
        x: -50,
        opacity: 0,
      },
      {
        delay: 0.3,
        x: 0,
        opacity: 1,
        duration: 0.5,
        scrollTrigger: {
          trigger: ".thumbnail1",
          toggleActions: "restart none none none",
        },
      }
    );
    gsap.fromTo(
      ".thumbnail2",
      {
        x: 50,
        opacity: 0,
      },
      {
        delay: 0.5,
        x: 0,
        opacity: 1,
        duration: 0.5,
        scrollTrigger: {
          trigger: ".thumbnail1",
          toggleActions: "restart none none none",
        },
      }
    );
    gsap.fromTo(
      ".thumbnail3",
      {
        x: -50,
        opacity: 0,
      },
      {
        delay: 0.7,
        x: 0,
        opacity: 1,
        duration: 0.5,
        scrollTrigger: {
          trigger: ".thumbnail1",
          toggleActions: "restart none none none",
        },
      }
    );
    gsap.fromTo(
      "#search",
      { opacity: 0 },
      {
        opacity: 1,
        duration: 0.5,
        delay: 0,
        scrollTrigger: {
          trigger: ".imageContainer",
          toggleActions: "restart none none none",
        },
      }
    );
    gsap.to("#search", {
      motionPath: {
        path: [
          { x: 0, y: 0 },
          { x: 100, y: -20 },
          { x: 300, y: 60 },
          { x: 200, y: 150 },
          { x: 400, y: 200 },
          { x: 250, y: 350 },
          { x: 100, y: 275 },
          { x: 200, y: 200 },
          { x: 10, y: 80 },
          { x: 0, y: 0 },
        ],
      },
      transformOrigin: "50% 50%",
      duration: 10,
      curviness: 2,
      repeat: -1,
      ease: "none",
    });
  }, []);

  return (
    <Flex
      alignItems="center"
      height={["auto", "80vh"]}
      pt={["10vh", 0]}
      bg="#FFFFFF"
      textAlign={["center", "left"]}
    >
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
            borderRadius="1rem"
            fontWeight="bold"
            fontSize="1rem"
            borderWidth={2}
            borderColor="#CCE2FF"
          >
            <Flex
              alignItems="center"
              pl="1.5rem"
              pr="1.5rem"
              transition="all 0.3s"
            >
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
      <Flex
        flex={1}
        display={["none", "block"]}
        bg="#002C66"
        borderRadius="1rem"
        p="3rem"
        gap="1rem"
        ml="2rem"
        opacity={0}
        className="imageContainer"
      >
        <Image
          width={0}
          height={0}
          src="/search-white.svg"
          style={{
            opacity: 0,
            width: "4rem",
            height: "auto",
            position: "absolute",
            zIndex: 100,
          }}
          id="search"
        />
        <Flex flex={1} mb="1rem" className="thumbnail1">
          <Image
            width={0}
            height={0}
            className="thumbnail1"
            priority
            src="/commercial-building-thumbnail.svg"
            alt="Searching on mobile phone"
            style={{ width: "70%", height: "auto" }}
          />
        </Flex>
        <Flex flex={1} justifyContent="flex-end" mb="1rem">
          <Image
            width={0}
            height={0}
            className="thumbnail2"
            priority
            src="/townhouse-thumbnail.svg"
            alt="Searching on mobile phone"
            style={{ width: "70%", height: "auto" }}
          />
        </Flex>
        <Flex flex={1} justifyContent="center">
          <Image
            width={0}
            height={0}
            className="thumbnail3"
            priority
            src="/officespace-thumbnail.svg"
            alt="Searching on mobile phone"
            style={{ width: "70%", height: "auto" }}
          />
        </Flex>
      </Flex>
    </Flex>
  );
}
