import React from "react";
import Logo from "../../../public/bitt.svg";
import GooglePlay from "../../../public/googlePlay.svg";
import IconApple from "../../../public/iconApple.svg";
import Insta from "../../../public/insta.svg";
import Face from "../../../public/face.svg";
import Linkedlin from "../../../public/linkedlin.svg";
import Youtube from "../../../public/youtube.svg";
import Hearth from "../../../public/hearth.svg";

import {
  Flex,
  Text,
  Box,
  Link,
  UnorderedList,
  ListItem,
  HStack,
  useBreakpointValue,
} from "@chakra-ui/react";
import Image from "next/image";

import styles from "./styles.module.scss";

export  function Footer() {
  const isWideOcultarFooter = useBreakpointValue({
    base: true,
    md: true,
    lg: false,
  });
  return (
    <Flex bg="black" width="100%" display="flex" flexDirection="column">
      <Box
        display="flex"
        margin={[
          "50px auto 32px auto",
          "50px auto 32px auto",
          "50px auto 32px auto",
          "80px 112px 0 112px",
        ]}
      >
        <Image src={Logo} alt="Bitt" />
      </Box>

      <Flex
        padding={[
          "0 20px 0 20px",
          "0 20px 0 20px",
          "0 20px 0 20px",
          "30px 112px 42px 112px",
        ]}
        display="flex"
        width="100%"
        flexDirection={["column", "column", "column", "row"]}
        justifyContent={["center", "center", "space-between"]}
        alignItems={["center", "center", "center", "flex-start"]}
      >
        <Flex
          width="308px"
          left="112px"
          top="84px"
          display="flex"
          flexDirection="column"
          alignItems="flex-start"
        >
          <Text
            fontSize={["14px", "14px", "14px", "16px"]}
            fontWeight=" 400"
            lineHeight={["21px", "21px", "21px", "28px"]}
            letterSpacing={["-0.5%", "0.5%", "0.5%", "0em"]}
            textAlign={["center", "center", "center", "left"]}
            color="#FFFFFF"
          >
            Antes de inicar qualquer atividade fisica consulte um medico. Tenha
            sempre um profissional responsavel para acompanhar as suas
            atividades.
          </Text>
        </Flex>
        {!isWideOcultarFooter ? (
          <Flex>
            <UnorderedList
              as="ul"
              borderRight="3px solid #202020"
              paddingRight="32px"
              styleType="none"
              color="#FFFFFF"
            >
              <ListItem as="li">
                <Link href="/" style={{ textDecoration: "none" }}>
                  Home
                </Link>
              </ListItem>
              <ListItem as="li">
                <Link href="./sobreNos.html" style={{ textDecoration: "none" }}>
                  Sobre Nós
                </Link>
              </ListItem>

            </UnorderedList>
            <UnorderedList
              as="ul"
              display="flex"
              flexDirection="column"
              alignContent="flex-start"
              ml="32px"
              borderRight="3px solid #202020"
              paddingRight="32px"
              styleType="none"
              color="#FFFFFF"
            >
              <ListItem as="li">
                <Link href="" style={{ textDecoration: "none" }}>
                  Blog
                </Link>
              </ListItem>
              <ListItem as="li">
                <Link href="https://api.whatsapp.com/send/?phone=5533984165250&text&type=phone_number&app_absent=0" style={{ textDecoration: "none" }}>
                  Fale conosco
                </Link>
              </ListItem>
              <ListItem as="li">
                <Link href="/termosAceitacao" style={{ textDecoration: "none" }}>
                  Termos de Aceitação
                </Link>
              </ListItem>
            </UnorderedList>
          </Flex>
        ) : (
          <Flex flexDirection="column">
            <Flex
              display="flex"
              flexDirection="row"
              padding="18px 40px 33px 40px"
              borderBottom="2px solid #202020"
            >
              <HStack spacing="37.5px">
                <Link href="https://www.youtube.com/channel/UCjVPcelY3W7WZ8fRS0BH-bA">
                  <Image src={Youtube} alt="YouTube" />
                </Link>
                <Link href="https://www.linkedin.com/company/bit-tecnologia/mycompany/">
                  <Image src={Linkedlin} alt="LInkedlin" />
                </Link>
                <Link href="https://www.facebook.com/profile.php?id=100084701539952">
                  <Image src={Face} alt="Facebook" />
                </Link>
                <Link href="https://www.instagram.com/bitt_app/">
                  <Image src={Insta} alt="Instagram" />
                </Link>
              </HStack>
              <Flex></Flex>
            </Flex>
            <Flex justifyContent="space-between" mt="40px">
              <UnorderedList as="ul" styleType="none" color="#FFFFFF">
                <ListItem as="li">
                  <Link href="" style={{ textDecoration: "none" }}>
                    Home
                  </Link>
                </ListItem>
                <ListItem as="li">
                  <Link href="" style={{ textDecoration: "none" }}>
                    Sobre Nós
                  </Link>
                </ListItem>
                <ListItem as="li">
                  <Link href="" style={{ textDecoration: "none" }}>
                    SVA
                  </Link>
                </ListItem>
              </UnorderedList>
              <UnorderedList
                as="ul"
                display="flex"
                flexDirection="column"
                alignContent="flex-start"
                styleType="none"
                color="#FFFFFF"
              >
                <ListItem as="li">
                  <Link href="" style={{ textDecoration: "none" }}>
                    Blog
                  </Link>
                </ListItem>
                <ListItem as="li">
                  <Link href="https://api.whatsapp.com/send/?phone=5533984165250&text&type=phone_number&app_absent=0" style={{ textDecoration: "none" }}>
                    Fale conosco
                  </Link>
                </ListItem>
                <ListItem as="li">
                  <Link href="" style={{ textDecoration: "none" }}>
                    Termos de Aceitação
                  </Link>
                </ListItem>
              </UnorderedList>
            </Flex>
          </Flex>
        )}
        <Flex
          display="flex"
          flexDirection="column"
          align="center"
          className={styles.footerRedesSociais}
          mt={["37px", "37px ", "37px", 0]}
          padding={[
            "16px 49px  16px 49px",
            "16px 49px  16px 49px",
            "16px 49px  16px 49px",
            "0 0",
          ]}
          bg={[
            "rgba(83, 83, 83, 0.23 )",
            "rgba(83, 83, 83, 0.23 )",
            "rgba(83, 83, 83, 0.23 )",
            "none",
          ]}
          //          opacity={["0.23", "0.23", "0.23", 0]}
          borderRadius={["6px", "6px", "6px", "0"]}
        >
          <Text
            color="#FFFFFF"
            fontStyle="normal"
            fontWeight="600"
            fontSize="16px"
            lineHeight="150%"
            mb="14px"
            /* identical to box height, or 24px */
          >
            Baixe nosso app
          </Text>
          <Flex display="flex" flexDirection="row">
            <Link
              href="https://play.google.com/store/apps/details?id=com.bittrainers"
              mr="20px"
              bg="#FFB700"
              borderRadius="3px"
              padding="10px 10px 0px 13px"
              alignItems="center"
            >
              <Box>
                <Image src={GooglePlay} alt="Google Play" />
              </Box>
            </Link>
            <Link
              href="https://apps.apple.com/br/app/bittrainers/id1389395944"
              bg="#FFB700"
              borderRadius="3px"
              padding="10px 11px 2px 12px"
              alignItems="center"
            >
              <Box>
                <Image src={IconApple} alt="Apple Store" />
              </Box>
            </Link>
          </Flex>
          {!isWideOcultarFooter && (
            <Flex display="flex" flexDirection="row" marginTop="28px">
              <HStack spacing="37.5px">
                <Link href="https://www.youtube.com/channel/UCjVPcelY3W7WZ8fRS0BH-bA">
                  <Image src={Youtube} alt="YouTube" />
                </Link>
                <Link href="https://www.linkedin.com/company/bit-tecnologia/mycompany/">
                  <Image src={Linkedlin} alt="LInkedlin" />
                </Link>
                <Link href="https://www.facebook.com/profile.php?id=100084701539952">
                  <Image src={Face} alt="Facebook" />
                </Link>
                <Link href="https://www.instagram.com/bitt_app/">
                  <Image src={Insta} alt="Instagram" />
                </Link>
              </HStack>
            </Flex>
          )}
        </Flex>
      </Flex>
      <Flex
        display="flex"
        flexDirection={[
          "column-reverse",
          "column-reverse",
          "column-reverse",
          "row",
        ]}
        justifyContent="space-between"
        alignItems={["center", "center", "center", "left"]}
        margin={[
          "75px 20px 0 20px",
          "75px 20px 0 20px",
          "75px 20px 0 20px",
          "auto 112px",
        ]}
        padding="25px 0"
        fontWeight="400"
        fontSize="16px"
        lineHeight="175%"
        color="#B7B7B7"
        /*Borda*/
        borderTop="2px solid #202020"
        borderBottom="4px solid #FFB700"
      >
        <Text mt={["32px", "32px", "32px", "0"]}>
          &copy; 2022 - Todos os direitos reservados
        </Text>
        <Text
          fontStyle="normal"
          fontWeight="400"
          fontSize="16px"
          lineHeight="175%"
          color="#535353"
          display="flex"
          alignItems="center"
        >
          Desenvolvido por Bit Tecnologia&nbsp;
          <Image src={Hearth} alt="Coração" />
        </Text>
      </Flex>
    </Flex>
  );
}
