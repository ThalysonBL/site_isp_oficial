import React from "react";

import {
  Flex,
  UnorderedList,
  HStack,
  ListItem,
  IconButton,
  Icon,
  useBreakpointValue,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  useDisclosure,
} from "@chakra-ui/react";

import Image from "next/image";
import { RiMenuLine } from "react-icons/ri";
import Logo from "../../../public/bitt.svg";

import { Link } from "@chakra-ui/react";
import styles from "./styles.module.scss";

import { Sidebar } from "./Sidebar";

export function Nav() {
  const isWideOcultar = useBreakpointValue({
    base: false,
    lg: true,
  });
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  const isWideVersion = useBreakpointValue({
    base: false, //quando estiver em base (mobile) ocultará
    lg: true, // quando estiver em lg ficará visivel
  });
  const isWideDrawer = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Flex
      as="header"
      display="flex"
      flexDirection="row"
      width="100%"
      height="98px"
      justify="space-between"
      alignItems="center"
      bg="#0E0E0E"
      className={styles.container}
    >
      <Image src={Logo} alt="Bitt" width="90px" height="45px" />

      {isWideOcultar && (
        <UnorderedList
          as="ul"
          width="100%"
          display="flex"
          alignItems="center"
          justifyContent="space-around"
          max-width="1440px"
        >
          <HStack
            spacing={["1", "1", "32px"]}
            // mr="1rem"
          >
            <ListItem
              as="li"
              display="flex"
              lineHeight="150%"
              fontWeight="400"
              color="white"
            >
              <Link
                href="./index.html"
                fontWeight="400"
                lineHeight="24px"
                letterSpacing="0em"
                textAlign="left"
                fontSize={["sm", "xs", "xs", "0.9rem", "1rem"]}
                height="100%"
                display="flex"
                alignItems="center"
                style={{ textDecoration: "none" }}
              >
                Home
              </Link>
            </ListItem>
            <ListItem
              as="li"
              display="flex"
              lineHeight="150%"
              fontWeight="400"
              color="white"
            >
              <Link
                href="./sobreNos.html"
                fontWeight="400"
                lineHeight="24px"
                letterSpacing="0em"
                textAlign="left"
                fontSize={["sm", "xs", "xs", "0.9rem", "1rem"]}
                height="100%"
                display="flex"
                alignItems="center"
                style={{ textDecoration: "none" }}
              >
                Sobre Nós
              </Link>
            </ListItem>
            <ListItem
              as="li"
              display="flex"
              lineHeight="150%"
              fontWeight="400"
              color="white"
            >
              <Link
                href="/index"
                fontWeight="400"
                lineHeight="24px"
                letterSpacing="0em"
                textAlign="left"
                fontSize={["sm", "xs", "xs", "0.9rem", "1rem"]}
                height="100%"
                display="flex"
                alignItems="center"
                style={{ textDecoration: "none" }}
              >
                SVA
              </Link>
            </ListItem>

            <ListItem
              as="li"
              display="flex"
              lineHeight="150%"
              fontWeight="400"
              color="white"
            >
              <Link
                href=""
                fontWeight="400"
                lineHeight="24px"
                letterSpacing="0em"
                textAlign="left"
                fontSize={["sm", "xs", "xs", "0.9rem", "1rem"]}
                height="100%"
                display="flex"
                alignItems="center"
                style={{ textDecoration: "none" }}
              >
                Blog
              </Link>
            </ListItem>
            <ListItem
              as="li"
              display="flex"
              lineHeight="150%"
              fontWeight="400"
              color="white"
            >
              <Link
                href="https://api.whatsapp.com/send/?phone=5533984165250&text&type=phone_number&app_absent=0"
                fontWeight="400"
                lineHeight="24px"
                letterSpacing="0em"
                textAlign="left"
                fontSize={["sm", "xs", "xs", "0.9rem", "1rem"]}
                height="100%"
                display="flex"
                alignItems="center"
                style={{ textDecoration: "none" }}
              >
                Fale Conosco
              </Link>
            </ListItem>
            <ListItem as="li" display="flex" lineHeight="150%" fontWeight="400">
              <Link
                href="https://ev.braip.com/checkout/plardw8w/cheyj9rv"
                fontWeight="600"
                lineHeight="24px"
                letterSpacing="0em"
                textAlign="center"
                fontSize={["sm", "xs", "xs", "0.9rem", "1rem"]}
                height="100%"
                display="flex"
                alignItems="center"
                color="#0E0E0E"
                style={{ textDecoration: "none" }}
                className={styles.assineAgora}
              >
                Assine Agora
              </Link>
            </ListItem>
          </HStack>
          <ListItem
            ml="40px"
            as="li"
            display="flex"
            lineHeight="150%"
            fontWeight="500"
          >
            <Link
              href="https://web.bittrainers.com.br/landing-web"
              lineHeight="24px"
              letterSpacing="0em"
              textAlign="left"
              fontSize="1rem"
              height="100%"
              display="flex"
              alignItems="center"
              p="8px 0"
              style={{ textDecoration: "none", color: "#FFB700" }}
              className={styles.estiloLink}
            >
              Acessar minha conta
            </Link>
          </ListItem>
        </UnorderedList>
      )}
      {!isWideDrawer && (
        <>
          <IconButton
            aria-label="Open Navigation"
            icon={<Icon as={RiMenuLine} color="white" />}
            fontSize="27"
            variant="unstyled"
            onClick={onOpen}
          ></IconButton>
          <Drawer //é um elemento
            isOpen={isOpen}
            placement="right" //lado que estará o elemento
            onClose={onClose} //ao fechar executará a função retoranndo nada
          >
            <DrawerOverlay
            //componente que deixará a tela mais escura
            >
              <DrawerContent //onde ficará o conteúdo
                bg="#202020"
              >
                <DrawerCloseButton color="white" />

                <DrawerHeader></DrawerHeader>
                <DrawerBody>
                  <Sidebar />
                </DrawerBody>
              </DrawerContent>
            </DrawerOverlay>
          </Drawer>
        </>
      )}
    </Flex>
  );
}
