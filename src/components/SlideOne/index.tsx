import { Flex, Text, Box } from "@chakra-ui/react";
import styles from "../../../styles/Home.module.scss";

import IconI from "../../../public/IconI.svg";
import Image from "next/image";

import Carousel from "react-multi-carousel";

import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },

  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 4,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 3.4,
  },
};

export function SlideOne() {
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
      description: "+ de 3 milhões de acessos negociados com ISPS’s",
    },
    {
      id: 4,
      description: "Integração com todos os ERP’s do mercado",
    },
  ];

  return (
    <Carousel
      responsive={responsive}
      slidesToSlide={1}
      showDots={false}
      arrows={false}
      focusOnSelect
      className={styles.containerSlideOne}
    >
      {lista.map((item) => {
        return (
          <Flex
            key={item.id}
            flexDirection="column"
            mt="32px"
            mx="40px"
            alignItems="center"
          >
            <Image src={IconI} alt="Icon I" />
            <Text className={styles.estiloTextIcon}>{item.description}</Text>
          </Flex>
        );
      })}
    </Carousel>
  );
}
