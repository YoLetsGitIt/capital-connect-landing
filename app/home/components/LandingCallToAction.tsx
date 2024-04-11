"use client";

import Link from "next/link";
import { Flex, Box, Heading, Text, Button, Image, HStack } from "@kuma-ui/core";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
import styles from "../../page.module.css";

export default function LandingCallToAction() {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    gsap.fromTo(
      ".callToAction",
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: ".callToAction",
          toggleActions: "restart none none none",
        },
      }
    );
  }, []);

  return (
    <Flex
      mt="5vh"
      px="10vw"
      mb="5vh"
      bg="#E5F0FF"
      flexDirection="column"
      alignItems="center"
      py="15vh"
    >
      <Text
        textAlign="center"
        pb="2.5rem"
        fontWeight="bold"
        className={[styles.header].join(" ")}
        fontSize={["2rem", "3rem"]}
      >
        Connect with the right people now on Capital Connect
      </Text>
      <Link href="https://app.capitalconnect.site">
        <Button
          bg="#002C66"
          color="#FFFFFF"
          py="1.25rem"
          px="2.25rem"
          borderRadius="1rem"
          fontWeight="bold"
          fontSize="1rem"
        >
          <Flex>
            <Text>Create your free account now</Text>
            <Image
              width={0}
              height={0}
              src="/pink-arrow.svg"
              alt="Pink right arrow"
              style={{ marginLeft: "0.5rem", width: "1rem", height: "auto" }}
            />
          </Flex>
        </Button>
      </Link>
    </Flex>
  );
}
