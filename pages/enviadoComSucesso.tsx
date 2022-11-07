import { Flex, Text, Box } from "@chakra-ui/react";
import styles from "../styles/Home.module.scss";
import Link from "next/link";
export default function EnviadoComSucesso() {
  return (
    <Flex flexDirection="column">
      <Flex
        bg="#F2F2F2"
        margin="5%"
        justifyContent="center"
        flexDirection="column"
      >
        <Text
          fontSize="20px"
          fontWeight="600"
          padding="30px"
          textAlign="center"
        >
          Recebemos o envio! <br />
          Você pode voltar a navegação do site clicando no link abaixo.
        </Text>
        <Box mx="auto">
          <Link href="/Home">
            <Box className={styles.estiloLink} padding="10px">Voltar a Home</Box>
          </Link>
        </Box>
      </Flex>
    </Flex>
  );
}
