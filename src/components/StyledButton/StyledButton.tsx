import { styled } from "@mui/material";
import { ReactNode } from "react";

interface StyledButtonProps {
    children: ReactNode
    onClick: () => void
}

const StyledButton: React.FC <StyledButtonProps> = ({ children, onClick }) => {
  const StyledButton = styled("button")(({ theme }) => ({
    backgroundColor: "transparent",
    border: `1px solid ${theme.palette.text.primary}`,
    borderRadius: "3px",
    padding: "5px 15px",
    width: "100%",
    color: theme.palette.text.primary,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    cursor:"pointer",
    gap:"10px",
    "&:hover": {
      backgroundColor: theme.palette.secondary.main,
      color: "#fff",
    },
  }));

  return (
    <>
      <StyledButton onClick={onClick}>{children}</StyledButton>
    </>
  );
};

export default StyledButton;
