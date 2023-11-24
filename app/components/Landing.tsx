"use client";

import { Flex, Box, Heading, Text, Button } from "@kuma-ui/core";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
import styles from "../page.module.css";

export default function Landing() {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {}, []);

  return (
    <Flex alignItems="center" height="100vh" px="17.5vw" bg="#CCE2FF">
      <Box mr="6vw" flex={1}>
        <Heading
          fontWeight="bold"
          mb="1rem"
          className={[styles.header, "landingHeader"].join(" ")}
        >
          The best online marketplace to find
        </Heading>
        <Text mb="3rem" color="#666666" className={styles.description}>
          Find the perfect deal for you in our community of active investors and
          developers.
        </Text>
        <Button
          bg="#002C66"
          color="#FFFFFF"
          py="1rem"
          px="2rem"
          borderRadius="2rem"
          fontWeight="bold"
          fontSize="1rem"
        >
          View projects
        </Button>
      </Box>
      <Box flex={1} display={["none", "block"]}>
        <Image
          width={0}
          height={0}
          priority
          src="/landing.svg"
          alt="Landing image"
          style={{ width: "100%", height: "auto" }}
        ></Image>
      </Box>
    </Flex>
  );
}
