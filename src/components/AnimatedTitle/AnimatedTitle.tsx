import styled, { keyframes } from "styled-components";

const animateText = keyframes`
  0% { background-position: 0% 50%; }
  100% { background-position: 20% 50%; }
`;

const Container = styled.div`
  font-family: "Neuton", serif;
  background: #090d00;
  color: rgba(255, 255, 255, 0.25);
  text-align: center;
  height: 30vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AnimatedText = styled.div`
  text-transform: uppercase;
  letter-spacing: 0.5em;
  display: inline-block;
  border: 4px double rgba(255, 255, 255, 0.25);
  border-width: 4px 0;
  padding: 1.5em 0;
  position: relative;
  width: 40em;
  max-width: 90%;
`;

const AnimatedName = styled.span`
  font: 700 4em "Oswald", sans-serif;
  letter-spacing: 0;
  padding: 0.25em 0 0.325em;
  display: block;
  margin: 0 auto;
  text-shadow: 0 0 80px rgba(255, 255, 255, 0.5);

  /* Clip Background Image */
  background: url(https://i.ibb.co/RDTnNrT/animated-text-fill.png) repeat-y;
  background-size: cover;
  -webkit-background-clip: text;
  background-clip: text;

  /* Animate Background Image */
  -webkit-text-fill-color: transparent;
  animation: ${animateText} 20s linear infinite;

  /* Hardware Acceleration */
  transform: translate3d(0, 0, 0);
  backface-visibility: hidden;
`;

const Subtitle = styled.span`
  display: block;
  font-size: 1.2em;
  font-weight: bold;
  margin-top: 0.5em;
  color: rgba(255, 255, 255, 0.6);
`;

const AnimatedTitle = () => {
  return (
    <Container>
      <AnimatedText>
        <AnimatedName>Maycon Dalsico Silva</AnimatedName>
        <Subtitle>— Dev. Front-end —</Subtitle>
        <Subtitle>— Dev. Games —</Subtitle>
      </AnimatedText>
    </Container>
  );
};

export default AnimatedTitle;
