import { AppBar, MenuItem, styled, Toolbar } from "@mui/material";

const NavBar = () => {
  const StyledToolbar = styled(Toolbar)(() => ({
    display: "flex",
    justifyContent: "space-evenly",
  }));

  const StyledAppBar = styled(AppBar)(({ theme }) => ({
    borderBottom: "2px solid transparent",
    transition: "border-bottom 0.3s ease",
    "&:hover": {
      borderBottom: `5px double ${theme.palette.text.primary}`,
    },
  }));

  const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
    color: theme.palette.text.primary,
    transition: "color 0.3s ease",
    "&:hover": {
      color: theme.palette.secondary.main,
    },
    "&:focus": {
      outline: "none",
      boxShadow: "none",
      backgroundColor: "transparent",
    },
  }));

  // Função para fazer o scroll suave para a seção correspondente
  const scrollToSection = (id) => {
    if (typeof window !== "undefined") { // Garante que estamos no navegador
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  };
  

  return (
    <StyledAppBar position="absolute">
      <StyledToolbar>
        <StyledMenuItem onClick={() => scrollToSection("sobre-mim")}>
          SOBRE MIM
        </StyledMenuItem>
        <StyledMenuItem onClick={() => scrollToSection("habilidades")}>
          HABILIDADES
        </StyledMenuItem>
        <StyledMenuItem onClick={() => scrollToSection("projetos")}>
          PROJETOS
        </StyledMenuItem>
      </StyledToolbar>
    </StyledAppBar>
  );
};

export default NavBar;
