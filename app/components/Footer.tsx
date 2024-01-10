"use client";

import { Box, Flex, Text } from "@kuma-ui/core";
import Image from "next/image";
import { gsap } from "gsap";
import { useEffect } from "react";

const Footer = ({ background }: { background: string }) => {
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
    <Box
      bg={background}
      className="footer"
      flex={1}
      height={maxHeight}
      alignItems="center"
    >
      <Box display="flex" flexDirection="row" flex={1} alignItems="flex-end">
        {Array(numberOfBuildings)
          .fill(0)
          .map((x, i) => {
            const buildingImageOrder = [
              "/building1.svg",
              "/building1.svg",
              "/building2.svg",
              "/building3.svg",
              "/building1.svg",
              "/building2.svg",
              "/building1.svg",
              "/building2.svg",
              "/building1.svg",
              "/building3.svg",
              "/building1.svg",
              "/building1.svg",
              "/building1.svg",
              "/building1.svg",
              "/building3.svg",
              "/building1.svg",
              "/building2.svg",
              "/building1.svg",
              "/building5.svg",
              "/building1.svg",
            ];

            return (
              <Box key={i}>
                <Image
                  src={buildingImageOrder[i]}
                  width={0}
                  height={0}
                  style={{ width: "5vw", height: "auto", marginBottom: -6 }}
                />
                <Box
                  className={`building`}
                  bg="#001633"
                  width="5vw"
                  height={i % 2 === 0 ? minHeight + i * 3 : maxHeight - i * 3}
                />
              </Box>
            );
          })}
      </Box>
      <Box position="relative" bottom={maxHeight / 1.5} textAlign="center">
        <Image
          width={0}
          height={0}
          priority={true}
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
};

export default Footer;
