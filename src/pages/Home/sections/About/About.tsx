import { Container, Grid, Typography } from "@mui/material";


const About = () => {
  return (
    <Container
      maxWidth={false}
      sx={{
        backgroundColor: "white",
        minHeight: "100vh", // Garante que ocupe toda a altura da tela
        padding: "2rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Grid
        container
        sx={{
          minHeight: "50vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid
          item
          xs={8}
          sx={{ display: "flex", flexDirection: "column", textAlign: "center" }}
        >
            <Typography
              variant="h2"
              paddingTop={0}
              sx={{ fontSize: "48px", fontFamily: "sans-serif" }}
            >
              Sobre mim
            </Typography>
          <p>
            Estudante de Engenharia de Software, desenvolvedor Front-end e
            programador de jogos 2D/3D. Tenho experiência com diversas
            linguagens de programação, aplicadas tanto em projetos pessoais
            quanto em soluções para empresas. Busco sempre entregar qualidade e
            eficiência no desenvolvimento de sistemas.
          </p>
        </Grid>
      </Grid>
      

    
    </Container>
  );
};

export default About;
