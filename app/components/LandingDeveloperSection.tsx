"use client";

import { Flex, Box, Heading, Text } from "@kuma-ui/core";
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
      height="100vh"
      px="10vw"
      bg="#FFFFFF"
    >
      <Box className="presentationContent" flex={1} mr="6vw">
        <Heading fontWeight="bold" fontSize="3rem" mb="1rem">
          Expose your project to many active investors
        </Heading>
        <Text mb="2rem" color="#666666">
          List your project for our keen investors to view. Start conversations
          to help fund your project.
        </Text>
        <Text>• Access to relevant project information</Text>
      </Box>
      <Box flex={1}>
        <Image
          width={0}
          height={0}
          className="presentationImage"
          priority
          src="/pitching.svg"
          alt="Landing image"
          style={{ width: "40vw", height: "auto" }}
        ></Image>
      </Box>
    </Flex>
  );
}
