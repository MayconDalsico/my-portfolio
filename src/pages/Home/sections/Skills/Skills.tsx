import { Container } from "@mui/material";

const Skills = () => {
  return (
    <>
      <Container
        maxWidth={false}
        sx={{
          backgroundColor: "#090D00",
          minHeight: "100vh", // Garante que ocupe toda a altura da tela
          padding: "2rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1>Habilidades</h1>
      </Container>
    </>
  );
};

export default Skills;
