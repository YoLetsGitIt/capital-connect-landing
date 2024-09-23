"use client";

import Link from "next/link";
import { Flex, Text, Button, Image } from "@kuma-ui/core";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
import styles from "../../page.module.css";

export default function LandingCallToAction() {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    gsap.fromTo(
      ".callToActionText",
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.5,
        scrollTrigger: {
          trigger: ".callToActionText",
          toggleActions: "restart none none none",
        },
      }
    );
    gsap.fromTo(
      ".callToActionButton",
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.5,
        delay: 0.15,
        scrollTrigger: {
          trigger: ".callToActionText",
          toggleActions: "restart none none none",
        },
      }
    );
  }, []);

  return (
    <Flex
      mt="5vh"
      mb="5vh"
      bg="#E5F0FF"
      flexDirection="column"
      alignItems="center"
      py="15vh"
      borderRadius="2rem"
    >
      <Text
        textAlign="center"
        pb="2.5rem"
        fontWeight="bold"
        mx="10vw"
        className="callToActionText"
        fontSize={["2rem", "2rem"]}
      >
        Join the group of investors and developers already doing business on
        Capital Connect
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
          className="callToActionButton"
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
