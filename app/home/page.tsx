"use client";

import { Box, Image, Flex, Text } from "@kuma-ui/core";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";
import Footer from "../components/Footer";
import Landing from "./components/Landing";
import LandingCallToAction from "./components/LandingCallToAction";
import LandingDeveloperSection from "./components/LandingDeveloperSection";
import LandingInvestorSection from "./components/LandingInvestorSection";
import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";

export default function Home() {
  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(TextPlugin);

  useEffect(() => {
    gsap.fromTo(
      ".developer-infographic",
      {
        x: -50,
        opacity: 0,
      },
      {
        scrollTrigger: {
          trigger: ".developer-infographic",
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
      ".cc-infographic",
      {
        y: -50,
        opacity: 0,
      },
      {
        scrollTrigger: {
          trigger: ".cc-infographic",
          toggleActions: "restart none none none",
        },
        delay: 0.5,
        y: 0,
        opacity: 1,
        ease: "power2.out",
        duration: 1,
      }
    );
    gsap.fromTo(
      ".investor-infographic",
      {
        x: 50,
        opacity: 0,
      },
      {
        scrollTrigger: {
          trigger: ".investor-infographic",
          toggleActions: "restart none none none",
        },
        delay: 0.5,
        x: 0,
        opacity: 1,
        ease: "power2.out",
        duration: 1,
      }
    );
  }, []);

  return (
    <Box width="100vw">
      <Navbar background="#CCE2FF" dark={false} />
      <Landing />
      <Flex
        flexDirection="column"
        alignItems="center"
        pt="5rem"
        pb="3rem"
        px="10vw"
      >
        <Text
          textAlign="center"
          fontWeight="bold"
          fontSize={["2rem", "3rem"]}
          pb="3rem"
          px="12.5vw"
        >
          Connecting investors and developers with the right opportunities
        </Text>
        <Flex
          flexDirection={["column", "row"]}
          gap={["5vh", "5vw"]}
          justify="center"
        >
          <Flex
            className="developer-infographic"
            flex={1}
            flexDirection="column"
            alignItems="center"
          >
            <Image
              width={0}
              height={0}
              src="/developers-infographic.svg"
              alt="Developer uploading infographic"
              style={{
                width: "100%",
                height: "auto",
              }}
            />
            <Text fontWeight="bold" fontSize="1.5rem" pt="1rem" pb="0.5rem">
              Developers
            </Text>
            <Text color="#808080" textAlign="center">
              Upload your development through our project form
            </Text>
          </Flex>
          <Flex
            className="cc-infographic"
            flex={1}
            flexDirection="column"
            alignItems="center"
            justify="center"
          >
            <Image
              width={0}
              height={0}
              src="/cc-infographic.svg"
              alt="Developer uploading infographic"
              style={{
                width: "100%",
                height: "auto",
              }}
            />
            <Text fontWeight="bold" fontSize="1.5rem" pt="1rem" pb="0.5rem">
              Capital Connect
            </Text>
            <Text color="#808080" textAlign="center">
              Easily find funding or your next investment opportunity in our
              active community
            </Text>
          </Flex>
          <Flex
            className="investor-infographic"
            flex={1}
            flexDirection="column"
            alignItems="center"
          >
            <Image
              width={0}
              height={0}
              src="/investors-infographic.svg"
              alt="Developer uploading infographic"
              style={{
                width: "100%",
                height: "auto",
              }}
            />
            <Text fontWeight="bold" fontSize="1.5rem" pt="1rem" pb="0.5rem">
              Investors
            </Text>
            <Text textAlign="center" color="#808080">
              Browse through all types of projects, contacts to the developer
              available at your fingertips
            </Text>
          </Flex>
        </Flex>
      </Flex>
      <LandingInvestorSection />
      <LandingDeveloperSection />
      <LandingCallToAction />
    </Box>
  );
}
