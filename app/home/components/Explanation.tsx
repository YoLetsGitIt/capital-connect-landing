import { Box, Flex, Text } from "@/node_modules/@kuma-ui/core/dist/index";
import { useEffect } from "react";
import { gsap } from "gsap";
import Image from "@/node_modules/next/image";

export default function Explanation() {
  useEffect(() => {
    gsap.fromTo(
      ".browseProjects",
      {
        x: -50,
        opacity: 0,
      },
      {
        scrollTrigger: {
          trigger: ".browseProjects",
          toggleActions: "restart none none none",
        },
        delay: 0.25,
        x: 0,
        opacity: 1,
        ease: "power2.out",
        duration: 1,
      }
    );
    gsap.fromTo(
      ".contactDeveloper",
      {
        x: -50,
        opacity: 0,
      },
      {
        scrollTrigger: {
          trigger: ".browseProjects",
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
      ".letsInvest",
      {
        x: -50,
        opacity: 0,
      },
      {
        scrollTrigger: {
          trigger: ".browseProjects",
          toggleActions: "restart none none none",
        },
        delay: 0.75,
        x: 0,
        opacity: 1,
        ease: "power2.out",
        duration: 1,
      }
    );
  }, []);

  return (
    <Flex
      flex={1}
      alignItems="center"
      justifyContent="center"
      flexDir="column"
      minHeight="90vh"
      textAlign="center"
    >
      <Text fontSize="1.25rem" fontWeight="500" pb="1rem" pt="6rem">
        Connect with the right project now
      </Text>
      <Text fontSize="2.5rem" fontWeight="bold" pb="5rem">
        Quick &amp; easy investing
      </Text>
      <Flex flex={1} flexDir="row">
        <Flex alignItems="center" className="browseProjects" flexDir="column">
          <Image
            width={0}
            height={0}
            priority
            src="/browseProjects.svg"
            alt="Search"
            style={{
              width: "auto",
              height: "9rem",
            }}
          />
          <Text
            textAlign="center"
            pt="2rem"
            fontSize="1.25rem"
            fontWeight="500"
            pb="1rem"
          >
            Browse Projects
          </Text>
          <Text textAlign="center" px="5rem" color="#808080">
            Loren ipsum Loren ipsum Loren ipsum Loren ipsum Loren ipsum Loren
            ipsum Loren ipsum
          </Text>
        </Flex>
        <Flex alignItems="center" className="contactDeveloper" flexDir="column">
          <Image
            width={0}
            height={0}
            priority
            src="/contactDeveloper.svg"
            alt="Contact developer"
            style={{ width: "auto", height: "9rem" }}
          />
          <Text
            textAlign="center"
            pt="2rem"
            fontSize="1.25rem"
            fontWeight="500"
            pb="1rem"
          >
            Contact Developer
          </Text>
          <Text textAlign="center" px="5rem" color="#808080">
            Loren ipsum Loren ipsum Loren ipsum Loren ipsum Loren ipsum Loren
            ipsum Loren ipsum
          </Text>
        </Flex>
        <Flex alignItems="center" className="letsInvest" flexDir="column">
          <Image
            width={0}
            height={0}
            src="/letsInvest.svg"
            alt="Let's invest"
            style={{ width: "auto", height: "9rem" }}
          />
          <Text
            textAlign="center"
            pt="2rem"
            fontSize="1.25rem"
            fontWeight="500"
            pb="1rem"
          >
            Let's Invest
          </Text>
          <Text textAlign="center" px="5rem" color="#808080">
            Loren ipsum Loren ipsum Loren ipsum Loren ipsum Loren ipsum Loren
            ipsum Loren ipsum
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
}
