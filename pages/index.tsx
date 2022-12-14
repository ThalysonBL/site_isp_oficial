import type { NextPage } from "next";
import React, { useState, useRef } from "react";

import Image from "next/image";
import styles from "../styles/Home.module.scss";
import {
  Flex,
  Text,
  Box,
  Link,
  useBreakpointValue,
  HStack,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  Checkbox,
} from "@chakra-ui/react";
import ImgSumicityColorida from "../public/ImgSumicityColorida.png";
import ImgWebbyColorida from "../public/ImgWebbyColorida.png";
import ImgBlinkColorida from "../public/ImgBlinkColorida.png";
import ImgGiganetColorida from "../public/ImgGiganetColorida.png";

import ImgDevice from "../public/ImgDevices.png";
import GooglePlay from "../public/googlePlay.svg";
import IconApple from "../public/iconApple.svg";
import IconBrowser from "../public/IconBrowser.svg";
import IconEscudo from "../public/IconShield.svg";
import ImgNotebook from "../public/ImgNotebook.png";

import ImgGrafico from "../public/ImgGrafico.png";
import ImgSetaTop from "../public/ImgSetaTop.svg";
import ImgSetaDown from "../public/ImgSetaDown.svg";

import { BiCheck } from "react-icons/bi";
import { AiOutlineArrowDown, AiOutlineArrowRight } from "react-icons/ai";

import IconI from "../public/IconI.svg";

import { BaixeApp } from "../src/components/BaixeApp/index";
import { Accordion } from "../src/components/Accordion/index";
import { SlideErp } from "./../src/components/SlideErp/index";
import { Form } from "./../src/components/Form/index";
import { SlideOne } from "../src/components/SlideOne";
import { ModalErps } from "../src/components/ModalErps";

const Home: NextPage = () => {
  const formulario = useRef(null);

  const scrollToSection = (elementRef: any) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  const state = {
    url: null,
    pip: false,
    playing: true,
    controls: false,
    light: false,
    volume: 0.8,
    muted: false,
    played: 0,
    loaded: 0,
    duration: 0,
    playbackRate: 1.0,
    loop: false,
  };

  const isWideOcultar = useBreakpointValue({
    base: true,
    md: true,
    lg: false,
    xl: false,
  });
  const sectionOne = useBreakpointValue({
    base: true,
    md: false,
    lg: false,
    xl: false,
  });
  const { isOpen, onOpen, onClose } = useDisclosure();
  const OverlayOne = () => (
    <ModalOverlay backdropFilter="blur(5px) hue-rotate(10deg)" />
  );

  const [overlay, setOverlay] = React.useState(<OverlayOne />);

  const hideBr = isWideOcultar ? "" : <br />;

  const lista = [
    {
      id: 1,
      description: "+ de 200 parceiros",
    },
    {
      id: 2,
      description: "Reduza 18% de cancelamento",
    },
    {
      id: 3,
      description: "+ de 3 milh??es de acessos negociados com ISPS???s",
    },
    {
      id: 4,
      description: "Integra????o com todos os ERP???s do mercado",
    },
  ];
  const descCagaTribut =
    "O servi??o oferecido pelo App Bit Trainers n??o consta como presta????o de servi??o, ou seja, voc?? economiza na arrecada????o de impostos e ainda pode investir em outras ??reas de crescimento do seu provedor. ";

  const economiaSetenta = [{}];

  return (
    <Flex as="article" flexDirection="column" bg="#0E0E0E">
      <Flex
        className={styles.sectionOne} //Section One
      >
        <Box pr={["0", "0", "0", "5rem"]}>
          <Text className={styles.headingSectionOne} px="auto">
            O maior streaming de sa??de
            {!hideBr} e bem-estar do Brasil {!hideBr} servi??o do seu provedor
          </Text>

          <Flex
            mt="20px"
            display={["none", "none", "none", "flex", "flex", "flex"]}
          >
            {lista.map((item) => {
              return (
                <Box
                  flexDirection="column"
                  justifyContent="center"
                  alignItems="flex-start"
                  key="id"
                >
                  <Image src={IconI} alt="Icon I" />
                  <Text className={styles.estiloTextIcon}>
                    {item.description}
                  </Text>
                </Box>
              );
            })}
          </Flex>
          <Flex justifyContent="space-between" mt="28px">
            <Text
              display={["none", "none", "none", "Flex", "flex", "flex"]}
              className={styles.estiloLink}
              style={{
                textDecoration: "none",
              }}
              onClick={() => scrollToSection(formulario)}
            >
              Fale com o especialista
            </Text>

            <Box
              pr="40px"
              display={["none", "none", "none", "Flex", "flex", "flex"]}
            >
              <AiOutlineArrowDown
                size="1.8rem"
                color="#FFFFFF"
                className={styles.estiloSeta}
              />
            </Box>
          </Flex>
        </Box>
        <Flex className={styles.containerVideo}>
          <iframe
            src="https://player.vimeo.com/video/757298537?h=11c0fa14aa"
            allow="autoplay; fullscreen; picture-in-picture"
            width="100%"
            height="100%"
          ></iframe>
       
        <Flex>
          <Link
            mt="14px"
            display={["bl", "Flex", "Flex", "none", "none", "none"]}
            className={styles.estiloLink}
            style={{
              textDecoration: "none",
            }}
          >
            Fale com o especialista
          </Link>
        </Flex>
        <Flex
          flexDirection="column"
          display={["flex", "flex", "Flex", "none", "none", "none"]}
          justifyContent="center"
          alignItems="center"
        >
          <SlideOne />

          <Flex justifyContent="center" alignItems="center" width="200px">
            <AiOutlineArrowDown
              size="1.8rem"
              color="#FFFFFF"
              className={styles.estiloSeta}
            />
          </Flex>
        </Flex>
      </Flex>
      </Flex>
      <Flex
        as="section"
        className={styles.sectionTwo} //Section Two
      >
        <Text className={styles.headingTwo}>
          Agregue valor aos seus usu??rios finais
        </Text>
        <Box>
          <Text className={styles.descriptionTwo}>
            Os provedores tradicionais est??o cada vez mais
            <span> incapazes de atender ??s necessidades do usu??rio.</span>
          </Text>
          <Text className={styles.descriptionTwo}>E n??o ?? para menos???</Text>
          <Text className={styles.descriptionTwo}>
            ?? medida que o tempo passa, h?? uma mudan??a cont??nua na forma como as
            pessoas consomem e avaliam seus servi??os.
          </Text>
          <Text className={styles.descriptionTwo}>
            Esque??a a ideia de que basta entregar o que se promete.
          </Text>
          <Text className={styles.descriptionTwo}>
            (afinal, isso ?? o m??nimo que se espera de uma empresa s??ria).
          </Text>
          <Text className={styles.descriptionTwo}>
            Quem busca criar uma base de clientes fi??is, satisfeitos e com maior
            longevidade,
            <span> deve se dedicar ??s entregas que v??o al??m do b??sico.</span>
          </Text>
          <Text className={styles.descriptionTwo}>
            E ?? isso o que voc?? recebe com o Bit Trainers, uma plataforma
            parceria projetada para
            <span>
              &nbsp;entregar o que h?? de melhor em sa??de e bem-estar para seus
              usu??rios.
            </span>
          </Text>
          <Flex mt={["20px"]} justifyContent="center">
            <Link
              className={styles.estiloLink}
              style={{
                textDecoration: "none",
              }}
              onClick={() => scrollToSection(formulario)}
            >
              Quero come??ar agora!
            </Link>
          </Flex>
        </Box>

        <Flex className={styles.containerSomosMais}>
          <Box className={styles.containerQuantidade}>
            <Text>Somos mais de</Text>
            <Text className={styles.numberQuantidade}>200</Text>
            <Text>PROVEDORES</Text>
          </Box>

          <Box className={styles.containerEmpresas}>
            <Text className={styles.empresasQueConfiam}>
              Empresas que confiam em n??s:
            </Text>
            <Flex>
              <HStack spacing="50px" display="flex" alignItems="center">
                <Box>
                  <Image
                    src={ImgSumicityColorida}
                    alt="Imagem provedor"
                    className={styles.image}
                  />
                </Box>
                <Box>
                  <Image
                    src={ImgGiganetColorida}
                    alt="Imagem provedor"
                    className={styles.image}
                  />
                </Box>
                <Box>
                  <Image
                    src={ImgBlinkColorida}
                    alt="Imagem provedor"
                    className={styles.image}
                  />
                </Box>
                <Box>
                  <Image
                    src={ImgWebbyColorida}
                    alt="Imagem provedor"
                    className={styles.image}
                  />
                </Box>
              </HStack>
            </Flex>
            <Box mt={["53px", "53px", "53px", "70px"]}>
              <ModalErps />
            </Box>
          </Box>
        </Flex>
      </Flex>
      <Flex
        as="section"
        //section three
        className={styles.containerSectionThree}
      >
        <Box>
          <Text className={styles.headingThree}>
            Ofere??a o que h?? de melhor em
            <span> benef??cios para os seus atuais e futuros clientes </span> e
            automaticamente:
          </Text>
          {isWideOcultar && (
            <Image src={ImgDevice} alt="Imagem de dispositivos eletr??nicos" />
          )}
          <Flex flexDirection="column">
            <Box>
              <Box className={styles.containerBeneficios}>
                <AiOutlineArrowRight
                  size="1.2rem"
                  style={{ marginTop: "4px", marginRight: "10px" }}
                />
                <Text className={styles.beneficiosText}>
                  <span>Aumente</span> a reten????o da sua base de clientes.
                </Text>
              </Box>
              <Box className={styles.containerBeneficios}>
                <AiOutlineArrowRight
                  size="1.2rem"
                  style={{ marginTop: "4px", marginRight: "10px" }}
                />
                <Text className={styles.beneficiosText}>
                  <span> Reduza</span> os esfor??os do time de vendas para fechar
                  novos contratos.
                </Text>
              </Box>
              <Box className={styles.containerBeneficios}>
                <AiOutlineArrowRight
                  size="1.2rem"
                  style={{ marginTop: "4px", marginRight: "10px" }}
                />
                <Text className={styles.beneficiosText}>
                  <span>Incentive</span> mudan??as positivas no estilo de vida
                  com recompensas na plataforma.
                </Text>
              </Box>
              <Box className={styles.containerBeneficios}>
                <AiOutlineArrowRight
                  size="1.2rem"
                  style={{ marginTop: "4px", marginRight: "10px" }}
                />
                <Text className={styles.beneficiosText}>
                  <span>Construa</span> uma cultura de provedor que entrega
                  muito al??m do que se espera.
                </Text>
              </Box>
            </Box>
            <Link
              className={styles.estiloLink}
              mt="48px"
              color="#FFB700"
              bg="#000000"
              maxWidth="384px"
              onClick={() => scrollToSection(formulario)}
              style={{
                textDecoration: "none",
              }}
              alignItems="center"
              mx={["auto", "auto", "auto", "0"]}
              padding="16px 29px"
            >
              <Text mx="auto">Fa??a um diagn??stico gr??tis</Text>
            </Link>
          </Flex>
        </Box>
        <Box>
          {!isWideOcultar && (
            <Image src={ImgDevice} alt="Imagem de dispositivos eletr??nicos" />
          )}
        </Box>
      </Flex>
      <Flex
        as="section"
        //section four
        flexDirection="column"
        className={styles.containerSectionFour}
      >
        <Text className={styles.headingBeneficios}>
          Uma parceria em que todos saem ganhando
        </Text>
        <Text className={styles.descBeneficios}>
          Confira as vantagens recebidas por todos que utilizam o Bit Trainers
        </Text>
        <Flex className={styles.containerCaixa}>
          <Flex className={styles.contentCaixa}>
            <Text className={styles.headingInBox}>
              Benef??cios para o provedor
            </Text>
            <Box className={styles.estiloBeneficios}>
              <Flex alignItems={["baseline", "baseline", "baseline", "center"]}>
                <Box className={styles.estiloIcon}>
                  <BiCheck />
                </Box>
                <Text>Fideliza????o de Clientes </Text>
              </Flex>
              <Flex alignItems={["baseline", "baseline", "baseline", "center"]}>
                <Box className={styles.estiloIcon}>
                  <BiCheck />
                </Box>
                <Text>Aumento da Competitividade </Text>
              </Flex>
              <Flex alignItems={["baseline", "baseline", "baseline", "center"]}>
                <Box className={styles.estiloIcon}>
                  <BiCheck />
                </Box>
                <Text>Redu????o da Inadimpl??ncia </Text>
              </Flex>
              <Flex alignItems={["baseline", "baseline", "baseline", "center"]}>
                <Box className={styles.estiloIcon}>
                  <BiCheck />
                </Box>
                <Text>Crescimento de Receita </Text>
              </Flex>
              <Flex alignItems={["baseline", "baseline", "baseline", "center"]}>
                <Box className={styles.estiloIcon}>
                  <BiCheck />
                </Box>
                <Text>Diversifica????o de Produtos </Text>
              </Flex>
              <Flex alignItems={["baseline", "baseline", "baseline", "center"]}>
                <Box className={styles.estiloIcon}>
                  <BiCheck />
                </Box>
                <Text>Atra????o de Novos Clientes </Text>
              </Flex>
              <Flex alignItems={["baseline", "baseline", "baseline", "center"]}>
                <Box className={styles.estiloIcon}>
                  <BiCheck />
                </Box>

                <Text>Diminui????o da Rotatividade </Text>
              </Flex>
              <Flex alignItems={["baseline", "baseline", "baseline", "center"]}>
                <Box className={styles.estiloIcon}>
                  <BiCheck />
                </Box>

                <Text>Fortalecimento da Marca </Text>
              </Flex>
              <Flex alignItems={["baseline", "baseline", "baseline", "center"]}>
                <Box className={styles.estiloIcon}>
                  <BiCheck />
                </Box>

                <Text>Benef??cio tribut??rio </Text>
              </Flex>
            </Box>
          </Flex>
          <Flex>
            <Flex className={styles.contentCaixa}>
              <Text className={styles.headingInBox} color="#FFB700">
                Benef??cios para o usu??rio
              </Text>
              <Box className={styles.estiloBeneficios}>
                <Flex
                  alignItems={["baseline", "baseline", "baseline", "center"]}
                >
                  <Box className={styles.estiloIcon}>
                    <BiCheck />
                  </Box>
                  <Text>Melhor Experi??ncia de Compra</Text>
                </Flex>

                <Flex
                  alignItems={["baseline", "baseline", "baseline", "center"]}
                >
                  <Box className={styles.estiloIcon}>
                    <BiCheck />
                  </Box>
                  <Text>Planos de treino de acordo com cada objetivo</Text>
                </Flex>
                <Flex
                  alignItems={["baseline", "baseline", "baseline", "center"]}
                >
                  <Box className={styles.estiloIcon}>
                    <BiCheck />
                  </Box>
                  <Text>
                    Demonstra????o de exerc??cios feitas por profissionais
                  </Text>
                </Flex>

                <Flex
                  alignItems={["baseline", "baseline", "baseline", "center"]}
                >
                  <Box className={styles.estiloIcon}>
                    <BiCheck />
                  </Box>
                  <Text>Dicas de nutri????o e receitas</Text>
                </Flex>
                <Flex
                  alignItems={["baseline", "baseline", "baseline", "center"]}
                >
                  <Box className={styles.estiloIcon}>
                    <BiCheck />
                  </Box>
                  <Text>
                    Programas de treinamento com refer??ncias no mercado
                  </Text>
                </Flex>
                <Flex
                  alignItems={["baseline", "baseline", "baseline", "center"]}
                >
                  <Box className={styles.estiloIcon}>
                    <BiCheck />
                  </Box>
                  <Text>Acesso pr??tico a Yoga e medita????o</Text>
                </Flex>
                <Flex
                  alignItems={["baseline", "baseline", "baseline", "center"]}
                >
                  <Box className={styles.estiloIcon}>
                    <BiCheck />
                  </Box>
                  <Text>Atualiza????o de aulas di??rias</Text>
                </Flex>
              </Box>
            </Flex>
          </Flex>
        </Flex>
        <Flex className={styles.contentComoFunciona}>
          <Text className={styles.vejaComoFunciona}>
            Veja como funciona na pr??tica:
          </Text>
          <Box>
            <Flex
              width="100%"
              justifyContent="center"
              alignItems="center"
              borderRadius="6px"
            >
              <iframe
                src="https://player.vimeo.com/video/757301023?h=06fd24c203"
                allow="autoplay; fullscreen; picture-in-picture"
                className={styles.containerVideo}
              ></iframe>
            </Flex>
            <Text className={styles.textAcessePlatf}>
              Acesse o App gratuitamente e confira <br />
              Dispon??vel nas plataformas:
            </Text>
            <Flex>
              <HStack
                spacing={["0", "0", "0", "21px"]}
                mt="80px"
                mx="auto"
                flexDirection={["column", "column", "column", "row"]}
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <Link
                  href="https://play.google.com/store/apps/details?id=com.bittrainers"
                  style={{
                    textDecoration: "none",
                  }}
                  className={styles.estiloImg}
                >
                  <Box className={styles.styleTransition}>
                    <Box>
                      <Image src={GooglePlay} alt="Google Play" />
                    </Box>
                    <Box
                      display="flex"
                      flexDirection="column"
                      ml={["10px", "15px", "15px", "20px"]}
                    >
                      <Text className={styles.textDisponivel}>
                        DISPON??VEL NO
                        {hideBr}
                      </Text>
                      <Text className={styles.textLoja}>Google Play</Text>
                    </Box>
                  </Box>
                </Link>
                <Link
                  href="https://play.google.com/store/apps/details?id=com.bittrainers"
                  style={{
                    textDecoration: "none",
                  }}
                  className={styles.estiloImg}
                >
                  <Box className={styles.styleTransition}>
                    <Box>
                      <Image src={IconApple} alt="Google Play" />
                    </Box>
                    <Box
                      display="flex"
                      flexDirection="column"
                      ml={["10px", "15px", "15px", "20px"]}
                    >
                      <Text className={styles.textDisponivel}>
                        DISPON??VEL NO
                        {hideBr}
                      </Text>
                      <Text className={styles.textLoja}>App Store</Text>
                    </Box>
                  </Box>
                </Link>
                <Link
                  href="https://play.google.com/store/apps/details?id=com.bittrainers"
                  style={{
                    textDecoration: "none",
                  }}
                  className={styles.estiloImg}
                >
                  <Box className={styles.styleTransition}>
                    <Box>
                      <Image src={IconBrowser} alt="??cone browser" />
                    </Box>
                    <Box
                      display="flex"
                      flexDirection="column"
                      ml={["10px", "15px", "15px", "20px"]}
                    >
                      <Text className={styles.textDisponivel}>
                        DISPON??VEL NO
                        {hideBr}
                      </Text>
                      <Text className={styles.textLoja}>Plataforma Web</Text>
                    </Box>
                  </Box>
                </Link>
              </HStack>
            </Flex>
          </Box>
          <Flex mx="auto" alignItems="center" mt="64px">
            <Image src={IconEscudo} alt="Imagem de um escudo" />
            <Text
              fontWeight="400"
              lineHeight="20px"
              letterSpacing="0em"
              ml="13px"
              pt="5px"
            >
              Apaixonados por {isWideOcultar && <br />} transformar vidas
            </Text>
          </Flex>
        </Flex>
      </Flex>
      <Flex
        as="section" //section five
        className={styles.containerSectionFive}
        justifyContent="center"
      >
        <Box width={["90%", "90%", "90%", "40%"]} mr={["0", "0", "0", "72px"]}>
          <Text className={styles.reduzaCargaTitle}>
            Reduza a carga tribut??ria do seu provedor
          </Text>
          <Text
            display={["none", "none", "none", "flex"]}
            className={styles.reduzaDescription}
          >
            {descCagaTribut}
          </Text>
          <Flex justifyContent={["center", "center", "center", "flex-start"]}>
            <Link
              display={["none", "none", "none", "flex"]}
              className={styles.estiloLink}
              bg="#1E1E1E"
              color="#FFFFFF"
              border="none"
              onClick={() => scrollToSection(formulario)}
              padding="16px 70px"
              style={{
                textDecoration: "none",
              }}
            >
              Quero saber mais
            </Link>
          </Flex>
        </Box>
        <Flex className={styles.containerGrafico}>
          <Flex>
            <Flex flexDirection="column">
              <Text className={styles.textGrafico}>
                Veja quanto voc?? <br />
                economiza com o Bitt
              </Text>
              <Box
                display={["flex", "flex", "flex", "none"]}
                flexDirection="column"
                mx="auto"
                pr="75px"
              >
                <Text
                  fontSize="14px"
                  fontWeight="500"
                  lineHeight="21px"
                  letterSpacing="0em"
                  textAlign="left"
                >
                  Economia de
                </Text>
                <Flex>
                  <Text
                    mt="9px"
                    mr="16px"
                    fontSize="40px"
                    fontWeight="700"
                    lineHeight="59px"
                    letterSpacing="0em"
                    textAlign="left"
                  >
                    70%
                  </Text>
                  <Image src={ImgSetaTop} alt="Imagem Seta" />
                </Flex>
              </Box>
              <Box>
                <Image src={ImgGrafico} alt="Imagem gr??fico" height="178px" />
              </Box>
              <Flex
                fontSize="10px"
                fontWeight="600"
                lineHeight="15px"
                letterSpacing="-0.005em"
                textAlign="left"
                justifyContent="space-between"
              >
                <Text>Antes do Bitt</Text>

                <Text pr="41px">Depois do Bitt</Text>
              </Flex>
            </Flex>
            <Box
              fontSize="40px"
              fontWeight="700"
              lineHeight="59px"
              letterSpacing="0em"
              textAlign="left"
              mt="60px"
              ml="47px"
              display={["none", "none", "none", "block"]}
            >
              <Text
                fontSize="14px"
                fontWeight="500"
                lineHeight="21px"
                letterSpacing="0em"
                textAlign="left"
              >
                Carga de impostos a cada
              </Text>
              <Flex width="180px" alignItems="baseline">
                <Text mt="9px" mr="10px">
                  30 dias
                </Text>
                <Image src={ImgSetaDown} alt="Imagem Seta" />
              </Flex>
              <Box mt="66px">
                <Text
                  fontSize="14px"
                  fontWeight="500"
                  lineHeight="21px"
                  letterSpacing="0em"
                  textAlign="left"
                >
                  Economia de
                </Text>
                <Flex alignItems="baseline">
                  <Text mt="9px" mr="10px">
                    70%
                  </Text>
                  <Image src={ImgSetaTop} alt="Imagem Seta" />
                </Flex>
              </Box>
            </Box>
          </Flex>
          <Box
            display={["flex", "flex", "flex", "none"]}
            flexDirection="column"
            mx="auto"
            mt="16px"
            pr="75px"
          >
            <Text
              fontSize="14px"
              fontWeight="500"
              lineHeight="21px"
              letterSpacing="0em"
              textAlign="left"
            >
              Carga de impostos a cada
            </Text>
            <Flex>
              <Text
                mt="9px"
                mr="16px"
                fontSize="40px"
                fontWeight="700"
                lineHeight="59px"
                letterSpacing="0em"
                textAlign="left"
              >
                30 dias
              </Text>
              <Image src={ImgSetaDown} alt="Imagem Seta" />
            </Flex>
          </Box>
        </Flex>
      </Flex>
      <Box width="100%" bg="#FFB700" pb="57px">
        <Text
          display={["flex", "flex", "flex", "none"]}
          className={styles.reduzaDescription}
          maxWidth="335px"
          align="center"
          mx="auto"
        >
          {descCagaTribut}
        </Text>

        <Link
          display={["flex", "flex", "flex", "none"]}
          className={styles.estiloLink}
          bg="#1E1E1E"
          color="#FFFFFF"
          border="none"
          padding="16px 68px"
          mx="auto"
          onClick={() => scrollToSection(formulario)}
          width="309px"
          mt="59px"
          style={{
            textDecoration: "none",
          }}
        >
          Quero saber mais
        </Link>
      </Box>

      <Box>
        <Flex display={["flex", "flex", "flex", "none"]}>
          <Text
            mx="auto"
            color="#FFFFFF"
            fontSize="32px"
            fontWeight="700"
            lineHeight="47px"
            letterSpacing="0em"
            padding="71px 10px 43px 10px"
            textAlign="center"
            bgGradient="linear(to-b, #070707, #151414)"
          >
            Utilize a imagem da Sheila {hideBr} Mello sem custo adicional
          </Text>
        </Flex>
      </Box>
      <Flex
        as="section"
        flexDirection="column" //section Six
        className={styles.containerSix}
      >
        <Box
          className={styles.textUtilizeImg}
          display={["none", "none", "none", "block"]}
        >
          <Text className={styles.textUtilizeImgHead}>
            Utilize a imagem da Sheila <br /> Mello sem custo adicional
          </Text>
          <Text mb="33px">
            Ao selar a parceria, seu provedor passa a contar com o aux??lio de
            nossa equipe de marketing e comercial no lan??amento do App no
            provedor.
          </Text>
          <Text>
            Al??m disso, fornecemos o uso da imagem da Sheila Mello sem custo
            adicional, para que voc?? utilize na divulga????o da nossa parceria.
          </Text>
        </Box>
        <Flex>
          <Link
            className={styles.estiloLink}
            display={["none", "none", "none", "block"]}
            style={{
              textDecoration: "none",
            }}
            onClick={() => scrollToSection(formulario)}
            padding=" 16px 80px"
          >
            Quero saber mais
          </Link>
        </Flex>
      </Flex>
      <Box
        display={["block", "block", "block", "none"]}
        color="#FFFFFF85"
        maxWidth="336px"
        fontSize="14px"
        fontWeight="400"
        lineHeight="20px"
        letterSpacing="-0.005em"
        textAlign="center"
        mx="auto"
        mt="20px"
      >
        <Text mb="33px">
          Ao selar a parceria, seu provedor passa a contar com o aux??lio de
          nossa equipe de marketing e comercial no lan??amento do App no
          provedor.
        </Text>
        <Text>
          Al??m disso, fornecemos o uso da imagem da Sheila Mello sem custo
          adicional, para que voc?? utilize na divulga????o da nossa parceria.
        </Text>
        <Link
          className={styles.estiloLink}
          color="##131313"
          mt="29px"
          mb="88px"
          mx="20px"
          onClick={() => scrollToSection(formulario)}
          style={{
            textDecoration: "none",
          }}
        >
          Quero saber mais
        </Link>
      </Box>
      <Flex
        as="section" //section Seven
        className={styles.containerSectionSeven}
      >
        <Box>
          <Text className={styles.sectionSevenHeading}>
            Participe gratuitamente <br /> da Universidade SVA
          </Text>
          <Box display={["none", "none", "none", "block"]}>
            <Text className={styles.sevenDescription}>
              Receba o acesso gratuito ao nosso ambiente feito especialmente
              para provedores que querem extrair ao m??ximo o potencial dos SVAs.
            </Text>
            <Flex mt="30px">
              <Link
                className={styles.estiloLink}
                style={{
                  textDecoration: "none",
                }}
                onClick={() => scrollToSection(formulario)}
              >
                Quero saber mais
              </Link>
            </Flex>
          </Box>
        </Box>
        <Image
          src={ImgNotebook}
          alt="Imagem notebook"
          className={styles.ImgSeven}
        />
        <Box display={["block", "block", "block", "none"]} mt="49px">
          <Text className={styles.sevenDescription}>
            Receba o acesso gratuito ao nosso ambiente feito especialmente para
            provedores que querem extrair ao m??ximo o potencial dos SVAs.
          </Text>
          <Box display="flex">
            <Link
              className={styles.estiloLink}
              mx="auto"
              mt="24px"
              onClick={() => scrollToSection(formulario)}
              style={{
                textDecoration: "none",
              }}
            >
              Quero saber mais
            </Link>
          </Box>
        </Box>
      </Flex>
      <Flex
        as="section" //section Eight
        className={styles.containerSectionEight}
      >
        <Flex
          justifyContent="space-between"
          className={styles.contentSectionEight}
        >
          <Box
            pr={["0", "0", "0", "0", "38px"]}
            py={["39px", "39px", "39px", "117px"]}
          >
            <Text className={styles.headingEight}>
              Temos integra????o com <br />
              todos ERP???s do mercado
            </Text>
            <Link
              display={["none", "none", "none", "flex"]}
              onClick={() => scrollToSection(formulario)}
            >
              <Text className={styles.conversarComSuporte}>
                Falar com suporte agora
              </Text>
            </Link>
          </Box>
          <SlideErp />
          <Link
            display={["flex", "flex", "flex", "none"]}
            onClick={() => scrollToSection(formulario)}
            mx="auto"
            mt="60px"
          >
            <Text className={styles.conversarComSuporte}>
              Falar com suporte agora
            </Text>
          </Link>
        </Flex>
      </Flex>

      <Flex
        as="section" //section nine
        className={styles.containerSectionNine}
        ref={formulario}
      >
        <Box>
          <Text className={styles.headingNine}>Pronto para come??ar?</Text>
          <Text className={styles.descNine}>
            Entre em contato com nossa equipe e receba um plano sob medida para
            o seu provedor.
          </Text>
        </Box>
        <Box>
          <Form />
        </Box>
      </Flex>
      <Flex
        as="section" //section ten
        className={styles.containerSectionTen}
      >
        <Flex flexDirection="column">
          <Flex
            display="flex"
            flexDirection={["column", "column", "column", "row"]}
            justifyContent="space-between"
          >
            <Flex display="flex" flexDirection="column" justifyContent="center">
              <Text
                width="83px"
                padding="8px 24px 5px 24px"
                background-color="#202020"
                alignItems="center"
                fontSize="16px"
                fontWeight="400"
                lineHeight="20px"
                color="#FFB700"
                bg="#1E1E1E"
                borderRadius="40px"
              >
                FAQ
              </Text>
              <Box
                display="flex"
                justifyContent={["center", "center", "left", "center"]}
                ml={["10px", "10px", "10px", "0", "0"]}
              >
                <Text
                  fontSize={["28px", "28px", "28px", "35px"]}
                  fontWeight=" 600"
                  lineHeight={["36.96px", "36.96px", "36.96px", "60px"]}
                  letterSpacing={["0.5%", "0.5%", "0.5%", "0em"]}
                  textAlign="left"
                  color="#000000"
                  mt="32px"
                >
                  Tudo o que voc?? precisa <br />
                  saber sobre o Bitt
                </Text>
              </Box>
              <Flex>
                <Link
                  display={["none", "none", "none", "flex"]}
                  href="https://ev.braip.com/checkout/plardw8w/cheyj9rv"
                  fontSize="20px"
                  fontWeight="600"
                  lineHeight="30px"
                  letterSpacing="0em"
                  textAlign="center"
                  onClick={() => scrollToSection(formulario)}
                  bg="#FFB700"
                  color="#000000"
                  padding="13px 45px 13px 45px"
                  alignItems="center"
                  top="163px"
                  borderRadius="6px"
                  style={{
                    textDecoration: "none",
                  }}
                >
                  FAZER DIAGN??STICO GR??TIS
                </Link>
              </Flex>
            </Flex>

            <Box
              display={["flex", "flex", "flex", "none", "none"]}
              justifyContent="flex-end"
              px="5px"
            >
              <Link
                display={["none", "none", "none", "block"]}
                flexDirection="row-reverse"
                justifyContent="center"
                isExternal
                fontSize="20px"
                fontWeight="600"
                lineHeight="30px"
                onClick={() => scrollToSection(formulario)}
                style={{ textDecoration: "none" }}
                borderRadius="6px"
                padding={["13px 68px", "13px 68px", "13px 68px", "13px 68px"]}
                bg="#FFB700"
                mt="50px"
                mx="auto"
                px="30px"
              >
                Obter diagn??stico gr??tis
              </Link>
            </Box>
          </Flex>
        </Flex>
        <Accordion />
      </Flex>
    </Flex>
  );
};

export default Home;
