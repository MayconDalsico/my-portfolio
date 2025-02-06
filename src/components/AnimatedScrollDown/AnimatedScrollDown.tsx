import React, { useEffect } from "react";
import { styled, useTheme } from "@mui/system";

// Definindo o contêiner da animação de scroll
const ScrollContainer = styled("div")({
  position: "fixed",
  bottom: "80px",
  left: "80px",
  width: "40px",
  height: "55px",
});

const Mousey = styled("div")({
  width: "3px",
  padding: "10px 15px",
  height: "35px",
  border: "2px solid #fff",
  borderRadius: "25px",
  opacity: 0.75,
  boxSizing: "content-box",
});

// Definindo o estilo do scroller (a parte que se move)
const Scroller = styled("div")({
  width: "3px",
  height: "10px",
  borderRadius: "25%",
  backgroundColor: "#fff",
  animation: "scroll 2.2s cubic-bezier(.15,.41,.69,.94) infinite",
});

// Estilos globais incluindo as regras de scroll
const GlobalStyle = styled("style")`
  @keyframes scroll {
    0% {
      opacity: 0;
    }
    10% {
      transform: translateY(0);
      opacity: 1;
    }
    100% {
      transform: translateY(15px);
      opacity: 0;
    }
  }

  /* Estilos do Scroll */
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: var(--scroll-thumb-color, #404439);  /* Cor escura para fundo claro */
    border-radius: 10px;
  }

  ::-webkit-scrollbar-track {
    background-color: var(--scroll-track-color, #f1f1f1); /* Cor clara para fundo escuro */
  }
`;

const ScrollDown = () => {
  const theme = useTheme(); // Usando o tema MUI

  useEffect(() => {
    const isLightBackground = theme.palette.background.default === "#FFFFFF"; // Verifica se o fundo é claro

    // Aplica as cores do scrollbar dependendo do fundo da página
    document.documentElement.style.setProperty(
      "--scroll-thumb-color",
      isLightBackground ? theme.palette.text.primary : "#fff"
    );
    document.documentElement.style.setProperty(
      "--scroll-track-color",
      isLightBackground ? "#f1f1f1" : "#333"
    );
  }, [theme]); // Reaplica sempre que o tema mudar

  return (
    <>
      <GlobalStyle /> {/* Adicionando os estilos globais */}
      <ScrollContainer>
        <Mousey>
          <Scroller />
        </Mousey>
      </ScrollContainer>
    </>
  );
};

export default ScrollDown;
