import styles from "./styles.module.scss";
import IconPeople from "../../../public/IconPeople.svg";
import {
  Flex,
  Text,
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

import React, { useState } from "react";
import Image from "next/image";

export function Form() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const OverlayOne = () => (
    <ModalOverlay backdropFilter="blur(5px) hue-rotate(10deg)" />
  );

  const [overlay, setOverlay] = React.useState(<OverlayOne />);

  const [nome, setNome] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    console.log(nome);
  }

  return (
    <div>
      <form
        action="https://formsubmit.co/thalysonlimagv@gmail.com"
        method="POST"
        className={styles.containerForm}
        //onClick={handleSubmit}
      >
        <input
          type="hidden"
          name="_next"
          href="/Home"
        />
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_template" value="basic" />

        <label for="Nome" className={styles.styleLabel}>
          Nome
        </label>
        <input
          type="text"
          name="Nome"
          required
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          className={styles.estiloInput}
        />
        <label for="Nome_da_empresa" className={styles.styleLabel}>
          Nome da Empresa
        </label>

        <input
          type="text"
          name="Nome_da_empresa"
          required
          className={styles.estiloInput}
        />
        <label for="E-mail" className={styles.styleLabel}>
          E-mail
        </label>

        <input
          type="email"
          name="E-mail"
          required
          className={styles.estiloInput}
        />
        <label for="Numero" className={styles.styleLabel}>
          Número de Telefone (WhatsApp)
        </label>
        <input
          type="number"
          name="Numero"
          required
          className={styles.estiloInput}
        />
        <Flex alignItems="center">
          <label
            for="Contato_por_whatsapp"
            className={styles.styleLabelCheckbox}
          ></label>
          <input
            type="checkbox"
            name="Contato_por_whatsapp"
            value="aceito receber contato por whatsapp"
            className={styles.estiloCkeckboxEspaco}
          />
          Aceito receber contato por WhatsApp.
        </Flex>
        <Flex alignItems="center">
          <label
            for="Contato_por_e-mail"
            className={styles.styleLabelCheckbox}
          ></label>
          <input
            type="checkbox"
            name="Contato_por_e-mail"
            value="aceito receber contato por e-mail"
            className={styles.estiloCkeckboxEspaco}
          />
          Aceito receber contato por E-mail.
        </Flex>
        <p className={styles.textForm}>
          Solicitamos seus dados apenas quando realmente precisamos deles.
          Quando clicar você concorda com os Termos de Uso e Política de
          Privacidade
        </p>
        <button
          type="submit"
          className={styles.linkForm} //onClick={onOpen}
          padding="14px 71px"
        >
          Entre em contato
        </button>
      </form>
      <Modal
        isCentered
        isOpen={isOpen}
        onClose={onClose}
        motionPreset="slideInBottom"
        size="xl"
      >
        {overlay}
        <ModalContent>
          <ModalCloseButton />
          <ModalBody></ModalBody>
          <ModalFooter>
            <h1>teste</h1>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
}
