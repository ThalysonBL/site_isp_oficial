import React, { useRef, useState } from "react";
// Import Swiper React components
import Carousel from "react-multi-carousel";

import "react-multi-carousel/lib/styles.css";

import "swiper/swiper-bundle.css";
import "swiper/css";
// Import Swiper styles
import "swiper/css/pagination";

import Modal from "react-modal";

// import required modules
//import { Pagination } from "swiper";

import {
  Flex,
  Text,
  Box,
  HStack,
  VStack,
  Button,
  SimpleGrid,
  useBreakpointValue,
} from "@chakra-ui/react";

import Image from "next/image";

// ID 1
import ImgSumicity from "../../../public/ImgSumicity.png";
import ImgAtex from "../../../public/ImgAtex.png";
import ImgBlink from "../../../public/ImgBlink.png";
import ImgBmi from "../../../public/ImgBmi.png";
import ImgBrick from "../../../public/ImgBrick.png";
import ImgClick from "../../../public/ImgClick.png";
import ImgCmt from "../../../public/ImgCmt.png";
import ImgConectaMg from "../../../public/ImgConectaMg.png";
import ImgCsi from "../../../public/ImgCsi.png";
import ImgDbs from "../../../public/ImgDbs.png";
import ImgFbNet from "../../../public/ImgFbNet.png";
import ImgFxNet from "../../../public/ImgFxNet.png";
import ImgEloNet from "../../../public/ImgEloNet.png";
import ImgWsNet from "../../../public/ImgWsNet.png";
import ImgFiber from "../../../public/ImgFiber.png";
import ImgWebby from "../../../public/ImgWebby.png";
import ImgWeA from "../../../public/ImgWeA.png";
import ImgVipnet from "../../../public/ImgVipnet.png";
import ImgUtopia from "../../../public/ImgUtopia.png";
import ImgUnidasNet from "../../../public/ImgUnidasNet.png";

//ID 2
import ImgWlan from "../../../public/ImgWlan.png";
import ImgWebnet from "../../../public/ImgWebnet.png";
import ImgVelloznet from "../../../public/ImgVelloznet.png";
import ImgUltraTurbo from "../../../public/ImgUltraTurbo.png";
import ImgTurboBsb from "../../../public/ImgTurboBsb.png";
import ImgTelecab from "../../../public/ImgTelecab.png";
import ImgSuperCaboTv from "../../../public/ImgSuperCaboTv.png";
import ImgStartNet from "../../../public/ImgStartNet.png";
import ImgSpeedTravel from "../../../public/ImgSpeedTravel.png";
import ImgSobralnet from "../../../public/ImgSobralnet.png";
import ImgSgv from "../../../public/ImgSgv.png";
import ImgSeliga from "../../../public/ImgSeliga.png";
import ImgRox from "../../../public/ImgRox.png";
import ImgRapeedo from "../../../public/ImgRapeedo.png";
import ImgProvernet from "../../../public/ImgProvernet.png";
import ImgPristonNet from "../../../public/ImgPristonNet.png";
import ImgPlis from "../../../public/ImgPlis.png";
import ImgPamnet from "../../../public/ImgPamnet.png";
import ImgOraPi from "../../../public/ImgOraPi.png";
import ImgOra from "../../../public/ImgOra.png";

// ID 3
import ImgNortelineJauba from "../../../public/ImgNortelineJauba.png";
import ImgNorteline from "../../../public/ImgNorteline.png";
import ImgNexter from "../../../public/ImgNexter.png";
import ImgNetfi from "../../../public/ImgNetfi.png";
import ImgNetFacil from "../../../public/ImgNetFacil.png";
import ImgNewMaster from "../../../public/ImgNewMaster.png";
import ImgMuvnet from "../../../public/ImgMuvnet.png";
import ImgMultimidia from "../../../public/ImgMultimidia.png";
import ImgMio from "../../../public/ImgMio.png";
import ImgMegalink from "../../../public/ImgMegalink.png";
import ImgMaxxNet from "../../../public/ImgMaxxNet.png";
import ImgMasterData from "../../../public/ImgMasterData.png";
import ImgMaster from "../../../public/ImgMaster.png";
import ImgMaisNorte from "../../../public/ImgMaisNorte.png";
import ImgLnTelecom from "../../../public/ImgLnTelecom.png";
import ImgLinnke from "../../../public/ImgLinnke.png";
import ImgLinkSete from "../../../public/ImgLink7.png";
import ImgLig10 from "../../../public/ImgLig10.png";
import ImgLibernet from "../../../public/ImgLibernet.png";
import ImgInternet10 from "../../../public/ImgInternet10.png";

//ID 4
import ImgInterede from "../../../public/ImgInterede.png";
import ImgInfornet from "../../../public/ImgInfornet.png";
import ImgInfoartes from "../../../public/ImgInfoartes.png";
import ImgInetvip from "../../../public/ImgInetvip.png";
import ImgImplantar from "../../../public/ImgImplantar.png";
import ImgHorizontes from "../../../public/ImgHorizontes.png";
import ImgHiitech from "../../../public/ImgHiitech.png";
import ImgHexa from "../../../public/ImgHexa.png";
import ImgGox from "../../../public/ImgGox.png";
import ImgGna from "../../../public/ImgGna.png";
import ImgGlobalTech from "../../../public/ImgGlobalTech.png";
import ImgGlobalLine from "../../../public/ImgGlobalLine.png";
import ImgGlobal from "../../../public/ImgGlobal.png";
import ImgGilnet from "../../../public/ImgGilnet.png";
import ImgGiganet from "../../../public/ImgGiganet.png";
import ImgFicar from "../../../public/ImgFicar.png";
import ImgOraMa from "../../../public/ImgOraMa.png";

import { AiOutlineClose } from "react-icons/ai";
import styles from "./styles.module.scss";

import { logosProvedores } from "../../../utils/logosProvedores";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
interface Props {
  style: string;
}
const customStyles = {
  content: {
    display: "flex",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    width: "60%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#ffffff",
    borderRadius: "12px",

    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-end",
  },
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.6)",
  },
};

export function ModalErps() {
  const isWide = useBreakpointValue({
    base: false,
    md: true,
    lg: true,
  });
  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    //subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }

  const slides = [
    {
      id: 0,
      img: (
        <>
          <Image src={ImgSumicity} alt="provedor" className={styles.image} />
          <Image src={ImgAtex} alt="provedor" className={styles.image} />
          <Image src={ImgBlink} alt="provedor" className={styles.image} />
          <Image src={ImgBmi} alt="provedor" className={styles.image} />
          <Image src={ImgBrick} alt="provedor" className={styles.image} />
        </>
      ),
      imgLineTwo: (
        <>
          <Image src={ImgClick} alt="provedor" className={styles.image} />
          <Image src={ImgCmt} alt="provedor" className={styles.image} />
          <Image src={ImgConectaMg} alt="provedor" className={styles.image} />
          <Image src={ImgCsi} alt="provedor" className={styles.image} />
          <Image src={ImgDbs} alt="provedor" className={styles.image} />
        </>
      ),
      imgLineThree: (
        <>
          <Image src={ImgFbNet} alt="provedor" className={styles.image} />
          <Image src={ImgFiber} alt="provedor" className={styles.image} />
          <Image src={ImgFxNet} alt="provedor" className={styles.image} />
          <Image src={ImgWsNet} alt="provedor" className={styles.image} />
          <Image src={ImgFiber} alt="provedor" className={styles.image} />
        </>
      ),
      imgLineFour: (
        <>
          <Image src={ImgWebby} alt="provedor" className={styles.image} />
          <Image src={ImgWeA} alt="provedor" className={styles.image} />
          <Image src={ImgUnidasNet} alt="provedor" className={styles.image} />
          <Image src={ImgVipnet} alt="provedor" className={styles.image} />
          <Image src={ImgUtopia} alt="provedor" className={styles.image} />
        </>
      ),
    },

    {
      id: 1,
      img: (
        <>
          <Image src={ImgWlan} alt="provedor" className={styles.image} />
          <Image src={ImgUnidasNet} alt="provedor" className={styles.image} />
          <Image src={ImgUnidasNet} alt="provedor" className={styles.image} />
          <Image src={ImgUltraTurbo} alt="provedor" className={styles.image} />
          <Image src={ImgTurboBsb} alt="provedor" className={styles.image} />
        </>
      ),
      imgLineTwo: (
        <>
          <Image src={ImgTelecab} alt="provedor" className={styles.image} />
          <Image src={ImgUnidasNet} alt="provedor" className={styles.image} />
          <Image src={ImgUnidasNet} alt="provedor" className={styles.image} />
          <Image src={ImgUnidasNet} alt="provedor" className={styles.image} />
          <Image src={ImgSobralnet} alt="provedor" className={styles.image} />
        </>
      ),
      imgLineThree: (
        <>
          <Image src={ImgSgv} alt="provedor" className={styles.image} />
          <Image src={ImgSeliga} alt="provedor" className={styles.image} />
          <Image src={ImgRox} alt="provedor" className={styles.image} />
          <Image src={ImgRapeedo} alt="provedor" className={styles.image} />
          <Image src={ImgSobralnet} alt="provedor" className={styles.image} />
        </>
      ),
      imgLineFour: (
        <>
          <Image src={ImgPristonNet} alt="provedor" className={styles.image} />
          <Image src={ImgUnidasNet} alt="provedor" className={styles.image} />
          <Image src={ImgPamnet} alt="provedor" className={styles.image} />
          <Image src={ImgUnidasNet} alt="provedor" className={styles.image} />
          <Image src={ImgOra} alt="provedor" className={styles.image} />
        </>
      ),
    },
    {
      id: 2,
      img: (
        <>
          <Image
            src={ImgNortelineJauba}
            alt="provedor"
            className={styles.image}
          />
          <Image src={ImgNorteline} alt="provedor" className={styles.image} />
          <Image src={ImgUnidasNet} alt="provedor" className={styles.image} />
          <Image src={ImgNetfi} alt="provedor" className={styles.image} />
          <Image src={ImgNetFacil} alt="provedor" className={styles.image} />
        </>
      ),
      imgLineTwo: (
        <>
          <Image src={ImgNewMaster} alt="provedor" className={styles.image} />
          <Image src={ImgMuvnet} alt="provedor" className={styles.image} />
          <Image src={ImgMultimidia} alt="provedor" className={styles.image} />
          <Image src={ImgMio} alt="provedor" className={styles.image} />
          <Image src={ImgMegalink} alt="provedor" className={styles.image} />
        </>
      ),
      imgLineThree: (
        <>
          <Image src={ImgMaxxNet} alt="provedor" className={styles.image} />
          <Image src={ImgMasterData} alt="provedor" className={styles.image} />
          <Image src={ImgUnidasNet} alt="provedor" className={styles.image} />
          <Image src={ImgUnidasNet} alt="provedor" className={styles.image} />
          <Image src={ImgUnidasNet} alt="provedor" className={styles.image} />
        </>
      ),
      imgLineFour: (
        <>
          <Image src={ImgUnidasNet} alt="provedor" className={styles.image} />
          <Image src={ImgUnidasNet} alt="provedor" className={styles.image} />
          <Image src={ImgUnidasNet} alt="provedor" className={styles.image} />
          <Image src={ImgUnidasNet} alt="provedor" className={styles.image} />
          <Image src={ImgInternet10} alt="provedor" className={styles.image} />
        </>
      ),
    },
    {
      id: 3,
      img: (
        <>
          <Image src={ImgUnidasNet} alt="provedor" className={styles.image} />
          <Image src={ImgInfornet} alt="provedor" className={styles.image} />
          <Image src={ImgInfoartes} alt="provedor" className={styles.image} />
          <Image src={ImgInetvip} alt="provedor" className={styles.image} />
          <Image src={ImgImplantar} alt="provedor" className={styles.image} />
        </>
      ),
      imgLineTwo: (
        <>
          <Image src={ImgHorizontes} alt="provedor" className={styles.image} />
          <Image src={ImgUnidasNet} alt="provedor" className={styles.image} />
          <Image src={ImgUnidasNet} alt="provedor" className={styles.image} />
          <Image src={ImgGox} alt="provedor" className={styles.image} />
          <Image src={ImgGna} alt="provedor" className={styles.image} />
        </>
      ),
      imgLineThree: (
        <>
          <Image src={ImgMaxxNet} alt="provedor" className={styles.image} />
          <Image src={ImgMasterData} alt="provedor" className={styles.image} />
          <Image src={ImgUnidasNet} alt="provedor" className={styles.image} />
          <Image src={ImgUnidasNet} alt="provedor" className={styles.image} />
          <Image src={ImgGlobal} alt="provedor" className={styles.image} />
        </>
      ),
      imgLineFour: (
        <>
          <Image src={ImgGilnet} alt="provedor" className={styles.image} />
          <Image src={ImgGiganet} alt="provedor" className={styles.image} />
          <Image src={ImgUnidasNet} alt="provedor" className={styles.image} />
          <Image src={ImgUnidasNet} alt="provedor" className={styles.image} />
          <Image src={ImgFicar} alt="provedor" className={styles.image} />
        </>
      ),
    },
    {
      id: 4,
      img: (
        <>
          <Image src={ImgUnidasNet} alt="provedor" className={styles.image} />
          <Image src={ImgInfornet} alt="provedor" className={styles.image} />
          <Image src={ImgInfoartes} alt="provedor" className={styles.image} />
          <Image src={ImgInetvip} alt="provedor" className={styles.image} />
          <Image src={ImgImplantar} alt="provedor" className={styles.image} />
        </>
      ),
      imgLineTwo: (
        <>
          <Image src={ImgHorizontes} alt="provedor" className={styles.image} />
          <Image src={ImgUnidasNet} alt="provedor" className={styles.image} />
          <Image src={ImgUnidasNet} alt="provedor" className={styles.image} />
          <Image src={ImgGox} alt="provedor" className={styles.image} />
          <Image src={ImgGna} alt="provedor" className={styles.image} />
        </>
      ),
      imgLineThree: (
        <>
          <Image src={ImgMaxxNet} alt="provedor" className={styles.image} />
          <Image src={ImgMasterData} alt="provedor" className={styles.image} />
          <Image src={ImgUnidasNet} alt="provedor" className={styles.image} />
          <Image src={ImgUnidasNet} alt="provedor" className={styles.image} />
          <Image src={ImgGlobal} alt="provedor" className={styles.image} />
        </>
      ),
      imgLineFour: (
        <>
          <Image src={ImgGilnet} alt="provedor" className={styles.image} />
          <Image src={ImgGiganet} alt="provedor" className={styles.image} />
          <Image src={ImgUnidasNet} alt="provedor" className={styles.image} />
          <Image src={ImgUnidasNet} alt="provedor" className={styles.image} />
          <Image src={ImgFicar} alt="provedor" className={styles.image} />
        </>
      ),
      MaisProv: "Entre outros provedores",
    },
  ];

  return (
    <>
      <Button
        color="#13131"
        background="none"
        backgroundColor="#ffb700"
        colorScheme="none"
        className={styles.estiloLink}
        style={{
          textDecoration: "none",
          padding: "16px 68px",
        }}
        type="button"
        onClick={openModal}
      >
        Ver mais
      </Button>

      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={{
          content: {
            display: "flex",
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            width: "60%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "#ffffff",
            borderRadius: "12px",
        
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-end",
          },
          overlay: {
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.6)",
          },
        }}
        className={styles.modalContainer}
      >
        <Button
          type="button"
          onClick={closeModal}
          style={{
            background: "none",
          }}
        >
          <AiOutlineClose />
        </Button>

        <Carousel
          //direction={"vertical"}
          swipeable={false}
          draggable={false}
          showDots={true}
          responsive={responsive}
          infinite={false}
          className={styles.containerModalSlides}
        >
          <Flex className={styles.slides}>
            <Flex className={styles.containerSlider}>
              <VStack
                width="100%"
                spacing={["50px", "70px", "70px", "70px"]}
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                mx="auto"
              >
                <HStack width="100%" justifyContent="space-between">
                  <Image
                    src={ImgSumicity}
                    alt="provedor"
                    className={styles.image}
                  />
                  <Image
                    src={ImgAtex}
                    alt="provedor"
                    className={styles.image}
                  />
                  <Image
                    src={ImgBlink}
                    alt="provedor"
                    className={styles.image}
                  />
                  {isWide && (
                    <>
                      <Image
                        src={ImgBmi}
                        alt="provedor"
                        className={styles.image}
                      />
                      <Image
                        src={ImgBrick}
                        alt="provedor"
                        className={styles.image}
                      />
                    </>
                  )}
                </HStack>
                <HStack width="100%" justifyContent="space-between">
                  <Image
                    src={ImgClick}
                    alt="provedor"
                    className={styles.image}
                  />
                  <Image src={ImgCmt} alt="provedor" className={styles.image} />
                  <Image
                    src={ImgConectaMg}
                    alt="provedor"
                    className={styles.image}
                  />
                  {isWide && (
                    <>
                      <Image
                        src={ImgCsi}
                        alt="provedor"
                        className={styles.image}
                      />
                      <Image
                        src={ImgDbs}
                        alt="provedor"
                        className={styles.image}
                      />
                    </>
                  )}
                </HStack>
                <HStack width="100%" justifyContent="space-between">
                  <Image
                    src={ImgFbNet}
                    alt="provedor"
                    className={styles.image}
                  />
                  <Image
                    src={ImgFiber}
                    alt="provedor"
                    className={styles.image}
                  />
                  <Image
                    src={ImgFxNet}
                    alt="provedor"
                    className={styles.image}
                  />
                  {isWide && (
                    <>
                      <Image
                        src={ImgWsNet}
                        alt="provedor"
                        className={styles.image}
                      />
                      <Image
                        src={ImgFiber}
                        alt="provedor"
                        className={styles.image}
                      />
                    </>
                  )}
                </HStack>
                <HStack width="100%" justifyContent="space-between">
                  <Image
                    src={ImgWebby}
                    alt="provedor"
                    className={styles.image}
                  />
                  <Image src={ImgWeA} alt="provedor" className={styles.image} />
                  <Image
                    src={ImgUnidasNet}
                    alt="provedor"
                    className={styles.image}
                  />
                  {isWide && (
                    <>
                      <Image
                        src={ImgVipnet}
                        alt="provedor"
                        className={styles.image}
                      />
                      <Image
                        src={ImgUtopia}
                        alt="provedor"
                        className={styles.image}
                      />
                    </>
                  )}
                </HStack>
              </VStack>
            </Flex>
          </Flex>
          <Flex className={styles.slides}>
            <Flex className={styles.containerSlider}>
              <VStack
                width="100%"
                spacing={["50px", "70px", "70px", "70px"]}
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                mx="auto"
              >
                <HStack width="100%" justifyContent="space-between">
                  <Image
                    src={ImgWlan}
                    alt="provedor"
                    className={styles.image}
                  />
                  <Image
                    src={ImgWebnet}
                    alt="provedor"
                    className={styles.image}
                  />
                  <Image
                    src={ImgVelloznet}
                    alt="provedor"
                    className={styles.image}
                  />
                  {isWide && (
                    <>
                      <Image
                        src={ImgUltraTurbo}
                        alt="provedor"
                        className={styles.image}
                      />
                      <Image
                        src={ImgTurboBsb}
                        alt="provedor"
                        className={styles.image}
                      />
                    </>
                  )}
                </HStack>
                <HStack width="100%" justifyContent="space-between">
                  <Image
                    src={ImgTelecab}
                    alt="provedor"
                    className={styles.image}
                  />
                  <Image
                    src={ImgSuperCaboTv}
                    alt="provedor"
                    className={styles.image}
                  />
                  <Image
                    src={ImgStartNet}
                    alt="provedor"
                    className={styles.image}
                  />
                  {isWide && (
                    <>
                      <Image
                        src={ImgSpeedTravel}
                        alt="provedor"
                        className={styles.image}
                      />
                      <Image
                        src={ImgSobralnet}
                        alt="provedor"
                        className={styles.image}
                      />
                    </>
                  )}
                </HStack>
                <HStack width="100%" justifyContent="space-between">
                  <Image src={ImgSgv} alt="provedor" className={styles.image} />
                  <Image
                    src={ImgSeliga}
                    alt="provedor"
                    className={styles.image}
                  />
                  <Image src={ImgRox} alt="provedor" className={styles.image} />

                  {isWide && (
                    <>
                      {" "}
                      <Image
                        src={ImgRapeedo}
                        alt="provedor"
                        className={styles.image}
                      />
                      <Image
                        src={ImgProvernet}
                        alt="provedor"
                        className={styles.image}
                      />
                    </>
                  )}
                </HStack>
                <HStack width="100%" justifyContent="space-between">
                  <Image
                    src={ImgPristonNet}
                    alt="provedor"
                    className={styles.image}
                  />
                  <Image
                    src={ImgPlis}
                    alt="provedor"
                    className={styles.image}
                  />

                  <Image
                    src={ImgPamnet}
                    alt="provedor"
                    className={styles.image}
                  />
                  {isWide && (
                    <>
                      <Image
                        src={ImgOraPi}
                        alt="provedor"
                        className={styles.image}
                      />
                      <Image
                        src={ImgOra}
                        alt="provedor"
                        className={styles.image}
                      />
                    </>
                  )}
                </HStack>
              </VStack>
            </Flex>
          </Flex>
          <Flex className={styles.slides}>
            <Flex className={styles.containerSlider}>
              <VStack
                width="100%"
                spacing={["50px", "70px", "70px", "70px"]}
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                mx="auto"
              >
                <HStack width="100%" justifyContent="space-between">
                  <Image
                    src={ImgNortelineJauba}
                    alt="provedor"
                    className={styles.image}
                  />
                  <Image
                    src={ImgNorteline}
                    alt="provedor"
                    className={styles.image}
                  />
                  <Image
                    src={ImgNexter}
                    alt="provedor"
                    className={styles.image}
                  />
                  {isWide && (
                    <>
                      <Image
                        src={ImgNetfi}
                        alt="provedor"
                        className={styles.image}
                      />
                      <Image
                        src={ImgNetFacil}
                        alt="provedor"
                        className={styles.image}
                      />
                    </>
                  )}
                </HStack>
                <HStack width="100%" justifyContent="space-between">
                  <Image
                    src={ImgNewMaster}
                    alt="provedor"
                    className={styles.image}
                  />
                  <Image
                    src={ImgMuvnet}
                    alt="provedor"
                    className={styles.image}
                  />
                  <Image
                    src={ImgMultimidia}
                    alt="provedor"
                    className={styles.image}
                  />
                  {isWide && (
                    <>
                      <Image
                        src={ImgMio}
                        alt="provedor"
                        className={styles.image}
                      />
                      <Image
                        src={ImgMegalink}
                        alt="provedor"
                        className={styles.image}
                      />
                    </>
                  )}
                </HStack>
                <HStack width="100%" justifyContent="space-between">
                  <Image
                    src={ImgMaxxNet}
                    alt="provedor"
                    className={styles.image}
                  />
                  <Image
                    src={ImgMasterData}
                    alt="provedor"
                    className={styles.image}
                  />

                  <Image
                    src={ImgMaisNorte}
                    alt="provedor"
                    className={styles.image}
                  />
                  {isWide && (
                    <>
                      <Image
                        src={ImgLinnke}
                        alt="provedor"
                        className={styles.image}
                      />
                      <Image
                        src={ImgLinkSete}
                        alt="provedor"
                        className={styles.image}
                      />
                    </>
                  )}
                </HStack>
                <HStack width="100%" justifyContent="space-between">
                  <Image
                    src={ImgMaster}
                    alt="provedor"
                    className={styles.image}
                  />
                  <Image
                    src={ImgLnTelecom}
                    alt="provedor"
                    className={styles.image}
                  />

                  <Image
                    src={ImgLig10}
                    alt="provedor"
                    className={styles.image}
                  />
                  {isWide && (
                    <>
                      <Image
                        src={ImgInterede}
                        alt="provedor"
                        className={styles.image}
                      />

                      <Image
                        src={ImgInternet10}
                        alt="provedor"
                        className={styles.image}
                      />
                    </>
                  )}
                </HStack>
              </VStack>
            </Flex>
          </Flex>
          <Flex className={styles.slides}>
            <Flex className={styles.containerSlider}>
              <VStack
                width="100%"
                spacing={["50px", "70px", "70px", "70px"]}
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                mx="auto"
              >
                <HStack width="100%" justifyContent="space-between">
                  <Image
                    src={ImgInfornet}
                    alt="provedor"
                    className={styles.image}
                  />
                  <Image
                    src={ImgInfoartes}
                    alt="provedor"
                    className={styles.image}
                  />
                  {isWide && (
                    <>
                      <Image
                        src={ImgInetvip}
                        alt="provedor"
                        className={styles.image}
                      />
                      <Image
                        src={ImgImplantar}
                        alt="provedor"
                        className={styles.image}
                      />
                    </>
                  )}
                </HStack>
                <HStack width="100%" justifyContent="space-between">
                  <Image
                    src={ImgHorizontes}
                    alt="provedor"
                    className={styles.image}
                  />
                  <Image
                    src={ImgHiitech}
                    alt="provedor"
                    className={styles.image}
                  />
                  <Image
                    src={ImgHexa}
                    alt="provedor"
                    className={styles.image}
                  />
                  {isWide && (
                    <>
                      <Image
                        src={ImgGox}
                        alt="provedor"
                        className={styles.image}
                      />
                      <Image
                        src={ImgGna}
                        alt="provedor"
                        className={styles.image}
                      />
                    </>
                  )}
                </HStack>
                <HStack width="100%" justifyContent="space-between">
                  <Image
                    src={ImgGlobalTech}
                    alt="provedor"
                    className={styles.image}
                  />
                  <Image
                    src={ImgUtopia}
                    alt="provedor"
                    className={styles.image}
                  />

                  <Image
                    src={ImgGlobal}
                    alt="provedor"
                    className={styles.image}
                  />
                  {isWide && (
                    <>
                      <Image
                        src={ImgGilnet}
                        alt="provedor"
                        className={styles.image}
                      />
                      <Image
                        src={ImgGiganet}
                        alt="provedor"
                        className={styles.image}
                      />
                    </>
                  )}
                </HStack>
                <HStack width="100%" justifyContent="space-between">
                  <Image
                    src={ImgWebby}
                    alt="provedor"
                    className={styles.image}
                  />
                  <Image
                    src={ImgFicar}
                    alt="provedor"
                    className={styles.image}
                  />
                  <Image
                    src={ImgUnidasNet}
                    alt="provedor"
                    className={styles.image}
                  />
                  {isWide && (
                    <>
                      <Image
                        src={ImgVipnet}
                        alt="provedor"
                        className={styles.image}
                      />
                      <Image
                        src={ImgOraMa}
                        alt="provedor"
                        className={styles.image}
                      />
                    </>
                  )}
                </HStack>
                <Box
                  fontSize={["16px", "20px", "20px", "20px"]}
                  fontWeight="600"
                >
                  <Text mt={["-40px", "0", "0", "0"]}>
                    Entre outros provedores
                  </Text>
                </Box>
              </VStack>
            </Flex>
          </Flex>
        </Carousel>
      </Modal>
    </>
  );
}
