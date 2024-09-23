"use client";

import { Box } from "@kuma-ui/core";
import Footer from "./components/Footer";
import Home from "./home/page";

export default function TopLevel() {
  return (
    <Box>
      <Home />
      <Footer />
    </Box>
  );
}
