"use client";

import { Box, Flex, Text } from "@/node_modules/@kuma-ui/core/dist/index";
import Image from "next/image";
import { gsap } from "gsap";
import { useEffect } from "react";

export default function Footer() {
  const maxHeight = 400;
  const minHeight = 350;

  const numberOfBuildings = 20;

  useEffect(() => {
    gsap.to(`.building`, {
      height: `random(${minHeight + 10}, ${maxHeight}, 1)`,
      repeat: -1,
      duration: 1,
      stagger: {
        each: 1,
        from: "random",
        grid: "auto",
      },
      yoyo: true,
    });
  }, []);

  return (
    <Box className="footer" flex={1} height={maxHeight} alignItems="center">
      <Flex flex={1} alignItems="flex-end">
        {Array(numberOfBuildings)
          .fill(0)
          .map((x, i) => {
            return (
              <Box
                key={i}
                className={`building`}
                bg="#001633"
                width="5vw"
                height={i % 2 === 0 ? minHeight + i * 3 : maxHeight - i * 3}
              />
            );
          })}
      </Flex>
      <Box position="relative" bottom={maxHeight / 1.5} textAlign="center">
        <Image
          width={0}
          height={0}
          priority
          src="/logo-dark.svg"
          alt="Logo"
          style={{ width: "2rem", height: "auto" }}
        />
        <Text color="#fff" fontSize="1.5rem" mb="1rem">
          Capital Connect
        </Text>
        <Text color="#fff">©Copyright. All rights reserved.</Text>
      </Box>
    </Box>
  );
}
