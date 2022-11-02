import Link from "next/link";
import { Box, Text, useBreakpointValue } from "@chakra-ui/react";
import Image from "next/image";

import styles from "./styles.module.scss"

import GooglePlay from "../../../public/googlePlay.svg";
import IconApple from "../../../public/iconApple.svg";

type DadosProps = {

}

export function BaixeApp() {
  const isWideOcultar = useBreakpointValue({
    base: true,
    md: true,
    lg: false,
    xl: false,
  });
  const hideBr = isWideOcultar ? "" : <br />; //incluir br no texto
  return (
    <Link
      href="https://play.google.com/store/apps/details?id=com.bittrainers"
      style={{
        textDecoration: "none",
      }}
    >
      <a className={styles.estiloImg}>
        <Box
          display="flex"
          alignItems="center"
          bg="#FFB700"
          borderRadius="6px"
          border="2px solid #FFB700"
          p={[
            "9px 0 8px 14px",
            "9px 15px 8px 15px",
            "9px 15px 8px 15px",
            "15px 0 15px 20px",
          ]}
          mb="32px"
          justifyContent="flex-start"
          className={styles.styleTransition}
        >
          <Box>
            <Image src={GooglePlay} alt="Google Play" />
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            ml={["10px", "15px", "15px", "20px"]}
          >
            <Text
              fontSize="10px"
              fontWeight="400"
              lineHeight="15px"
              textAlign="left"
            >
              DISPONÍVEL NO
              {hideBr}
            </Text>
            <Text
              fontSize={["16px", "20px", "20px", "20px"]}
              fontWeight="600"
              lineHeight={["17px", "15px", "15px", "15px"]}
              textAlign="left"
            >
              Google Play
            </Text>
          </Box>
        </Box>
      </a>
    </Link>
  );
}
