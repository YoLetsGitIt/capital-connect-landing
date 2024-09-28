"use client";

import { Box, Flex, Text, Button, Image } from "@kuma-ui/core";
import { Navbar } from "../components/Navbar";
import Footer from "../components/Footer";

export default function Investors() {
  return (
    <Box>
      <Navbar background="#CCE2FF" dark={false} />
      <Flex
        pt={["14vh", 0]}
        minHeight="100vh"
        alignItems="center"
        px="10vw"
        bg="#CCE2FF"
        flexDirection={["column", "row"]}
        justify="center"
      >
        <Flex flex={1} flexDirection="column" justify="center" pb={["10vh", 0]}>
          <Text fontWeight="bold" pb="1rem">
            Analyse, contact, invest
          </Text>
          <Text fontWeight="bold" fontSize="2.5rem" pb="1.5rem">
            Gain access to immediately investable projects
          </Text>
          <Text>View key project metrics to help analyse the project.</Text>
          <Text pb="2rem">
            Contact project owners instantly to close the deal.
          </Text>
          <Box>
            <a href="https://app.capitalconnect.site">
              <Button
                bg="#002C66"
                color="#FFFFFF"
                py="1rem"
                px="1.5rem"
                borderRadius="1rem"
                fontWeight="bold"
                fontSize="1rem"
                borderWidth={0}
                borderColor="#002C66"
                mb={["2rem", 0]}
              >
                <Flex>
                  <Text>View projects</Text>
                  <Image
                    width={0}
                    height={0}
                    src="/pink-arrow.svg"
                    alt="Pink right arrow"
                    style={{
                      marginLeft: "0.5rem",
                      width: "1rem",
                      height: "auto",
                    }}
                  />
                </Flex>
              </Button>
            </a>
          </Box>
        </Flex>
        <Box flex={1} display={["none", "flex"]}>
          <Image
            width={0}
            height={0}
            src="/investors-project-view.svg"
            alt="Project upload form"
            style={{ width: "80%", height: "auto" }}
          />
        </Box>
      </Flex>
      <Footer />
    </Box>
  );
}
