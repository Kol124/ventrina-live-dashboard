import { styled, alpha } from "@mui/material/styles";
import MuiButton, { ButtonProps } from "@mui/material/Button";

const Button = styled(MuiButton)<ButtonProps>(({ theme }) => ({
  fontSize: 15,
  width: 168,
  height: 50,
  fontWeight: 400,
  borderRadius: 5,
  textTransform: "none",
  boxShadow:
    "0px 4px 4px rgba(50, 50, 71, 0.08), 0px 4px 8px rgba(50, 50, 71, 0.06)",
  "&:hover": {
    backgroundColor: alpha(theme.palette.primary.main, 0.16),
  },
}));

export default Button;
