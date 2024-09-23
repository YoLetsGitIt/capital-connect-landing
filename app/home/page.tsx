"use client";

import { Box } from "@kuma-ui/core";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";
import Landing from "./components/Landing";
import LandingCallToAction from "./components/LandingCallToAction";
import LandingDeveloperSection from "./components/LandingDeveloperSection";
import LandingInvestorSection from "./components/LandingInvestorSection";
import { Navbar } from "../components/Navbar";
import { useEffect } from "react";
import Explanation from "./components/Explanation";
import { Flex } from "@/node_modules/@kuma-ui/core/dist/index";

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
      <Box px="10vw" flexDirection="column">
        <Landing />
        <Explanation />
        <LandingInvestorSection />
        {/* <LandingDeveloperSection /> */}
        <LandingCallToAction />
      </Box>
    </Box>
  );
}
