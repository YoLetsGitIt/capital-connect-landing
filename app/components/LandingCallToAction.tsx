"use client";

import { Flex, Box, Heading, Text, Button, Image, HStack } from "@kuma-ui/core";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

export default function LandingCallToAction() {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    gsap.fromTo(
      ".callToAction",
      {
        y: 100,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1.5,
        scrollTrigger: {
          trigger: ".callToAction",
          toggleActions: "restart none none none",
        },
      }
    );
  }, []);

  return (
    <Flex height="85vh" px="10vw" pb="15vh" bg="#FFFFFF">
      <Flex
        bg="#CCE2FF"
        alignItems="center"
        justifyContent="center"
        borderRadius="3rem"
        px="20vw"
        flexDirection="column"
        className="callToAction"
      >
        <Heading textAlign="center" pb="4rem" fontSize="2.5rem">
          Join the community of developers and investors on Capital Connect
        </Heading>
        <Button
          bg="#002C66"
          color="#FFFFFF"
          py="1rem"
          px="2rem"
          borderRadius="2rem"
          fontWeight="bold"
          fontSize="1rem"
        >
          Join now
        </Button>
      </Flex>
    </Flex>
  );
}
