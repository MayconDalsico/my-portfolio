import { Container } from "@mui/material";

const Animation = () => {
  return (
    <section style={{ position: 'relative', height: '100vh' }}>
      <video 
        src="/walk0001-0032.mp4" // O vídeo está na pasta public
        autoPlay 
        loop 
        muted 
        style={{ 
          position: 'absolute', 
          top: 0, 
          left: 0, 
          width: '100%', 
          height: '100%', 
          objectFit: 'cover' // Assegura que o vídeo cubra toda a tela
        }}
      />
      <h1 
        style={{ 
          position: 'absolute', 
          top: '10%', 
          left: '30%', 
          transform: 'translate(-50%, -50%)', 
          color: 'white',
          zIndex: 1 // Garantir que o texto apareça sobre o vídeo
        }}
      >
        Programador de jogos
      </h1>
    </section>
  );
};

export default Animation;
