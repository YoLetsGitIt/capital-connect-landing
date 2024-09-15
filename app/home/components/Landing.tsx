"use client";

import { useEffect, useState } from "react";
import { Flex, Box, Text, Button } from "@kuma-ui/core";
import Image from "next/image";
import styles from "../../page.module.css";
import { gsap } from "gsap";

export default function Landing() {
  useEffect(() => {
    gsap.fromTo(
      ".landingHeading",
      {
        y: 25,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        ease: "power2.out",
        duration: 1,
      }
    );
    gsap.fromTo(
      ".landingSubheading",
      {
        y: 50,
        opacity: 0,
      },
      {
        delay: 0.05,
        y: 0,
        opacity: 1,
        ease: "power2.out",
        duration: 1,
      }
    );
  }, []);

  const [buttonHover, setButtonHover] = useState(false);

  return (
    <Flex
      alignItems="center"
      minHeight="100vh"
      px="10.5vw"
      pt={["20vh", 0]}
      pb={["5vh", 0]}
      width="100vw"
    >
      <Image
        src="/melbourne-city.jpg"
        width={0}
        height={0}
        alt="background of the city"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        style={{ filter: "brightness(30%)" }}
      />
      <Box
        flex={1}
        zIndex={25}
        justifyContent="center"
        px="12.5vw"
        alignItems="center"
        mt="10vh"
      >
        <Text
          fontSize={["2rem", "2.5rem"]}
          mb="1rem"
          color="#FFFFFF"
          textAlign="center"
          opacity={0}
          className={[styles.header, "landingHeading"].join(" ")}
        >
          The best online marketplace to make property deals
        </Text>
        <Text
          mb="3rem"
          px="7.5vw"
          color="#E6E6E6"
          fontSize="1.25rem"
          textAlign="center"
          opacity={0}
          className="landingSubheading"
        >
          Find the perfect deal for you in our community of active investors and
          developers.
        </Text>
        <Flex
          alignItems="center"
          justifyContent="center"
          gap="2.5rem"
          opacity={0}
          className="landingHeading"
        >
          <a href="https://app.capitalconnect.site">
            <Button
              bg="#002C66"
              color="#FFFFFF"
              py="1rem"
              px="1.5rem"
              borderRadius="1rem"
              fontWeight="bold"
              fontSize="1rem"
              borderWidth={2}
              borderColor="#CCE2FF"
              mb={["2rem", 0]}
              onMouseOver={() => setButtonHover(true)}
              onMouseOut={() => setButtonHover(false)}
            >
              <Flex alignItems="center">
                <Text>I'm an investor</Text>
                <Image
                  width={0}
                  height={0}
                  priority
                  src="/investor-icon.svg"
                  alt="Investor icon"
                  style={{
                    marginLeft: "0.5rem",
                    width: "1rem",
                    height: "auto",
                  }}
                />
              </Flex>
            </Button>
          </a>
          <a href="https://app.capitalconnect.site">
            <Button
              bg="#002C66"
              color="#FFFFFF"
              py="1rem"
              px="1.5rem"
              borderRadius="1rem"
              fontWeight="bold"
              fontSize="1rem"
              borderWidth={2}
              borderColor="#CCE2FF"
              mb={["2rem", 0]}
              onMouseOver={() => setButtonHover(true)}
              onMouseOut={() => setButtonHover(false)}
            >
              <Flex alignItems="center">
                <Text>I'm a developer</Text>
                <Image
                  width={0}
                  height={0}
                  src="/developer-icon.svg"
                  alt="Developer icon"
                  style={{
                    marginLeft: "0.5rem",
                    width: "1rem",
                    height: "1rem",
                    transition: "all 0.5s",
                  }}
                />
              </Flex>
            </Button>
          </a>
        </Flex>
      </Box>
    </Flex>
  );
}
