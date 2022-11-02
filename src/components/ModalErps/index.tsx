import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";
import {
  Flex,
  Text,
  Box,
  HStack,
  VStack,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@chakra-ui/react";

import Image from "next/image";

import ImgSumicity from "../../../public/ImgSumicity.png";
import ImgWebby from "../../../public/ImgWebby.png";
import ImgBlink from "../../../public/ImgBlink.png";
import ImgGiganet from "../../../public/ImgGiganet.png";
import ImgAmazonet from "../../../public/ImgAmazonet.png";
import ImgAtex from "../../../public/ImgAtex.png";
import ImgBmi from "../../../public/ImgBmi.png";
import ImgBrick from "../../../public/ImgBrick.png";
import ImgClick from "../../../public/ImgClick.png";
import ImgCmt from "../../../public/ImgCmt.png";
import ImgConectaMg from "../../../public/ImgConectaMg.png";
import ImgCsi from "../../../public/ImgCsi.png";
import ImgDbs from "../../../public/ImgDbs.png";
import ImgEloNet from "../../../public/ImgEloNet.png";
import ImgFbNet from "../../../public/ImgFbNet.png";

import styles from "./styles.module.scss";

import { logosProvedores } from "../../../utils/logosProvedores";

export function ModalErps() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const OverlayOne = () => (
    <ModalOverlay backdropFilter="blur(5px) hue-rotate(10deg)" />
  );

  const [overlay, setOverlay] = React.useState(<OverlayOne />);

  const slides = [
    {
      id: 1,
      img: (
        <>
          <Image src={ImgSumicity} alt="provedor" />
          <Image src={ImgSumicity} alt="provedor" />
          <Image src={ImgSumicity} alt="provedor" />
          <Image src={ImgSumicity} alt="provedor" />
          <Image src={ImgSumicity} alt="provedor" />

        </>
      ),
      imgLineTwo: (
        <>
          <Image src={ImgSumicity} alt="provedor" />
          <Image src={ImgSumicity} alt="provedor" />
          <Image src={ImgSumicity} alt="provedor" />
          <Image src={ImgSumicity} alt="provedor" />
          <Image src={ImgSumicity} alt="provedor" />

        </>
      ),
      imgLineThree: (
        <>
          <Image src={ImgSumicity} alt="provedor" />
          <Image src={ImgSumicity} alt="provedor" />
          <Image src={ImgSumicity} alt="provedor" />
          <Image src={ImgSumicity} alt="provedor" />
          <Image src={ImgSumicity} alt="provedor" />

        </>
      ),
      imgLineFour: (
        <>
          <Image src={ImgSumicity} alt="provedor" />
          <Image src={ImgSumicity} alt="provedor" />
          <Image src={ImgSumicity} alt="provedor" />
          <Image src={ImgSumicity} alt="provedor" />
          <Image src={ImgSumicity} alt="provedor" />

        </>
      ),
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
        onClick={onOpen}
      >
        Ver mais
      </Button>
      <Modal
        isCentered
        isOpen={isOpen}
        onClose={onClose}
        motionPreset="slideInBottom"
        size="xl"
        padding="20px"
      >
        {overlay}
        <ModalContent pt="2.5rem">
          <ModalCloseButton />
          <ModalBody>
            <Swiper
              direction={"vertical"}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              className={styles.containerModalSlides}
            >
              {slides.map((item) => {
                return (
                  <SwiperSlide key={item.id}>
                    <Flex className={styles.containerSlider}>
                      <VStack spacing="70px" justifyContent="space-between">
                        <HStack spacing="50px">
                          <Box>{item.img}</Box>
                        </HStack>
                        <HStack spacing="50px">
                          <Box>{item.imgLineTwo}</Box>
                        </HStack>
                        <HStack spacing="50px">
                          <Box>{item.imgLineThree}</Box>
                        </HStack>
                        <HStack spacing="50px">
                          <Box>{item.imgLineFour}</Box>
                        </HStack>
                      </VStack>
                    </Flex>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </ModalBody>
          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
