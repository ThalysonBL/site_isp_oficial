import {
  Flex,
  UnorderedList,
  VStack,
  ListItem,
  IconButton,
  Link,
} from "@chakra-ui/react";

import styles from "../styles.module.scss";

export function Sidebar() {
  return (
    <UnorderedList
      as="ul"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="space-between"
      py="8"
    >
      <VStack spacing="8">
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
            fontSize="1rem"
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
            fontSize="1rem"
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
            fontSize="1rem"
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
            fontSize="1rem"
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
            fontSize="1rem"
            height="100%"
            display="flex"
            alignItems="center"
            style={{ textDecoration: "none" }}
          >
            Fale Conosco
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
            href="https://ev.braip.com/checkout/plardw8w/cheyj9rv"
            fontWeight="400"
            lineHeight="24px"
            letterSpacing="0em"
            fontSize="1rem"
            height="100%"
            display="flex"
            alignItems="center"
            color="white"
            style={{ textDecoration: "none" }}
          >
            Assine Agora
          </Link>
        </ListItem>
        <ListItem as="li" display="flex" lineHeight="150%" fontWeight="500">
          <Link
            href="https://web.bittrainers.com.br/landing-web"
            lineHeight="24px"
            letterSpacing="0em"
            fontSize="1rem"
            height="100%"
            display="flex"
            alignItems="center"
            style={{ textDecoration: "none", color: "#FFB700" }}
          >
            Acessar minha conta
          </Link>
        </ListItem>
      </VStack>
    </UnorderedList>
  );
}
