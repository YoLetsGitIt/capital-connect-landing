"use client";

import { Box, Flex, Text, Button } from "@kuma-ui/core";
import Link from "@/node_modules/next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

const Navbar = ({
  background,
  dark,
}: {
  background: string;
  dark: boolean;
}) => {
  const [show, setShow] = useState(true);
  const [atTop, setAtTop] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [pricingHover, setPricingHover] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [mobilePricingExpanded, setMobilePricingExpanded] = useState(false);

  const controlNavbar = () => {
    if (window.scrollY > lastScrollY) {
      // if scroll down hide the navbar
      setShow(false);
    } else {
      // if scroll up show the navbar
      setShow(true);
    }

    if (window.scrollY <= 0) {
      setAtTop(true);
    } else {
      setAtTop(false);
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

  const handleMouseOver = () => {
    setPricingHover(true);
  };

  const handleMouseOut = () => {
    setPricingHover(false);
  };

  return (
    <Box zIndex={50} position="fixed">
      <Flex
        flexDirection="row"
        top={show ? 0 : "-13vh"}
        bg={pricingHover ? "#FFFFFF" : atTop ? background : "#FFFFFF"}
        pt={[0, atTop ? "1rem" : 0]}
        height="12vh"
        width="100vw"
        px="5vw"
        transitionTimingFunction="ease-in"
        transition="0.3s"
        alignItems="center"
        boxShadow={atTop ? "0" : "0px 2px 2px #00000040"}
      >
        <Link href="/" style={{ textDecoration: "none", color: "#000000" }}>
          <Flex alignItems="center" flexDirection="row">
            <Image
              width={0}
              height={0}
              priority
              src={
                pricingHover
                  ? "logo.svg"
                  : atTop
                  ? dark
                    ? "/logo-dark.svg"
                    : "/logo.svg"
                  : "/logo.svg"
              }
              alt="Logo"
              style={{ width: "1.5rem", height: "auto", marginRight: "0.5rem" }}
            />
            <Text
              fontSize="1.25rem"
              fontWeight="bold"
              mr="2rem"
              color={
                pricingHover
                  ? "#000000"
                  : atTop
                  ? dark
                    ? "#FFFFFF"
                    : "#000000"
                  : "#000000"
              }
            >
              Capital Connect
            </Text>
          </Flex>
        </Link>
        <Box display={["none", "block"]}>
          <Link href="/developers" style={{ textDecoration: "none" }}>
            <Text
              pl="2rem"
              fontWeight="bold"
              color={
                pricingHover
                  ? "grey"
                  : atTop
                  ? dark
                    ? "lightgrey"
                    : "grey"
                  : "grey"
              }
            >
              Developers
            </Text>
          </Link>
        </Box>
        <Box display={["none", "block"]}>
          <Link href="/investors" style={{ textDecoration: "none" }}>
            <Text
              pl="2rem"
              fontWeight="bold"
              color={
                pricingHover
                  ? "grey"
                  : atTop
                  ? dark
                    ? "lightgrey"
                    : "grey"
                  : "grey"
              }
            >
              Investors
            </Text>
          </Link>
        </Box>
        <Flex
          display={["none", "flex"]}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
          height="100%"
          alignItems="center"
        >
          <Text
            pl="2rem"
            pr="0.5rem"
            fontWeight="bold"
            color={
              pricingHover
                ? "grey"
                : atTop
                ? dark
                  ? "lightgrey"
                  : "grey"
                : "grey"
            }
          >
            Pricing
          </Text>
          <Image
            width={0}
            height={0}
            priority
            src={
              pricingHover
                ? "arrow-down.svg"
                : atTop
                ? dark
                  ? "/arrow-down-light.svg"
                  : "/arrow-down.svg"
                : "/arrow-down.svg"
            }
            alt="Logo"
            style={{
              width: "0.5rem",
              height: "auto",
              transition: "all 0.5s",
              transform: pricingHover ? "rotate(-180deg)" : "rotate(0deg)",
            }}
          />
        </Flex>
        <Box flex={1} />
        <a
          href="https://app.capitalconnect.site"
          style={{ textDecoration: "none" }}
        >
          <Text
            display={["none", "block"]}
            mr="2rem"
            color={
              pricingHover
                ? "grey"
                : atTop
                ? dark
                  ? "lightgrey"
                  : "grey"
                : "grey"
            }
            fontWeight="bold"
          >
            Login
          </Text>
        </a>
        <a
          href="https://app.capitalconnect.site/signup"
          style={{ textDecoration: "none" }}
        >
          <Box
            display={["none", "block"]}
            border={
              pricingHover
                ? "2px solid grey"
                : atTop
                ? dark
                  ? "2px solid lightgrey"
                  : "2px solid grey"
                : "2px solid grey"
            }
            borderRadius="0.5rem"
            py="0.5rem"
            px="1rem"
          >
            <Text
              color={
                pricingHover
                  ? "grey"
                  : atTop
                  ? dark
                    ? "lightgrey"
                    : "grey"
                  : "grey"
              }
              fontWeight="bold"
            >
              Join now
            </Text>
          </Box>
        </a>
        <Box
          onClick={() => {
            setMobilePricingExpanded(false);
            setExpanded(!expanded);
            if (window.scrollY === 0) {
              if (!expanded) {
                setAtTop(false);
              } else {
                setAtTop(true);
              }
            }
          }}
          display={["block", "none"]}
        >
          <Image
            width={0}
            height={0}
            priority
            src={
              expanded ? "/cross.svg" : dark ? "/menu-dark.svg" : "/menu.svg"
            }
            alt="Logo"
            style={{
              width: expanded ? "1rem" : "1.5rem",
              height: "auto",
            }}
          />
        </Box>
      </Flex>
      <Box
        bg="#FFFFFF"
        boxShadow="0px 2px 2px #00000040"
        style={{
          transition: "all .3s",
          display: expanded ? "block" : "none",
          opacity: expanded ? 1 : 0,
        }}
      >
        <Box
          width="100%"
          style={{
            borderStyle: "dashed",
            borderWidth: 1,
            borderRadius: 1,
            borderColor: "lightgrey",
          }}
        />
        <Box px="5vw" pt="1.5rem">
          <Link
            href="/developers"
            style={{ textDecoration: "none", color: "#000000" }}
          >
            <Text
              fontSize="1.25rem"
              fontWeight="bold"
              pb="1.5rem"
              color="#808080"
            >
              Developers
            </Text>
          </Link>
          <Link
            href="/investors"
            style={{
              textDecoration: "none",
              color: "#000000",
            }}
          >
            <Text
              fontSize="1.25rem"
              fontWeight="bold"
              pb="1.5rem"
              color="#808080"
            >
              Investors
            </Text>
          </Link>
          <Box onClick={() => setMobilePricingExpanded(!mobilePricingExpanded)}>
            <Flex justify="space-between" alignItems="center" pb="1.5rem">
              <Text
                textAlign="center"
                fontSize="1.25rem"
                fontWeight="bold"
                color="#808080"
              >
                Pricing
              </Text>
              <Image
                width={0}
                height={0}
                priority
                src={"/arrow-down.svg"}
                alt="Logo"
                style={{
                  width: "1rem",
                  height: "1rem",
                  transition: "all 0.3s",
                  transform: mobilePricingExpanded
                    ? "rotate(-180deg)"
                    : "rotate(0deg)",
                }}
              />
            </Flex>
          </Box>
          <Box
            style={{
              transition: "all .3s",
              display: mobilePricingExpanded ? "block" : "none",
              opacity: mobilePricingExpanded ? 1 : 0,
            }}
          >
            <Flex gap="1rem" pb="1rem" flexDirection="column">
              <Box flex={1}>
                <Link
                  href="/pricing-developer"
                  style={{ textDecoration: "none", color: "#000000" }}
                >
                  <Box flex={1} bg="#E5F0FF" borderRadius="1rem" p="1.5rem">
                    <Flex alignItems="center" pb="0.5rem">
                      <Text fontWeight="bold" mr="0.5rem">
                        Developers
                      </Text>
                      <Image
                        width={0}
                        height={0}
                        priority
                        src={"/building.svg"}
                        alt="Logo"
                        style={{
                          width: "1rem",
                          height: "auto",
                        }}
                      />
                    </Flex>
                    <Text>
                      Expose your project to a group of active investors
                    </Text>
                  </Box>
                </Link>
              </Box>
              <Box flex={1}>
                <Link
                  href="/pricing"
                  style={{ textDecoration: "none", color: "#000000" }}
                >
                  <Box flex={1} bg="#E5F0FF" borderRadius="1rem" p="1.5rem">
                    <Flex alignItems="center" pb="0.5rem">
                      <Text fontWeight="bold" mr="0.5rem">
                        Investors
                      </Text>
                      <Image
                        width={0}
                        height={0}
                        priority
                        src={"/money.svg"}
                        alt="Logo"
                        style={{
                          width: "1rem",
                          height: "auto",
                        }}
                      />
                    </Flex>
                    <Text>
                      Find plans to help you find projects you want to invest in
                    </Text>
                  </Box>
                </Link>
              </Box>
            </Flex>
          </Box>
          <Box
            width="100%"
            style={{
              borderStyle: "dashed",
              borderWidth: 1,
              borderRadius: 1,
              borderColor: "lightgrey",
            }}
          />
          <Box py="1.5rem">
            <Text
              fontSize="1.25rem"
              fontWeight="bold"
              pb="1.5rem"
              color="#808080"
            >
              Login
            </Text>
            <Text
              fontSize="1.25rem"
              fontWeight="bold"
              pb="1rem"
              color="#808080"
            >
              Join now
            </Text>
          </Box>
        </Box>
      </Box>
      <Box
        pt={atTop ? "1rem" : 0}
        px="5vw"
        boxShadow="0px 2px 2px #00000040"
        bg="#FFFFFF"
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        style={{
          transition: "all .3s",
          visibility: pricingHover ? "visible" : "hidden",
          opacity: pricingHover ? 1 : 0,
        }}
      >
        <Box
          width="100%"
          style={{
            borderStyle: "dashed",
            borderWidth: 1,
            borderRadius: 1,
            borderColor: "lightgrey",
          }}
        />
        <Flex gap="2rem" py="2rem">
          <Box flex={1}>
            <Link
              href="/pricing-developer"
              style={{ textDecoration: "none", color: "#000000" }}
            >
              <Box flex={1} bg="#E5F0FF" borderRadius="1rem" p="3rem">
                <Image
                  width={0}
                  height={0}
                  priority
                  src={"/building.svg"}
                  alt="Logo"
                  style={{
                    width: "2.5rem",
                    height: "auto",
                  }}
                />
                <Text fontWeight="bold" pb="0.5rem" pt="1rem">
                  Developers
                </Text>
                <Text>Expose your project to a group of active investors</Text>
              </Box>
            </Link>
          </Box>
          <Box flex={1}>
            <Link
              href="/pricing"
              style={{ textDecoration: "none", color: "#000000" }}
            >
              <Box flex={1} bg="#E5F0FF" borderRadius="1rem" p="3rem">
                <Image
                  width={0}
                  height={0}
                  priority
                  src={"/money.svg"}
                  alt="Logo"
                  style={{
                    width: "2.5rem",
                    height: "auto",
                  }}
                />
                <Text fontWeight="bold" pb="0.5rem" pt="1rem">
                  Investors
                </Text>
                <Text>
                  Find plans to help you find projects you want to invest in
                </Text>
              </Box>
            </Link>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default Navbar;
