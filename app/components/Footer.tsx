"use client";

import { Box, Flex, Text } from "@kuma-ui/core";
import Image from "next/image";
import { gsap } from "gsap";
import { useEffect } from "react";

const Footer = ({ background }: { background: string }) => {
  const numberOfBuildings = 20;

  // useEffect(() => {
  //   gsap.to(`.building`, {
  //     height: `random(${minHeight + 10}, ${maxHeight}, 1)`,
  //     repeat: -1,
  //     duration: 1,
  //     stagger: {
  //       each: 1,
  //       from: "random",
  //       grid: "auto",
  //     },
  //     yoyo: true,
  //   });
  // }, []);

  return (
    <Box className="footer" flex={1} alignItems="center" pb="3rem">
      {/* <Box display="flex" flexDirection="row" flex={1} alignItems="flex-end">
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
                  alt="building silhouette"
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
      </Box> */}
      <Box px="5vw">
        <Flex alignItems="center" flexDirection="row" pb="0.5rem">
          <Image
            width={0}
            height={0}
            priority
            src={"/logo.svg"}
            alt="Logo"
            style={{ width: "1.5rem", height: "auto", marginRight: "0.5rem" }}
          />
          <Text fontSize="1rem" fontWeight="bold" mr="2rem">
            Capital Connect
          </Text>
        </Flex>
        <Text fontSize="0.75rem">Capital Connect Labs #43433516775</Text>
      </Box>
    </Box>
  );
};

export default Footer;
