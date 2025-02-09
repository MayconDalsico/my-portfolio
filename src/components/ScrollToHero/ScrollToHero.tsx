import React, { useState, useEffect } from "react";
import { styled, useTheme } from "@mui/system";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward"; // Ícone de seta para cima (MUI)
import { Tooltip } from "@mui/material";

// Contêiner do botão
const ScrollContainer = styled("div")({
  position: "fixed",
  bottom: "80px",
  right: "80px",
  width: "50px",
  height: "50px",
  backgroundColor: "trnasparent",
  borderRadius: "50%",
  border: "2px solid white",
  boxShadow: "0px 4px 10px rgba(0,0,0,0.3)",
  cursor: "pointer",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 1000,
  opacity: 0,
  visibility: "hidden",
  transition: "opacity 0.3s ease-in-out, visibility 0.3s ease-in-out",

  "&.show": {
    opacity: 1,
    visibility: "visible",
  },
});


// Estilos globais incluindo animação de subida
const GlobalStyle = styled("style")`
  @keyframes scrollUp {
    0% {
      opacity: 0;
    }
    10% {
      transform: translateY(15px);
      opacity: 1;
    }
    100% {
      transform: translateY(0);
      opacity: 0;
    }
  }
`;

const ScollToHero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const theme = useTheme(); // Pegando o tema MUI

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <GlobalStyle />
      <Tooltip title="Voltar ao topo" arrow>
      <ScrollContainer className={isVisible ? "show" : ""} onClick={scrollToTop}>
        <ArrowUpwardIcon style={{ fontSize: 30, color: "##EF6018" }} /> {/* Ícone de seta */}
      </ScrollContainer>
      </Tooltip>
    </>
  );
};

export default ScollToHero;
