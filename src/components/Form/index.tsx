/* eslint-disable react/no-string-refs */
import styles from "./styles.module.scss";
import IconPeople from "../../../public/IconPeople.svg";
import { Flex, Text, Button } from "@chakra-ui/react";

import React, { useState } from "react";
import Image from "next/image";

export function Form() {
  return (
    <div>
      <form
        action="https://formsubmit.co/thalysonlimagv@gmail.com"
        method="POST"
        className={styles.containerForm}
      >
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_template" value="basic" />

        <label className={styles.styleLabel}>Nome</label>
        <input
          type="text"
          name="nome"
          required
          className={styles.estiloInput}
        />
        <label className={styles.styleLabel}>Nome da Empresa</label>

        <input
          type="text"
          name="Nome_da_empresa"
          required
          className={styles.estiloInput}
        />
        <label className={styles.styleLabel}>E-mail</label>

        <input
          type="email"
          name="E-mail"
          required
          className={styles.estiloInput}
        />
        <label className={styles.styleLabel}>
          Número de Telefone (WhatsApp)
        </label>
        <input
          type="number"
          name="Numero"
          required
          className={styles.estiloInput}
        />
        <Flex alignItems="center">
          <label className={styles.styleLabelCheckbox}></label>
          <input
            type="checkbox"
            name="Contato_por_whatsapp"
            value="aceito receber contato por whatsapp"
            className={styles.estiloCkeckboxEspaco}
          />
          Aceito receber contato por WhatsApp.
        </Flex>
        <Flex alignItems="center">
          <label className={styles.styleLabelCheckbox}></label>
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
        <button type="submit" className={styles.linkForm}>
          Entre em contato
        </button>
      </form>
    </div>
  );
}
