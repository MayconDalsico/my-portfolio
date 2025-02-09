import { Container, Grid, Typography } from "@mui/material";
import { motion } from "framer-motion";
import theme from "../../../../theme";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import StyledButton from "../../../../components/StyledButton/StyledButton";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';

const Contato = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(inView);
  }, [inView]);

  return (
    <>
      <Container
        id="Contato"
        maxWidth={false}
        sx={{
          backgroundColor: theme.palette.primary.main,
          height: "50vh",
          width: "100%",
          display: "flex",
          justifyContent: "center", // Centraliza o conteúdo na horizontal
          alignItems: "center", // Centraliza o conteúdo na vertical
          padding: "0", // Adiciona um padding adequado
        }}
      >
        <Grid
          container
          sx={{
            minHeight: "50vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center", // Centraliza o conteúdo dentro do grid
          }}
        >
          <Grid item xs={12}>
            <motion.div
              ref={ref}
              initial={{ opacity: 0, x: 100 }} // Começa invisível e fora da tela à direita
              animate={inView ? { opacity: 1, x: 0 } : {}} // Move para dentro ao ficar visível
              transition={{ duration: 1, ease: "easeOut" }} // Suavização da animação
            >
              <Typography
                sx={{
                  fontSize: "120px",
                  fontFamily: "sans-serif",
                  fontWeight: "bold",
                  color: "rgba(64, 68, 57, 1)",
                  position: "relative",
                  left: "50%",
                  transform: "translateX(-50%)",
                  zIndex: 1,
                  whiteSpace: "nowrap",
                  paddingBottom: "40px",
                }}
              >
                Contato
              </Typography>
            </motion.div>
          </Grid>

          <Grid container spacing={12} sx={{ maxWidth: "800px" }}>
            <Grid item xs={12} sm={6}>
              <Typography variant="h5" sx={{ fontWeight: "bold", color: "theme.palette.text.primary" }}>
                Endereço
              </Typography>
              <Typography sx={{ color: "theme.palette.text.primary" }}>
                Rua Manuel Ramos Lino, Coopahmil -
              </Typography>
              <Typography sx={{ color: "theme.palette.text.primary" }}>
                Cuiabá / MT
              </Typography>
              <Typography sx={{ fontWeight: "bold", color: "theme.palette.text.primary", display: "flex", alignItems: "center", justifyContent: "center", paddingTop: "30px" }}>
                <EmailIcon /> maycon-ro@hotmail.com
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="h5" sx={{ fontWeight: "bold", color: "theme.palette.text.primary", paddingBottom: "10px" }}>
                Entre em contato comigo
              </Typography>
              <StyledButton onClick={() => window.open("https://wa.me/5565992721071", "_blank")}>
                <WhatsAppIcon />
                <Typography>Enviar via WhatsApp</Typography>
              </StyledButton>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Contato;
