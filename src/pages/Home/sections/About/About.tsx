import { Container, Grid, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const About = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(inView);
  }, [inView]);

  return (
    <Container
      id="sobre-mim"
      maxWidth={false}
      sx={{
        backgroundColor: "white",
        minHeight: "100vh",
        padding: "2rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
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
          position: "relative",
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
            initial={{ opacity: 0, x: 100 }} // Começa invisível e fora da tela à direita
            animate={inView ? { opacity: 1, x: 0 } : {}} // Move para dentro ao ficar visível
            transition={{ duration: 1, ease: "easeOut" }} // Suavização da animação
          >
            <Typography
              variant="h1"
              sx={{
                fontSize: "120px",
                fontFamily: "sans-serif",
                fontWeight: "bold",
                color: "rgba(9, 13, 0, 1)",
                position: "relative",
                left: "50%", // Centraliza horizontalmente
                transform: "translateX(-50%)", // Ajuste para centralização correta
                zIndex: 1,
                whiteSpace: "nowrap",
                paddingBottom: "40px",
              }}
            >
              SOBRE MIM
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }} // Começa invisível e deslocado para baixo
            animate={inView ? { opacity: 1, y: 0 } : {}} // Só anima quando estiver visível
            transition={{ duration: 1, ease: "easeOut", delay: 0.3 }} // Atraso para suavizar
          >
            <p>
              Sou estudante de Engenharia de Software, desenvolvedor Front-end e
              programador de jogos 2D/3D. Estou sempre explorando novas
              linguagens de programação e aplicando meus conhecimentos em
              projetos pessoais e soluções para empresas. Tenho como objetivo
              entregar soluções de alta qualidade e eficiência no
              desenvolvimento de sistemas.
            </p>
          </motion.div>
        </Grid>
      </Grid>

      {/* Efeito Dripping Liquid dentro do container */}
      <div className="cont">
        {[...Array(24)].map((_, i) => (
          <div key={i} className="drip"></div>
        ))}
      </div>

      <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
        <defs>
          <filter id="goo">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="10"
              result="blur"
            />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
              result="goo"
            />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>

      {/* Adicione seu CSS com o efeito de dripping liquid */}
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .cont {
          width: 100%;
          height: 100%;
          position: absolute;
          top: 0;
          left: 0;
          overflow: hidden;
          border-top: 15px solid #EF6018;
          border-bottom: 15px solid #EF6018;
          filter: url("#goo");
          box-shadow: 0 2px 10px #EF6018;
        }

        .drip {
          height: 30px;
          width: 30px;
          border-radius: 50%;
          background: #EF6018;
          position: absolute;
          top: -100%;
          left: 2%;
          animation: falling 5s linear infinite;
        }

        @keyframes falling {
          0% {
            top: -100%;
          }
          50% {
            top: 0%;
          }
          80% {
            top: 80%;
          }
          100% {
            top: 100%;
          }
        }

        .cont .drip:nth-child(1) {
          animation-delay: -0.2s;
          background: #EF6018;
          left: 173px;
        }
        .cont .drip:nth-child(2) {
          animation-delay: -0.4s;
          background: #EF6018;
          left: 76px;
        }
        .cont .drip:nth-child(3) {
          animation-delay: -0.6s;
          background: #EF6018;
          left: 96px;
        }
        .cont .drip:nth-child(4) {
          animation-delay: -0.8s;
          background: #EF6018;
          left: 24px;
        }
        .cont .drip:nth-child(5) {
          animation-delay: -1s;
          background: #EF6018;
          left: 93px;
        }
        .cont .drip:nth-child(6) {
          animation-delay: -1.2s;
          background: #EF6018;
          left: 117px;
        }
          
        .cont .drip:nth-child(7) {
          animation-delay: -1.4s;
          background: #EF6018;
          height:5px;
          width:5px;
          left: 117px;
          left:31px;
        }

        .cont .drip:nth-child(9){
  border-color:#EF6018;
  height:2px;
  width:2px;
  animation-delay: -1.8s;
  background:#EF6018;
  left:14px;
  margin-left:60px;
}
.cont .drip:nth-child(10){
  border-color:#EF6018;
  height:16px;
  width:16px;
  animation-delay: -2s;
  background:#EF6018;
  left:143px;
  margin-left:60px;
}
.cont .drip:nth-child(11){
  border-color:#EF6018;
  height:11px;
  width:11px;
  animation-delay: -2.2s;
  background:#EF6018;
  left:10px;
  margin-left:60px;
}
.cont .drip:nth-child(12){
  border-color:#EF6018;
  height:4px;
  width:4px;
  animation-delay: -2.4s;
  background:#EF6018;
  left:158px;
  margin-left:60px;
}
.cont .drip:nth-child(13){
  border-color:#EF6018;
  height:18px;
  width:18px;
  animation-delay: -2.6s;
  background:#EF6018;
  left:163px;
  margin-left:60px;
}
.cont .drip:nth-child(14){
  border-color:#EF6018;
  height:4px;
  width:4px;
  animation-delay: -2.8s;
  background:#EF6018;
  left:168px;
  margin-left:60px;
}
.cont .drip:nth-child(15){
  border-color:#EF6018;
  height:13px;
  width:13px;
  animation-delay: -3s;
  background:#EF6018;
  left:103px;
  margin-left:60px;
}
.cont .drip:nth-child(16){
  border-color:#EF6018;
  height:40px;
  width:40px;
  animation-delay: -3.2s;
  background:#EF6018;
  left:158px;
  margin-left:60px;
}
.cont .drip:nth-child(17){
  border-color:#EF6018;
  height:27px;
  width:27px;
  animation-delay: -3.4s;
  background:#EF6018;
  left:179px;
  margin-left:60px;
}
.cont .drip:nth-child(18){
  border-color:#EF6018;
  height:13px;
  width:13px;
  animation-delay: -3.6s;
  background:#EF6018;
  left:97px;
  margin-left:60px;
}
.cont .drip:nth-child(19){
  border-color:#EF6018;
  height:23px;
  width:23px;
  animation-delay: -3.8s;
  background:#EF6018;
  left:149px;
  margin-left:60px;
}
.cont .drip:nth-child(20){
  border-color:#EF6018;
  height:20px;
  width:20px;
  animation-delay: -4s;
  background:#EF6018;
  left:156px;
  margin-left:60px;
}


}

      `}</style>
    </Container>
  );
};

export default About;
