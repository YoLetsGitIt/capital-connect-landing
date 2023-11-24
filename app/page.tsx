"use client";

import { Flex, Box, Heading, Text, Button, Image, HStack } from "@kuma-ui/core";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";
import { useEffect } from "react";
import Footer from "./components/Footer";
import Landing from "./components/Landing";
import LandingCallToAction from "./components/LandingCallToAction";
import LandingDeveloperSection from "./components/LandingDeveloperSection";
import LandingInvestorSection from "./components/LandingInvestorSection";
import Navbar from "./components/Navbar";
import styles from "./page.module.css";

export default function Home() {
  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(TextPlugin);

  useEffect(() => {
    gsap.to(".landingHeader", {
      duration: 2,
      text: {
        value: "The best online marketplace to find investors and developers",
        type: "diff",
      },
    });
  }, []);

  return (
    <Box>
      <Navbar />
      <Landing />
      <LandingInvestorSection />
      <LandingDeveloperSection />
      <LandingCallToAction />
      <Footer />
    </Box>
  );
}
