import React, { useState } from "react";
import { Box, Typography, Card, CardContent, styled, Modal, Button } from "@mui/material";

interface HoverCardProps {
  icon: string;
  title: string;
  description: string;
  link: string;
}

const CardContainer = styled(Card)({
  position: "relative",
  width: "400px",
  height: "260px",
  overflow: "hidden",
  cursor: "pointer",
  "&:hover .face1": {
    transform: "translateY(-100%)", // Move a imagem para cima
  },
  "&:hover .face2": {
    transform: "translateY(0)", // Move a descrição para cima
  },
});

const Face1 = styled(Box)({
  position: "absolute",
  width: "100%",
  height: "100%",
  background: "#333",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  transition: "0.5s",
  transform: "translateY(0)",
  zIndex: 2,
});

const Face2 = styled(CardContent)({
  position: "absolute",
  width: "100%",
  height: "100%",
  background: "#fff",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  transition: "0.5s",
  transform: "translateY(100%)",
  zIndex: 1,
});

const TitleOverlay = styled(Box)({
  position: "absolute",
  bottom: 10,
  width: "100%",
  left: "95%",
  transform: "translateX(-50%)",
  background: "rgba(0, 0, 0, 0.7)",
  color: "white",
  padding: "8px 16px",
  borderRadius: "5px",
});

const ModalContent = styled(Box)({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "60%",
  maxWidth: "800px",
  backgroundColor: "white",
  boxShadow: "0px 0px 10px rgba(0,0,0,0.3)",
  borderRadius: "10px",
  padding: "20px",
  display: "flex",
  flexDirection: "row",
  gap: "20px",
});

const HoverCard: React.FC<HoverCardProps> = ({ icon, title, description, link }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <CardContainer>
        <Face1 className="face1">
          <video src={icon} autoPlay loop muted width="100%" />
          <TitleOverlay>
            <Typography variant="h6">{title}</Typography>
          </TitleOverlay>
        </Face1>
        <Face2 className="face2">
          <Typography variant="body2" color="textPrimary">
            {description}
          </Typography>
          <Button
            onClick={() => setOpen(true)}
            sx={{ marginTop: "10px", fontWeight: 700, color: "#333", border: "1px solid #333" }}
          >
            Ver mais
          </Button>
        </Face2>
      </CardContainer>

      {/* Modal */}
      <Modal open={open} onClose={() => setOpen(false)}>
        <ModalContent>
          {/* Vídeo à esquerda */}
          <Box flex={1} display="flex" justifyContent="center" alignItems="center">
            <video src={icon} controls width="100%" style={{ borderRadius: "10px" }} />
          </Box>

          {/* Informações à direita */}
          <Box flex={1} display="flex" flexDirection="column" justifyContent="center" gap={2}>
            <Typography variant="h5" fontWeight={700}>{title}</Typography>
            <Typography variant="body1">{description}</Typography>
            <Box display="flex" gap={2}>
              <Button variant="contained" color="primary" href={link} target="_blank">Acessar Projeto</Button>
              <Button variant="outlined" color="secondary" onClick={() => setOpen(false)}>Fechar</Button>
            </Box>
          </Box>
        </ModalContent>
      </Modal>
    </>
  );
};

export default HoverCard;
