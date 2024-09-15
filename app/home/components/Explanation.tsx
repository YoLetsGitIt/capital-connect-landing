import { Flex, Text } from "@/node_modules/@kuma-ui/core/dist/index";
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
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minHeight="80vh"
      px="10vw"
      width="100vw"
    >
      <Text fontSize="1.25rem" fontWeight="500" pb="1rem">
        Connect with the right project now
      </Text>
      <Text fontSize="2.5rem" fontWeight="bold" pb="6rem">
        Quick &amp; easy investing
      </Text>
      <Flex width="100%">
        <Flex
          flex={1}
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          className="browseProjects"
        >
          <Image
            width={0}
            height={0}
            priority
            src="/browseProjects.svg"
            alt="Search"
            style={{ width: "8rem", height: "auto" }}
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
        <Flex
          flex={1}
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          className="contactDeveloper"
        >
          <Image
            width={0}
            height={0}
            priority
            src="/contactDeveloper.svg"
            alt="Contact developer"
            style={{ width: "8rem", height: "auto" }}
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
        <Flex
          flex={1}
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          className="letsInvest"
        >
          <Image
            width={0}
            height={0}
            src="/letsInvest.svg"
            alt="Let's invest"
            style={{ width: "8rem", height: "auto" }}
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
