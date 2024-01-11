"use client";

import { Box, Flex, Text, VStack, Image } from "@kuma-ui/core";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Developers() {
  return (
    <Box>
      <Navbar background="#CCE2FF" dark={false} />
      <Box pt="16vh" px="15vw" bg="#CCE2FF">
        <Text textAlign="center" fontWeight="bold" fontSize="2rem">
          Upload, and wait
        </Text>
        <Text textAlign="center" pb="2rem">
          Find funding for your project, quick and easy
        </Text>
        <Flex
          minHeight="80vh"
          alignItems="center"
          flexDirection={["column", "row"]}
        >
          <Box flex={1} pt={["2rem", 0]} pb={["3rem", "30vh"]}>
            <Box ml={[0, "4rem"]}>
              <Text fontWeight="bold" fontSize="1.75rem" pb="1rem">
                1 - Prepare your listing
              </Text>
              <Text pb="2rem" color="#404040">
                Enter information about your project
              </Text>
              <Box display={["block", "none"]} pb="3rem">
                <Image
                  width={0}
                  height={0}
                  src="/project-upload-form.svg"
                  alt="Project upload form"
                  style={{ width: "100%", height: "auto" }}
                />
              </Box>
              <VStack>
                <Flex alignItems="center" pb="1rem">
                  <Image
                    width={0}
                    height={0}
                    src="/dot-point.svg"
                    alt="Dot point"
                    style={{ width: "1rem", height: "auto" }}
                  />
                  <Text ml="1rem" fontWeight="bold" fontSize="1.25rem">
                    Description of the project
                  </Text>
                </Flex>
                <Flex alignItems="center" pb="1rem">
                  <Image
                    width={0}
                    height={0}
                    src="/dot-point.svg"
                    alt="Dot point"
                    style={{ width: "1rem", height: "auto" }}
                  />
                  <Text ml="1rem" fontWeight="bold" fontSize="1.25rem">
                    Project metrics
                  </Text>
                </Flex>
                <Flex alignItems="center" pb="1rem">
                  <Image
                    width={0}
                    height={0}
                    src="/dot-point.svg"
                    alt="Dot point"
                    style={{ width: "1rem", height: "auto" }}
                  />
                  <Text ml="1rem" fontWeight="bold" fontSize="1.25rem">
                    Relevant documents
                  </Text>
                </Flex>
              </VStack>
            </Box>
          </Box>
          <Box display={["none", "block"]} flex={1.25} mb="10vh">
            <Image
              width={0}
              height={0}
              src="/project-upload-form.svg"
              alt="Project upload form"
              style={{ width: "100%", height: "auto" }}
            />
          </Box>
        </Flex>
        <Flex alignItems="center" flexDirection={["column", "row"]}>
          <Flex
            display={["none", "block"]}
            flex={1}
            height="80vh"
            style={{ position: "relative" }}
          >
            <Image
              width={0}
              height={0}
              src="/person1.svg"
              alt="Project upload form"
              borderRadius="8rem"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "8rem",
                height: "auto",
                transform: `translatey(0px)`,
                animation: "float 6s ease-in-out infinite",
              }}
            />
            <Image
              width={0}
              height={0}
              src="/gmail.svg"
              alt="Project upload form"
              borderRadius="1.5rem"
              p="1rem"
              style={{
                position: "absolute",
                top: 10,
                right: "20vh",
                width: "6rem",
                height: "auto",
                transform: `translatey(0px)`,
                animation: "float 6s ease-in-out infinite",
                animationDelay: "-4.5s",
              }}
            />
            <Image
              width={0}
              height={0}
              src="/iosCall.svg"
              alt="Project upload form"
              borderRadius="1rem"
              p="1rem"
              style={{
                position: "absolute",
                top: "20vh",
                left: "15vw",
                width: "5rem",
                height: "auto",
                transform: `translatey(0px)`,
                animation: "float 6s ease-in-out infinite",
                animationDelay: "-2.5s",
              }}
            />
            <Image
              width={0}
              height={0}
              src="/person2.svg"
              alt="Project upload form"
              borderRadius="7rem"
              style={{
                position: "absolute",
                top: "40vh",
                right: "10vw",
                width: "8rem",
                height: "auto",
                transform: `translatey(0px)`,
                animation: "float 6s ease-in-out infinite",
                animationDelay: "-0.7s",
              }}
            />
            <Image
              width={0}
              height={0}
              src="/person3.svg"
              alt="Project upload form"
              borderRadius="7rem"
              style={{
                position: "absolute",
                bottom: "10vh",
                left: "2vw",
                width: "7rem",
                height: "auto",
                transform: `translatey(0px)`,
                animation: "float 6s ease-in-out infinite",
                animationDelay: "-4.3s",
              }}
            />
            <Image
              width={0}
              height={0}
              src="/whatsapp.svg"
              alt="Project upload form"
              borderRadius="1.5rem"
              p="1rem"
              style={{
                position: "absolute",
                top: "30vh",
                left: "5vw",
                width: "5rem",
                height: "auto",
                transform: `translatey(0px)`,
                animation: "float 6s ease-in-out infinite",
                animationDelay: "-5.9s",
              }}
            />
          </Flex>
          <Box flex={1} pb="20vh">
            <Text fontWeight="bold" fontSize="1.75rem" pb="1rem">
              2 - Organise funding with investors
            </Text>
            <Text pb={["1rem", "2rem"]} color="#404040">
              Exposure to a community of active investors
            </Text>
            <Flex
              display={["flex", "none"]}
              pb="2rem"
              flexDirection="row"
              justify="space-between"
              alignItems="center"
            >
              <Image
                width={0}
                height={0}
                src="/iosCall.svg"
                alt="Project upload form"
                borderRadius="1.5rem"
                p="1rem"
                boxShadow="0 5px 15px 0px rgba(0,0,0,0.6)"
                style={{
                  width: "5rem",
                  height: "auto",
                }}
              />
              <Image
                width={0}
                height={0}
                src="/gmail.svg"
                alt="Project upload form"
                borderRadius="1.5rem"
                p="1rem"
                boxShadow="0 5px 15px 0px rgba(0,0,0,0.6)"
                style={{
                  width: "5rem",
                  height: "auto",
                }}
              />
              <Image
                width={0}
                height={0}
                src="/whatsapp.svg"
                alt="Project upload form"
                borderRadius="1.5rem"
                p="1rem"
                boxShadow="0 5px 15px 0px rgba(0,0,0,0.6)"
                style={{
                  width: "5rem",
                  height: "auto",
                }}
              />
            </Flex>
            <VStack>
              <Flex alignItems="center" pb="1rem">
                <Image
                  width={0}
                  height={0}
                  src="/dot-point.svg"
                  alt="Dot point"
                  style={{ width: "1rem", height: "auto" }}
                />
                <Text ml="1rem" fontWeight="bold" fontSize="1.25rem">
                  Only serious investors will contact you
                </Text>
              </Flex>
              <Flex alignItems="center" pb="1rem">
                <Image
                  width={0}
                  height={0}
                  src="/dot-point.svg"
                  alt="Dot point"
                  style={{ width: "1rem", height: "auto" }}
                />
                <Text ml="1rem" fontWeight="bold" fontSize="1.25rem">
                  Investors will already have knowledge of the project
                </Text>
              </Flex>
              <Flex alignItems="center" pb="1rem">
                <Image
                  width={0}
                  height={0}
                  src="/dot-point.svg"
                  alt="Dot point"
                  style={{ width: "1rem", height: "auto" }}
                />
                <Text ml="1rem" fontWeight="bold" fontSize="1.25rem">
                  Close the deal outside of the platform, however you’d like
                </Text>
              </Flex>
            </VStack>
          </Box>
        </Flex>
      </Box>
      <Footer background="#CCE2FF" />
    </Box>
  );
}
