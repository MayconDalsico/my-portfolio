import { AppBar, MenuItem, styled, Toolbar } from "@mui/material";

const NavBar = () => {

  const StyledToolbar = styled(Toolbar)(() => ({
    display: "flex",
    justifyContent: "space-evenly",
  }));

  const StyledAppBar = styled(AppBar)(({ theme }) => ({
    borderBottom: "2px solid transparent", // Borda padrão invisível
    transition: "border-bottom 0.3s ease", // Suaviza a transição da borda
    "&:hover": {
      borderBottom: `1px double ${theme.palette.text.primary}`, // Borda dupla ao passar o mouse
    },
  }));

  const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
    color: theme.palette.text.primary,
    transition: "color 0.3s ease",
    "&:hover": {
      color: theme.palette.secondary.main,
    },
    "&.Mui-focusVisible": {
      outline: "none", // Remove o contorno de foco
    },
    "&:focus": {
      outline: "none", 
      boxShadow: "none", 
      backgroundColor: "transparent",
    },
  }));

  return (
    <StyledAppBar position="absolute">
      <StyledToolbar>
        <StyledMenuItem>SOBRE MIM</StyledMenuItem>
        <StyledMenuItem>HABILIDADES</StyledMenuItem>
        <StyledMenuItem>PROJETOS</StyledMenuItem>
      </StyledToolbar>
    </StyledAppBar>
  );
};

export default NavBar;
