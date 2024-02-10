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
      minHeight="90vh"
      px="10.5vw"
      bg="#CCE2FF"
      pt={["6rem", 0]}
    >
      <Box mr="6vw" flex={1}>
        <Text
          fontWeight="bold"
          fontSize="2rem"
          mb="1rem"
          className={[styles.header, "landingHeader"].join(" ")}
        >
          The best online marketplace to
        </Text>
        <Text mb="3rem" color="#666666" fontSize="1rem">
          Find the perfect deal for you in our community of active investors and
          developers.
        </Text>
        <a href="https://app.capitalconnect.site">
          <Button
            bg="#002C66"
            color="#FFFFFF"
            py="1rem"
            px="1.5rem"
            borderRadius="1rem"
            fontWeight="bold"
            fontSize="1rem"
            borderWidth={0}
            borderColor="#002C66"
            mb={["2rem", 0]}
          >
            <Flex>
              <Text>View projects</Text>
              <Image
                width={0}
                height={0}
                src="/pink-arrow.svg"
                alt="Pink right arrow"
                style={{ marginLeft: "0.5rem", width: "1rem", height: "auto" }}
              />
            </Flex>
          </Button>
        </a>
      </Box>
      <Box flex={1} display={["none", "block"]}>
        {/* <Image
          width={0}
          height={0}
          priority
          src="/landing.svg"
          alt="Landing image"
          style={{ width: "100%", height: "auto" }}
        /> */}
        <object type="image/svg+xml" data="/landing.svg">
          svg-animation
        </object>
      </Box>
    </Flex>
  );
}
