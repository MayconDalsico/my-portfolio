import {
  Box,
  Button,
  Container,
  Grid,
  styled,
  Tooltip,
  Typography,
} from "@mui/material";
import Avatar from "../../../../assets/images/avatar.jpeg";
import DownloadIcon from "@mui/icons-material/Download";
import EmailIcon from "@mui/icons-material/Email";
import StyledButton from "../../../../components/StyledButton/StyledButton";
import { AnimatedBackground } from "../../../../components/AnimatedBackground/AnimateBackground";
import AnimatedTitle from "../../../../components/AnimatedTitle/AnimatedTitle";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import ScrollDown from "../../../../components/AnimatedScrollDown/AnimatedScrollDown";

const Hero = () => {
  const StyledHero = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    height: "100vh",
    display: "flex",
    alignItems: "center",
    position: "relative", // Permite o uso de position absolute nos filhos
    [theme.breakpoints.up("xs")]: {
      paddingTop: theme.spacing(12),
    },
    [theme.breakpoints.up("md")]: {
      // >= mobile
      paddingTop: "0",
    },
  }));

  const StyledImage = styled("img")(({ theme }) => ({
    width: "100%",
    borderRadius: "50%",
    border: `2px solid ${theme.palette.text.primary}`,
  }));

  const StyledButtonSocial = styled(Button)(() => ({
    background: "transparent",
    padding: "10px 20px",
    color: "#404439", // Cor do texto
    fontWeight: "bold",
    textTransform: "none", // Retira a transformação automática do texto
    "&:hover": {
      color: "#EF6018", // Cor do texto ao passar o mouse
    },
  }));

  const SocialIconsWrapper = styled(Box)(({ theme }) => ({
    position: "absolute",
    bottom: 30,
    left: "50%",
    transform: "translateX(-50%)",
    [theme.breakpoints.down("sm")]: {
      paddingTop: "40px", // Adiciona o padding-top no celular
    },
  }));

  return (
    <>
      <StyledHero >
        <Container maxWidth="lg" id="Hero">
          <Grid container spacing={2}>
            <Grid item xs={12} md={5}>
              <Box position="relative">
                <Box position="relative" maxWidth="100%" top={-130} right={130}>
                  <AnimatedBackground />
                </Box>
                <Box
                  position="absolute"
                  top="40%"
                  left="35%"
                  zIndex={2}
                  sx={{ transform: "translate(-40%, -50%)" }}
                  textAlign={"center"}
                >
                  <StyledImage src={Avatar} />
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={7}>
              <AnimatedTitle />
              <Grid
                container
                display="flex"
                justifyContent="center"
                spacing={3}
                pt={3}
              >
                <Grid
                  item
                  xs={12}
                  md={4}
                  display="flex"
                  justifyContent="center"
                >
                  <StyledButton
                    onClick={() => console.log("Download do Currículo")}
                  >
                    <DownloadIcon />
                    <Typography>Baixar Currículo</Typography>
                  </StyledButton>
                </Grid>
                <Grid
                  item
                  xs={12}
                  md={4}
                  display="flex"
                  justifyContent="center"
                >
                  <StyledButton
                    onClick={() => console.log("Encaminhar para contato")}
                  >
                    <EmailIcon />
                    <Typography>Meu Contato</Typography>
                  </StyledButton>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
        <Box
          position="absolute"
          bottom={30}
          left="50%"
          sx={{ transform: "translateX(-50%)" }}
        >
          <Grid display="flex" justifyContent="center" gap={"30px"}>
            <Tooltip title="Linkedin" arrow>
              <StyledButtonSocial
                href="https://www.linkedin.com/in/maycon-dalsico-silva-a5a98032b/"
                rel="noopener noreferrer"
              >
                <LinkedInIcon fontSize="large" />
              </StyledButtonSocial>
            </Tooltip>

            <Tooltip title="GitHub" arrow>
            <StyledButtonSocial
              href="https://github.com/MayconDalsico"
              rel="noopener noreferrer"
            >
              <GitHubIcon fontSize="large" />
            </StyledButtonSocial>
            </Tooltip>

            <Tooltip title="Instagram" arrow>
            <StyledButtonSocial
              href="https://www.instagram.com/elficStudio/#"
              rel="noopener noreferrer"
            >
              <InstagramIcon fontSize="large" />
            </StyledButtonSocial>
            </Tooltip>
          </Grid>
        </Box>
      </StyledHero>
      <ScrollDown />
    </>
    
  );
};

export default Hero;
