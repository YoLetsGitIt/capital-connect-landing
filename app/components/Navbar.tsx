"use client";

import {
  Box,
  Flex,
  Text,
  Image,
} from "@/node_modules/@kuma-ui/core/dist/index";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (window.scrollY > lastScrollY) {
      // if scroll down hide the navbar
      console.log(show ? 0 : "-10vh");
      setShow(false);
    } else {
      // if scroll up show the navbar
      setShow(true);
    }

    // remember current page location to use in the next move
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);

    // cleanup function
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  return (
    <Flex
      zIndex={50}
      position="fixed"
      top={show ? 0 : "-11vh"}
      boxShadow="0px 2px 2px #00000040"
      bg="#FFFFFF"
      height="10vh"
      width="100%"
      alignItems="center"
      px="5vw"
      transitionTimingFunction="ease-in"
      transition="0.3s"
    >
      <Image width="1.5rem" priority src="/logo.svg" alt="Logo" mr="0.5rem" />
      <Text>Capital Connect</Text>
      <Box flex={1} />
      <Text mr="2rem">Login</Text>
      <Box
        border="1px solid #000000"
        borderRadius="10rem"
        py="0.5rem"
        px="1rem"
      >
        <Text>Join now</Text>
      </Box>
    </Flex>
  );
}
