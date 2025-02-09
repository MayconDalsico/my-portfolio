import { Container, Grid, Tooltip, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaReact, FaJs } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { SiPrisma, SiAxios, SiMysql, SiVite } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const icons = [
  { component: FaReact, title: "React", color: "#61DAFB" },
  { component: RiNextjsFill, title: "Next.Js", color: "#fff" },
  { component: SiPrisma, title: "Prisma", color: "#2D3748" },
  { component: IoLogoFirebase, title: "Firebase", color: "#FFCA28" },
  { component: FaJs, title: "JavaScript", color: "#F7DF1E" },
  { component: FaHtml5, title: "HTML5", color: "#E34F26" },
  { component: FaCss3Alt, title: "CSS3", color: "#1572B6" },
  { component: SiAxios, title: "Axios", color: "#5A29B2" },
  { component: SiMysql, title: "MySQL", color: "#4479A1" },
  { component: SiVite, title: "Vite", color: "#646CFF" },
];

const Skills = () => {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: false });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(inView);
  }, [inView]);

  return (
    <Container
      id="habilidades"
      maxWidth={false}
      sx={{
        backgroundColor: "#090D00",
        minHeight: "50vh",
        paddingTop:"100px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
      }}
    >
      <Grid container sx={{ minHeight: "4vh", justifyContent: "center" }}>
        <Grid ref={ref} item xs={8} sx={{ textAlign: "center" }}>
                    <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <Typography
                variant="h1"
                sx={{
                  fontSize: "120px",
                  fontWeight: "bold",
                  color: "rgba(64, 68, 57, 1)",
                  textAlign: "center", // Centraliza o título
                  zIndex: 1,
                  whiteSpace: "nowrap",
                  paddingBottom:"40px",
                }}
              >
                HABILIDADES
              </Typography>
            </motion.div>
        </Grid>
      </Grid>

      <Grid container spacing={4} justifyContent="center" paddingBottom={20}>
        {icons.map(({ component: Icon, title, color }, index) => (
          <Tooltip key={title} title={title} arrow>
            <Grid item>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Icon size={50} color={color} />
              </motion.div>
            </Grid>
          </Tooltip>
        ))}
      </Grid>
    </Container>
  );
};

export default Skills;
