"use client";

import { Box } from "@kuma-ui/core";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";
import { useEffect } from "react";
import Home from "./home/page";

export default function TopLevel() {
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
      <Home />
    </Box>
  );
}
