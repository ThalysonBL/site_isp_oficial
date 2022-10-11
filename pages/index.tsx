import type { NextPage } from 'next'
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import { Header } from "../components/Header/index";
import { Flex, Text, Box, Link } from "@chakra-ui/react";

import IconI from "../public/IconI.svg";
import ImgDevice from "../public/ImgDevices.png";
import { BiCheck } from "react-icons/bi";

import { BaixeApp } from "../src/components/BaixeApp/index";


const Home: NextPage = () => {
  return (
    <Flex as="article" flexDirection="column" bg="#0E0E0E">
      <Flex className={styles.sectionOne}>
        <Box>
          <Text
            fontSize=" 42px"
            fontWeight=" 700"
            lineHeight=" 62px"
            letterSpacing=" 0em"
            textAlign=" left"
            color=" #ffffff"
            width="596px"
          >
            O maior streaming de saúde e bem-estar do Brasil a serviço do seu
            provedor
          </Text>
          <Flex mt="20px">
            <Box>
              <Image src={IconI} alt="Icon I" />
              <Text className={styles.estiloTextIcon}>+ de 150 parceiros</Text>
            </Box>
            <Box>
              <Image src={IconI} alt="Icon I" />
              <Text className={styles.estiloTextIcon}>
                Reduza 18% de cancelamento
              </Text>
            </Box>
            <Box>
              <Image src={IconI} alt="Icon I" />
              <Text className={styles.estiloTextIcon}>
                + de 3 milhões de acessos negociados com ISPS’s
              </Text>
            </Box>
            <Box>
              <Image src={IconI} alt="Icon I" />
              <Text className={styles.estiloTextIcon}>
                Integração com todos os ERP’s do mercado
              </Text>
            </Box>
          </Flex>
          <Flex justifyContent="space-between" mt="28px">
            <Link
              className={styles.estiloLink}
              style={{
                textDecoration: "none",
              }}
            >
              Fale com o especialista
            </Link>
            <Text>SETA AQUI</Text>
          </Flex>
        </Box>
        <Flex width="592px" height="436px" bg="gray">
          Vídeo aqui
        </Flex>
      </Flex>
      <Flex as="section" className={styles.sectionTwo}>
        <Text className={styles.headingTwo}>
          Agregue valor aos seus usuários finais
        </Text>
        <Box>
          <Text className={styles.descriptionTwo}>
            Os provedores tradicionais estão cada vez mais{" "}
            <span> incapazes de atender às necessidades do usuário.</span>
          </Text>
          <Text className={styles.descriptionTwo}>E não é para menos…</Text>
          <Text className={styles.descriptionTwo}>
            À medida que o tempo passa, há uma mudança contínua na forma como as
            pessoas consomem e avaliam seus serviços.
          </Text>
          <Text className={styles.descriptionTwo}>
            Esqueça a ideia de que basta entregar o que se promete.
          </Text>
          <Text className={styles.descriptionTwo}>
            (afinal, isso é o mínimo que se espera de uma empresa séria).
          </Text>
          <Text className={styles.descriptionTwo}>
            Quem busca criar uma base de clientes fiéis, satisfeitos e com maior
            longevidade,
            <span> deve se dedicar às entregas que vão além do básico.</span>
          </Text>
          <Text className={styles.descriptionTwo}>
            E é isso o que você recebe com o Bit Trainers, uma plataforma
            parceria projetada para
            <span>
              &nbsp;entregar o que há de melhor em saúde e bem-estar para seus
              usuários.
            </span>
          </Text>
          <Flex mt="20px" justifyContent="center">
            <Link
              className={styles.estiloLink}
              style={{
                textDecoration: "none",
              }}
            >
              Quero começar agora!
            </Link>
          </Flex>
        </Box>

        <Flex mt="160px">
          <Box className={styles.containerQuantidade}>
            <Text>Somos mais de</Text>
            <Text
              fontSize="200px"
              fontWeight="800"
              lineHeight="200px"
              letterSpacing="0em"
              textAlign="left"
            >
              150
            </Text>
            <Text>PROVEDORES</Text>
          </Box>

          <Box ml="58px">
            <Text
              fontSize="24px"
              fontWeight="500"
              lineHeight="36px"
              letterSpacing="-0.01em"
              textAlign="left"
            >
              Empresas que confiam em nós:
            </Text>
            Slides aqui
          </Box>
        </Flex>
      </Flex>
      <Flex as="section" bg="#FFB700" padding="95px 112px">
        <Box>
          <Text className={styles.headingThree}>
            Ofereça o que há de melhor em{" "}
            <span> benefícios para os seus atuais e futuros clientes </span> e
            automaticamente:
          </Text>
          <Flex flexDirection="column">
            <Box>
              <Box className={styles.containerBeneficios}>
                <Text>
                  <span>Aumente</span> a retenção da sua base de clientes.
                </Text>
              </Box>
              <Box className={styles.containerBeneficios}>
                <Text>
                  <span> Reduza</span> os esforços do time de vendas para fechar
                  novos contratos.
                </Text>
              </Box>
              <Box className={styles.containerBeneficios}>
                <Text>
                  <span>Incentive</span> mudanças positivas no estilo de vida
                  com recompensas na plataforma.
                </Text>
              </Box>
              <Box className={styles.containerBeneficios}>
                <Text>
                  <span>Construa</span> uma cultura de provedor que entrega
                  muito além do que se espera.
                </Text>
              </Box>
            </Box>
            <Link
              className={styles.estiloLink}
              mt="48px"
              color="#FFB700"
              bg="#000000"
              width="384px"
              style={{
                textDecoration: "none",
              }}
              alignItems="center"


            >
              Faça um diagnóstico grátis
            </Link>
          </Flex>
        </Box>
        <Image src={ImgDevice} alt="Imagem de dispositivos eletrônicos" />
      </Flex>
      <Flex
        as="section"
        flexDirection="column"
        bg="#F6F6F6"
        justifyContent="center"
        pt="112px"
      >
        <Text className={styles.headingBeneficios}>
          Uma parceria em que todos saem ganhando
        </Text>
        <Text
          fontSize="24px"
          fontWeight="500"
          lineHeight="36px"
          letterSpacing="-0.01em"
          textAlign="center"
        >
          Confira as vantagens recebidas por todos que utilizam o Bit Trainers
        </Text>
        <Flex
          bg="#131313"
          color="#FFFFFF"
          mx="112px"
          mb="24px"
          mt="63px"
          justifyContent="space-between"
          padding="114px 74px"
        >
          <Flex
            flexDirection="column"
            borderRight="1px solid #FFB700"
            width="60%"
          >
            <Text className={styles.headingInBox}>
              Benefícios para o provedor
            </Text>
            <Box className={styles.estiloBeneficios}>
              <Flex alignItems="center">
                <Box className={styles.estiloIcon}>
                  <BiCheck />
                </Box>
                <Text>Fidelização de Clientes </Text>
              </Flex>
              <Flex alignItems="center">
                <Box className={styles.estiloIcon}>
                  <BiCheck />
                </Box>
                <Text>Aumento da Competitividade </Text>
              </Flex>
              <Flex alignItems="center">
                <Box className={styles.estiloIcon}>
                  <BiCheck />
                </Box>
                <Text>Redução da Inadimplência </Text>
              </Flex>
              <Flex alignItems="center">
                <Box className={styles.estiloIcon}>
                  <BiCheck />
                </Box>
                <Text>Crescimento de Receita </Text>
              </Flex>
              <Flex alignItems="center">
                <Box className={styles.estiloIcon}>
                  <BiCheck />
                </Box>
                <Text>Diversificação de Produtos </Text>
              </Flex>
              <Flex alignItems="center">
                <Box className={styles.estiloIcon}>
                  <BiCheck />
                </Box>
                <Text>Atração de Novos Clientes </Text>
              </Flex>
              <Flex alignItems="center">
                <Box className={styles.estiloIcon}>
                  <BiCheck />
                </Box>

                <Text>Diminuição da Rotatividade </Text>
              </Flex>
              <Flex alignItems="center">
                <Box className={styles.estiloIcon}>
                  <BiCheck />
                </Box>

                <Text>Fortalecimento da Marca </Text>
              </Flex>
              <Flex alignItems="center">
                <Box className={styles.estiloIcon}>
                  <BiCheck />
                </Box>

                <Text>Benefício tributário </Text>
              </Flex>
            </Box>
          </Flex>
          <Flex flexDirection="column" ml="72px">
            <Flex>
              <Text className={styles.headingInBox} color="#FFB700">
                Benefícios para o usuário
              </Text>
            </Flex>
            <Box className={styles.estiloBeneficios}>
              <Flex alignItems="center">
                <Box className={styles.estiloIcon}>
                  <BiCheck />
                </Box>
                <Text>Melhor Experiência de Compra</Text>
              </Flex>

              <Flex alignItems="center">
                <Box className={styles.estiloIcon}>
                  <BiCheck />
                </Box>
                <Text>Planos de treino de acordo com cada objetivo</Text>
              </Flex>
              <Flex alignItems="center">
                <Box className={styles.estiloIcon}>
                  <BiCheck />
                </Box>
                <Text>Demonstração de exercícios feitas por profissionais</Text>
              </Flex>

              <Flex alignItems="center">
                <Box className={styles.estiloIcon}>
                  <BiCheck />
                </Box>
                <Text>Dicas de nutrição e receitas</Text>
              </Flex>
              <Flex alignItems="center">
                <Box className={styles.estiloIcon}>
                  <BiCheck />
                </Box>
                <Text>Programas de treinamento com referências no mercado</Text>
              </Flex>
              <Flex alignItems="center">
                <Box className={styles.estiloIcon}>
                  <BiCheck />
                </Box>
                <Text>Acesso prático a Yoga e meditação</Text>
              </Flex>
              <Flex alignItems="center">
                <Box className={styles.estiloIcon}>
                  <BiCheck />
                </Box>
                <Text>Atualização de aulas diárias</Text>
              </Flex>
            </Box>
          </Flex>
        </Flex>
        <Flex flexDirection="column" px="112px">
          <Text>Veja como funciona na prática:</Text>
          <Box>
            <Flex
              width="100%"
              height="604px"
              bg="gray"
              borderRadius="6px"
            ></Flex>
            <Text>
              Acesse o App gratuitamente e confira Disponível nas plataformas:
            </Text>
            <Flex>
              <BaixeApp />
            </Flex>
          </Box>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default Home
