import React, { useRef, useState } from "react";
import { Flex, Button } from "@chakra-ui/react";
import Image from "next/image";

import styles from "./styles.module.scss";

import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

import ImgHubsoft from "../../../public/ImgHubsoft.png";
import ImgMkSolutions from "../../../public/ImgMkSolutions.png";
import ImgIxc from "../../../public/ImgIxc.png";
import ImgInterfocus from "../../../public/ImgInterfocus.png";
import ImgRbx from "../../../public/ImgRbx.png";

import IconLeft from "../../../public/IconSetaLeft.svg";
import Carousel from "react-multi-carousel";

import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },

  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
  },
};

export function SlideErp() {
  let carouselref = useRef<any>();
  let [value, setValue] = useState(1);

  const [selectedCard, setSelectedCard] = useState(1);

  function selectCard(indice: any) {
    setSelectedCard(indice + 1);
    //if (maisUm) {
    //  setSelectedCard(indice + 1);
    // }
  }

  function maisUm(indice: any) {}

  function menosUm(indice: any) {}

  const slidesImg = [
    {
      id: 1,
      img: <Image src={ImgHubsoft} alt="Imagem" />,
    },
    {
      id: 2,
      img: <Image src={ImgMkSolutions} alt="Imagem" />,
    },
    { id: 3, img: <Image src={ImgRbx} alt="Imagem" /> },
    { id: 4, img: <Image src={ImgIxc} alt="Imagem" /> },
    { id: 5, img: <Image src={ImgInterfocus} alt="Imagem" /> },
  ];

  return (
    <Flex flexDirection="column" alignItems="flex-end" pt="25px">
      <Flex mb="55px">
        <Button
          style={{
            background: "none",
            color: "#FFFFFF",
            padding: "10px 5px",
            marginLeft: "13px",

            marginRight: "8px",
          }}
          onClick={() => {
            const nextSlide = carouselref.current.state.currentSlide - 1;
            carouselref.current.goToSlide(nextSlide);
            setSelectedCard(selectedCard - 1);
          }}
        >
          <BiChevronLeft size="1.5rem" color="#FFFFFF" />
        </Button>
        <Button
          style={{
            background: "none",
            borderRadius: "100px",
            padding: "10px 5px",
          }}
          onClick={() => {
            const nextSlide = carouselref.current.state.currentSlide + 1;
            carouselref.current.goToSlide(nextSlide);
            setSelectedCard(selectedCard + 1);
          }}
        >
          <BiChevronRight size="1.5rem" color="#FFFFFF" />
        </Button>
      </Flex>
      <Carousel
        responsive={responsive}
        ref={(el) => {
          if (el) {
            carouselref.current = el;
          }
        }}
        infinite
        slidesToSlide={1}
        showDots={false}
        arrows={false}
        focusOnSelect
        className={styles.container}
      >
        {slidesImg.map((item) => {
          return (
            <Flex
              key="id"
              width="50vw"
              alignItems="center"
              justifyContent="center"
            >
              {item.img}
            </Flex>
          );
        })}
      </Carousel>
    </Flex>
  );
}
