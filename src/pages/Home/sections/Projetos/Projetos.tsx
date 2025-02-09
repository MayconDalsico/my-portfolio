import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaCss3,
  FaJs,
} from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import {
  SiAntdesign,
  SiAxios,
  SiMysql,
  SiNodemon,
  SiPrisma,
  SiVite,
} from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";
import { Box, Container, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { Grid } from "@mui/material";
import HoverCard from "../../../../components/HoverCard/HoverCard";
import projeto01 from "../../../../assets/images/Agion Blog - Google Chrome 2025-01-19 01-46-24.mp4";
import projeto02 from "../../../../assets/images/Input - Google Chrome 2025-01-03 05-01-30.mp4";
import projeto03 from "../../../../assets/images/Nova guia - Google Chrome 2024-12-31 12-03-38.mp4";
import projeto04 from "../../../../assets/images/Gravação de Tela 2024-10-17 135348.mp4";
import projeto05 from "../../../../assets/images/Gravação de Tela 2024-11-14 212627.mp4";
import projeto06 from "../../../../assets/images/Gravação de Tela 2024-11-14 214329.mp4";
import projeto07 from "../../../../assets/images/ReplicaGTA.png";

const Projetos = () => {
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
        id="projetos"
        maxWidth={false}
        sx={{
          backgroundColor: "white",
          minHeight: "130vh", // Garante que ocupe toda a altura da tela
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid
          ref={ref} // Referência para detectar a visibilidade
          item
          xs={8}
          sx={{
            display: "flex",
            flexDirection: "column",
            textAlign: "center",
            position: "relative",
          }}
        >
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <Typography
                variant="h1"
                sx={{
                  fontSize: "120px",
                  fontFamily: "sans-serif",
                  fontWeight: "bold",
                  color: "rgba(9, 13, 0, 1)",
                  textAlign: "center", // Centraliza o texto horizontalmente
                  zIndex: 1,
                  whiteSpace: "nowrap",
                  paddingBottom:"40px",
                }}
              >
                PROJETOS
              </Typography>
            </motion.div>
        </Grid>

        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          gap={2}
          flexWrap="wrap"
          paddingTop={0}
        >
          <HoverCard
            icon={projeto01}
            title="Blog Agion"
            description="Um blog interno para registrar o dia a dia dos Analistas de Suporte, detalhando suas rotinas, desafios e soluções aplicadas. O objetivo é criar um repositório de conhecimento colaborativo, facilitando a troca de experiências e a padronização de processos dentro da equipe."
            techIcons={[
              <FaReact />,
              <RiNextjsFill />,
              <SiPrisma />,
              <IoLogoFirebase />,
              <FaJs />,
            ]}
            link="https://github.com/MayconDalsico/BlogAgion"
          />
          <HoverCard
            icon={projeto02}
            title="Tela de Login"
            description="Projeto desenvolvido utilizando exclusivamente HTML, JavaScript e CSS, com foco em simplicidade e eficiência no desenvolvimento de interfaces web."
            techIcons={[<FaCss3Alt />, <FaHtml5 />, <FaJs />]}
            link="https://maycondalsico.github.io/LoginSimplesMesmo/"
          />
          <HoverCard
            icon={projeto03}
            title="Site de Restaurante"
            description="Plataforma para reservas de mesas, consulta ao cardápio e serviços do restaurante, com uma seção dedicada para contato, realização de reservas e visualização dos serviços oferecidos."
            techIcons={[<FaNodeJs />, <SiNodemon />, <SiMysql />]}
            link="https://github.com/MayconDalsico/RestauranteSaboroso"
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
            description="Layout de uma área de login, com design focado na simplicidade e facilidade de uso, garantindo uma experiência intuitiva para o usuário."
            techIcons={[<FaReact />, <SiVite />]}
            link="https://github.com/MayconDalsico/loginLayouts1"
          />
          <HoverCard
            icon={projeto05}
            title="Academia Agion - P1"
            description="A plataforma é semelhante a um blog, onde o administrador terá o controle total sobre os usuários cadastrados, concedendo permissões específicas para cada um. O administrador poderá permitir que os usuários publiquem, editem ou excluam artigos, com base em suas permissões. O objetivo do projeto é implementar um sistema de artigos sobre as atividades diárias no serviço, permitindo aos colaboradores compartilhar experiências e informações de forma organizada e acessível."
            techIcons={[
              <RiNextjsFill />,
              <SiPrisma />,
              <SiAntdesign />,
              <SiAxios />,
              <FaReact />,
              <FaNodeJs />,
            ]}
            link="https://github.com/MayconDalsico/AcademiaParaPostagens"
          />
          <HoverCard
            icon={projeto06}
            title="Academia Agion - P2"
            description="A plataforma é semelhante a um blog, onde o administrador terá o controle total sobre os usuários cadastrados, concedendo permissões específicas para cada um. O administrador poderá permitir que os usuários publiquem, editem ou excluam artigos, com base em suas permissões. O objetivo do projeto é implementar um sistema de artigos sobre as atividades diárias no serviço, permitindo aos colaboradores compartilhar experiências e informações de forma organizada e acessível."
            techIcons={[
              <RiNextjsFill />,
              <SiPrisma />,
              <SiAntdesign />,
              <SiAxios />,
              <FaReact />,
              <FaNodeJs />,
            ]}
            link="https://github.com/MayconDalsico/AcademiaParaPostagens"
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
            icon={projeto07}
            title="Projeto GTA"
            description="O site é uma réplica do site oficial de Grand Theft Auto (GTA), criado exclusivamente para a prática de conceitos de HTML e CSS."
            techIcons={[<FaCss3Alt />, <FaHtml5 />, <FaJs />]}
            link="https://maycondalsico.github.io/projeto-gta"
          />
        </Box>
      </Container>
    </>
  );
};

export default Projetos;
