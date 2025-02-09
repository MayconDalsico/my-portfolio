import { Container, Typography } from "@mui/material"
import theme from "../../../../theme"

const Footer = () => {


    return (
      <>
        <Container
                maxWidth={false}
                sx={{
                  backgroundColor: theme.palette.primary.main,
                  borderTop: `5px double ${theme.palette.text.primary}`,
                  height: "5vh",
                  width: "100%",
                  display: "flex",
                  justifyContent: "center", // Centraliza o conteúdo na horizontal
                  alignItems: "center", // Centraliza o conteúdo na vertical
                  padding: "0", // Adiciona um padding adequado
                }}>
                <Typography>
                    Copyright © 2025 <strong>Maycon Dalsico Silva</strong>. Todos os direitos reservados.
                </Typography>

        </Container>
      </>
    )
  }
  
  export default Footer