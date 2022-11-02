import {
  Accordion as AccordionList,
  AccordionItem,
  AccordionButton,
  Box,
  AccordionIcon,
  AccordionPanel,
  Flex,
} from "@chakra-ui/react";

export function Accordion() {
  return (
    <AccordionList allowToggle width={["100%", "400px", "520px", "520px"]}>
      <AccordionItem borderRadius="8px" border="2px solid #FFB700" mb="24px">
        <h2>
          <AccordionButton width={["100%", "400px", "520px", "520px"]}>
            <Box
              flex="1"
              textAlign="left"
              p="0.9rem 6px"
              fontWeight="500"
              fontSize="1.2rem"
              lineHeight="1.6875rem"
            >
              Quais são os principais benefícios que o SVA Bit Trainers oferece
              para meu provedor?
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel
          pb={4}
          _expanded={{ bg: "tomato", color: "white" }}
          padding="1.2rem"
        >
          O Bit Trainers é o melhor e mais completo SVA fitness do mercado. Além
          da economia tributária que oferecer um SVA gera para o provedor, o
          Bitt possui o plano Premium que poderá ser vendido tanto no varejo,
          quanto incluso nos planos e combos, possibilitando um aumento no
          faturamento do seu provedor e a retenção dos seus clientes.
        </AccordionPanel>
      </AccordionItem>

      <AccordionItem borderRadius="8px" border="2px solid #FFB700" mb="24px">
        <h2>
          <AccordionButton>
            <Box
              flex="1"
              textAlign="left"
              p="0.9rem 6px"
              fontWeight="500"
              fontSize="1.2rem"
              lineHeight="1.6875rem"
            >
              Quais os principais diferenciais do Bit Trainers?
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4} padding="1.2rem">
          Além dos benefícios já citados anteriormente, o Bitt possui uma equipe
          de relacionamento e marketing centrado no provedor que realiza
          treinamentos com as equipes de marketing e vendas, fornece materiais
          para auxilar na divulgação da parceria e está sempre à disposição para
          fazer com que o nosso SVA seja um sucesso dentro do seu provedor.
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem borderRadius="8px" border="2px solid #FFB700" mb="24px">
        <h2>
          <AccordionButton>
            <Box
              flex="1"
              textAlign="left"
              p="0.9rem 6px"
              fontWeight="500"
              fontSize="1.2rem"
              lineHeight="1.6875rem"
            >
              Para quais ERPS o Bitt possui integração?
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4} padding="1.2rem">
          Hoje o Bit Trainers já possui integração com todos os principais ERPs
          do mercado, como IXC, Synstuite (Voalle), SGP, RBX, InterFocus, MK
          Solutions 3.0, WGC, TopSapp, HubSoft e temos também a API Rest que
          permite integrar com qualquer outro, caso o provedor utilize um
          sistema próprio.
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem borderRadius="8px" border="2px solid #FFB700" mb="24px">
        <h2>
          <AccordionButton>
            <Box
              flex="1"
              textAlign="left"
              p="0.9rem 6px"
              fontWeight="500"
              fontSize="1.2rem"
              lineHeight="1.6875rem"
            >
              O provedor precisa ter um número mínimo de clientes para oferecer
              o Bit Trainers?
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4} padding="1.2rem">
          Claro que não! Todo e qualquer provedor é mais que bem vindo como
          nosso cliente e parceiro. Hoje atendemos desde provedores com 400
          clientes na base, até provedores com mais de 200k. Independente do
          tamanho do seu provedor, o SVA Bit Trainers está aqui pronto pra
          melhorar a saúde e qualidade de vida dos seus clientes.
        </AccordionPanel>
      </AccordionItem>
    </AccordionList>
  );
}
