"use client";

import { Box } from "@kuma-ui/core";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";
import { useEffect } from "react";
import Footer from "../components/Footer";
import Landing from "./components/Landing";
import LandingCallToAction from "./components/LandingCallToAction";
import LandingDeveloperSection from "./components/LandingDeveloperSection";
import LandingInvestorSection from "./components/LandingInvestorSection";
import Navbar from "../components/Navbar";

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
      <Navbar background="#CCE2FF" dark={false} />
      <Landing />
      <LandingInvestorSection />
      <LandingDeveloperSection />
      <LandingCallToAction />
      <Footer background="#FFFFFF" />
    </Box>
  );
}
