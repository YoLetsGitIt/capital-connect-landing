"use client";

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
    <Flex px="10vw" pb="15vh" bg="#FFFFFF">
      <Flex
        bg="#CCE2FF"
        alignItems="center"
        justifyContent="center"
        borderRadius="1rem"
        px={["10vw", "10vw"]}
        flexDirection="column"
        py="5rem"
        className="callToAction"
      >
        <Heading
          textAlign="center"
          pb="4rem"
          className={[styles.header].join(" ")}
          fontSize={["2rem", "2.5rem"]}
        >
          Join the community of developers and investors on Capital Connect
        </Heading>
        <a href="https://app.capitalconnect.site">
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
              <Text>Join now</Text>
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
      </Flex>
    </Flex>
  );
}
