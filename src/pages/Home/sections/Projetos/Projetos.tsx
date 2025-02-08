import { Box, Container, Typography } from "@mui/material"
import HoverCard from "../../../../components/HoverCard/HoverCard";
import projeto01 from "../../../../assets/images/Agion Blog - Google Chrome 2025-01-19 01-46-24.mp4";
import projeto02 from "../../../../assets/images/Input - Google Chrome 2025-01-03 05-01-30.mp4";
import projeto03 from "../../../../assets/images/Nova guia - Google Chrome 2024-12-31 12-03-38.mp4";
import projeto04 from "../../../../assets/images/Gravação de Tela 2024-10-17 135348.mp4";
import projeto05 from "../../../../assets/images/Gravação de Tela 2024-11-14 212627.mp4";
import projeto06 from "../../../../assets/images/Gravação de Tela 2024-11-14 214329.mp4";


const Projetos = () => {


    return (
      <>
            <Container
      maxWidth={false}
      sx={{
        backgroundColor: "white",
        minHeight: "100vh", // Garante que ocupe toda a altura da tela
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
      >
        <Typography
              variant="h2"
              sx={{ fontSize: "48px", fontFamily: "sans-serif" }}
            >
              Projetos</Typography>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        gap={2}
        flexWrap="wrap"
        paddingTop={5}
      >
        
        <HoverCard
          icon={projeto01}
          title="Blog Agion"
          description="Um blog interno para registrar o dia a dia dos Analistas de Suporte, detalhando suas rotinas, desafios e soluções aplicadas. O objetivo é criar um repositório de conhecimento colaborativo, facilitando a troca de experiências e a padronização de processos dentro da equipe."
          link="#"
        />
        <HoverCard
          icon={projeto02}
          title="Tela de Login"
          description="Projeto feito apenas com HTML, JavaScript e CSS."
          link="#"
        />
        <HoverCard
          icon={projeto03}
          title="Site de Restaurante"
          description="Plataforma para reservas de mesas, consulta ao cardápio e serviços do restaurante, com uma seção dedicada para contato, realização de reservas e visualização dos serviços oferecidos."
          link="#"
        />
      </Box>

      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        gap={2}
        flexWrap="wrap"
        paddingTop={5}
      >
      <HoverCard
          icon={projeto04}
          title="Tela de Login"
          description="Um blog interno para registrar o dia a dia dos Analistas de Suporte, detalhando suas rotinas, desafios e soluções aplicadas. O objetivo é criar um repositório de conhecimento colaborativo, facilitando a troca de experiências e a padronização de processos dentro da equipe."
          link="#"
        />
        <HoverCard
          icon={projeto05}
          title="Academia Agion - P1"
          description="Projeto feito apenas com HTML, JavaScript e CSS."
          link="#"
        />
        <HoverCard
          icon={projeto06}
          title="Academia Agion - P2"
          description="Plataforma para reservas de mesas, consulta ao cardápio e serviços do restaurante, com uma seção dedicada para contato, realização de reservas e visualização dos serviços oferecidos."
          link="#"
        />
      </Box>
        </Container>

      </>
    )
  }
  
  export default Projetos