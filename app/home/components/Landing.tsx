"use client";

import { useEffect } from "react";
import { Flex, Box, Heading, Text, Button } from "@kuma-ui/core";
import Image from "next/image";
import styles from "../../page.module.css";
import { gsap } from "gsap";

export default function Landing() {
  useEffect(() => {
    gsap.to(".landingHeader", {
      duration: 2,
      text: {
        value: "The best online marketplace to make property deals",
        type: "diff",
      },
    });
  }, []);

  return (
    <Flex
      alignItems="center"
      minHeight="100vh"
      px="10.5vw"
      pt={["20vh", 0]}
      pb={["5vh", 0]}
      backgroundImage={`url('/landing.png')`}
      backgroundPosition="center"
      backgroundSize="cover"
      backgroundRepeat="no-repeat"
    >
      <Box flex={1}>
        <Text
          fontWeight="bold"
          fontSize="3rem"
          mb="1rem"
          color="#FFFFFF"
          className={[styles.header, "landingHeader"].join(" ")}
        >
          The best online marketplace to
        </Text>
        <Text mb="3rem" color="#E6E6E6" fontSize="1.5rem">
          Find the perfect deal for you in our community of active investors and
          developers.
        </Text>
        <a href="https://app.capitalconnect.site">
          <Button
            bg="transparent"
            color="#FFFFFF"
            py="1rem"
            px="1.5rem"
            borderRadius="1rem"
            fontWeight="bold"
            fontSize="1rem"
            borderWidth={2}
            borderColor="#CCE2FF"
            mb={["2rem", 0]}
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
        </a>
      </Box>
      <Box flex={1}></Box>
    </Flex>
  );
}
