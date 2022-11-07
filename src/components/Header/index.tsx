import React from "react";
import {
  Box,
  
 
} from "@chakra-ui/react";

import { Nav } from "./Nav";

export function Header() {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      bg="#0E0E0E"
      p={["10px 20px", "10px 20px", "10px 20px", "0 112px"]}
      width="100%"
      alignItems="center"
    >
      <Nav />
    </Box>
  );
}
